import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 2-g5FZ6fYDz_Nbu76lLjdUZtJLzVwU9mDJil9K8pg5s",
  },
});
