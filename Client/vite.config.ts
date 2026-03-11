import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
