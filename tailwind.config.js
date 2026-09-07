/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ac2471",
        "primary-fixed": "#ffd8e6",
        "primary-fixed-dim": "#ffb0d0",
        "primary-container": "#ff69b4",
        "on-primary": "#ffffff",
        "on-primary-container": "#6e0044",
        "on-primary-fixed": "#3d0024",
        "on-primary-fixed-variant": "#8c0058",
        
        "secondary": "#6252a1",
        "secondary-fixed": "#e7deff",
        "secondary-fixed-dim": "#cbbeff",
        "secondary-container": "#bbaaff",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#4a3b88",
        "on-secondary-fixed": "#1e055a",
        "on-secondary-fixed-variant": "#4a3a87",
        
        "tertiary": "#5c5e63",
        "tertiary-fixed": "#e1e2e8",
        "tertiary-fixed-dim": "#c5c6cc",
        "tertiary-container": "#9d9fa4",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#34363b",
        "on-tertiary-fixed": "#191c20",
        "on-tertiary-fixed-variant": "#44474c",

        "surface": "#fdf7ff",
        "surface-bright": "#fdf7ff",
        "surface-dim": "#dfd4ff",
        "surface-variant": "#e7deff",
        "surface-tint": "#ac2471",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f8f1ff",
        "surface-container": "#f2ebff",
        "surface-container-high": "#ede4ff",
        "surface-container-highest": "#e7deff",

        "background": "#fdf7ff",
        "on-background": "#1d1636",
        "on-surface": "#1d1636",
        "on-surface-variant": "#564149",
        "outline": "#897179",
        "outline-variant": "#dcbfc9",

        "inverse-surface": "#332c4d",
        "inverse-on-surface": "#f5eeff",
        "inverse-primary": "#ffb0d0",

        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "section-gap": "120px",
        "gutter": "24px",
        "unit": "8px",
        "container-max": "1280px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "headline-xl": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["JetBrains Mono", "monospace"],
        "body-md": ["JetBrains Mono", "monospace"],
        "label-caps": ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "headline-xl": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-lg": ["32px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "headline-lg-mobile": ["28px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-caps": ["12px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "700" }]
      }
    },
  },
  plugins: [],
}
