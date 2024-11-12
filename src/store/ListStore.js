import { create } from "zustand";
import axios from "axios";

export const apiCalling = create((set) => ({
  productList: null,
  productListRequest: async () => {
    let URL = "https://dummyjson.com/products";
    let res = await axios.get(URL);
    let data = res.data["products"];
    console.log(data);

    set({ productList: data });
  },
}));

export default apiCalling;
