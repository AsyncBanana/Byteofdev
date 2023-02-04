import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import remarkPrism from "remark-prism";
import remarkEmoji from "@fec/remark-a11y-emoji";
// https://astro.build/config
export default defineConfig({
	markdown: [remarkPrism, remarkEmoji],
	integrations: [
		svelte(),
		sitemap({
			filter: (page) => page !== "https://byteofdev.com/posts/",
		}),
		mdx(),
		tailwind(),
	],
	vite: {
		plugins: [],
	},
	site: "https://byteofdev.com",
	markdown: {
		syntaxHighlight: "prism",
	},
});
