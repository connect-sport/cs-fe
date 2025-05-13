import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor: Thêm Bearer Token vào mỗi request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Hoặc từ Redux, context, cookie...
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor: Xử lý lỗi toàn cục
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: {
    response: { status: number; data: { message: string } };
    request: string;
    message: string;
  }) => {
    if (error.response) {
      // Xử lý lỗi response (ví dụ: Unauthorized, Not Found...)
      if (error.response.status === 401) {
        // Refresh token hoặc logout người dùng
        console.error("Unauthorized! Redirecting to login...");
        // Chuyển hướng tới trang đăng nhập, hoặc refresh token
      } else if (error.response.status === 500) {
        console.error("Internal Server Error");
      }
    } else if (error.request) {
      // Xử lý khi không nhận được phản hồi từ server
      console.error("No response from server:", error.request);
    } else {
      // Xử lý các lỗi khác (ví dụ: cấu hình sai...)
      console.error("Error", error.message);
    }
    return Promise.reject(error.response.data.message || "");
  }
);

export { axiosInstance };
