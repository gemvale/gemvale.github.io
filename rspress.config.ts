import * as path from "node:path";

import { defineConfig } from "@rspress/core";
import { pluginLlms } from "@rspress/plugin-llms";

export default defineConfig({
    root: path.join(__dirname, "src", "app"),
    themeDir: path.join(__dirname, "src", "theme"),
    outDir: path.join(__dirname, "dist"),
    title: "Gemvale",
    icon: "/icon.png",
    logo: {
        light: "/icon.png",
        dark: "/icon.png",
    },
    logoText: "Gemvale",
    themeConfig: {
        socialLinks: [
            {
                icon: "github",
                mode: "link",
                content: "https://github.com/gemvale",
            },
        ],
        footer: {
            message: `Copyright © ${new Date().getFullYear()}, Alpheus`,
        },
        llmsUI: true,
    },
    plugins: [
        pluginLlms(),
    ],
});
