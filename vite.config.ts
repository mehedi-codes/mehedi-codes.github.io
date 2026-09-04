import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const config = defineConfig({
	server: { port: 3000 },
	resolve: { tsconfigPaths: true },
	plugins: [
		tailwindcss(),
		tanstackStart({
			srcDirectory: "src",
			router: {
				routesDirectory: "app",
				indexToken: "page",
				routeToken: "layout",
				generatedRouteTree: "generated/routes.tsx",
			},
		}),
		viteReact(),
		nitro(),
	],
});

export default config;
