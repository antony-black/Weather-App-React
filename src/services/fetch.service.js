import axios from "axios";

export const FetchService = {
  async getData(url, options) {
    try {
      const data = await axios.get(url, { ...options });

      return data;
    } catch (error) {
      console.log("ERROR!", error.message);
      throw error;
    }
  },
};
