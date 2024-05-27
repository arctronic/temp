export const env = {
  apiEndPoint: import.meta.env.VITE_APP_API_URL || "http://localhost:1337",
  accessTokenSecret:
    import.meta.env.VITE_APP_ACCESS_TOKEN || "access-token-secret",
};
