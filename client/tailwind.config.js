/** @type {import("tailwindcss").Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "background-header": "url('images/bg-header.jpg')",
            },
            fontFamily: {
                sans: ["Lato", "sans-serif"],
            },
            height: {
                screen: "100dvh",
            },
        },
    },
    plugins: [],
};
