import { createStore } from "vuex";
import { Product } from "@/types/Product";

export default createStore({
  state: {
    products: [] as Product[],
    isLoading: false,
  },
  getters: {
    getProducts(state) {
      const uncheckedProducts: Product[] = [];
      const checkedProducts: Product[] = [];

      state.products.forEach((product) => {
        if (product.isChecked) {
          checkedProducts.push(product);
        } else {
          uncheckedProducts.push(product);
        }
      });

      uncheckedProducts.sort((a, b) => b.date - a.date);
      checkedProducts.sort((a, b) => a.date - b.date);
      console.log([...uncheckedProducts, ...checkedProducts]);

      return [...uncheckedProducts, ...checkedProducts];
    },
    getIsLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    setProduct(state, payload: Product) {
      state.products.unshift(payload);
    },
    setLoadedProducts(state, payload: Product[]) {
      state.products = payload;
    },
    removeProduct(state, id) {
      state.products = state.products.filter((product) => product.id !== id);
    },
    setLoading(state, value) {
      state.isLoading = value;
    },
    updateCheckbox(state, payload) {
      const product = state.products.find((item) => item.id === payload.id);
      if (product) {
        product.isChecked = !product.isChecked;
        state.products = [...state.products];
      }
    },
  },
  actions: {
    async saveToProduct(context, payload: Product) {
      try {
        const response = await fetch(
          `https://vue-http-project-7a50b-default-rtdb.europe-west1.firebasedatabase.app/products.json`,
          {
            method: "POST",
            body: JSON.stringify({
              productName: payload.productName,
              isChecked: payload.isChecked,
              date: payload.date,
            }),
          }
        );
        const data: Product = await response.json();
        if (!response.ok) {
          const error = new Error("Failed to post!");
          throw error;
        }
        context.commit("setProduct", {
          productName: payload.productName,
          isChecked: payload.isChecked,
          id: data.name,
          date: payload.date,
        });
      } catch (err) {
        console.log(err);
      }
    },
    async removeProduct(context, id: string) {
      try {
        const response = await fetch(
          `https://vue-http-project-7a50b-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          const error = new Error("Failed to delete!");
          throw error;
        }

        context.commit("removeProduct", id);
      } catch (err) {
        console.log(err);
      }
    },
    async getProducts(context) {
      context.commit("setLoading", true);
      try {
        const response = await fetch(
          `https://vue-http-project-7a50b-default-rtdb.europe-west1.firebasedatabase.app/products.json`
        );
        const data = await response.json();

        if (!response.ok) {
          const error = new Error("Failed to fetch!");
          throw error;
        }

        const products = [];

        for (const key in data) {
          const product = {
            productName: data[key].productName,
            isChecked: data[key].isChecked,
            id: key,
            date: data[key].date,
          };
          products.push(product);
        }
        context.commit("setLoading", false);

        context.commit("setLoadedProducts", products);
      } catch (err) {
        context.commit("setLoading", false);
        console.log(err);
      }
    },
    async updateCheckbox(context, payload) {
      try {
        const response = await fetch(
          `https://vue-http-project-7a50b-default-rtdb.europe-west1.firebasedatabase.app/products/${payload.id}.json`,
          {
            method: "PATCH",
            body: JSON.stringify({
              isChecked: payload.isChecked,
              date: +new Date(),
            }),
          }
        );

        if (!response.ok) {
          const error = new Error("Failed to delete!");
          throw error;
        }
      } catch (error) {
        console.log(error);
      }

      context.commit("updateCheckbox", payload);
    },
  },
  modules: {},
});
