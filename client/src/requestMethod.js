import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2JhNTA3ZjVlNzA2NGYzMzYxZjQxOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDIyMTA5NiwZXhwIjoxNjcwMzA3NDk2fQ.fj8NSCCoN7 - z8W9zNrFYTdrNt7DSAIzlH0dIUPy2NJM";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
