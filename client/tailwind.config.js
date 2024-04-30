/** @type {import("tailwindcss").Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "background-header": "url('images/bg-header.jpg')",
            },
            fontFamily: {
                serif: ["Merriweather", "serif"],
            },
            height: {
                screen: "100dvh",
            },
            colors: {
                colorPrimary100: "#dcdad7",
                colorPrimary150: "#cbc8c3",
                colorPrimary200: "#bab6af",
                colorPrimary250: "#a9a49b",
                colorPrimary300: "#979187",
                colorPrimary350: "#867f73",
                colorPrimary400: "#756d5f",
                colorPrimary450: "#635a4b",
                colorPrimary500: "#524837",

                colorSecondary: "#D0CABD",
                colorBase: "#BBAA92",
                colorDark: "#2B281C",
            },
        },
    },
    plugins: [],
};
