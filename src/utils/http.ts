import axios, { AxiosInstance } from "axios";

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      // baseURL: "https://jsonplaceholder.typicode.com/posts",
      baseURL: "http://localhost:3000/",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

const http: AxiosInstance = new Http().instance;

export default http;
