import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["src/setupTests.js"],
	},
	server: {
		proxy: {
			"/api": {
				/* target: "http://localhost:5000",
				secure: false,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, "/api"), */
				target: "https://taskgenie-api-1lye.onrender.com", // Updated target URL
				secure: true, // Set this to true if your API endpoint uses HTTPS
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
	resolve: {
		alias: {
			src: "/src",
			components: "/src/components",
			assets: "/src/assets",
			store: "/src/store",
		},
	},
});
