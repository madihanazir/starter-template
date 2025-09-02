"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var tailwind_merge_1 = require("tailwind-merge");
var inter = google_1.Inter({
    subsets: ["latin"],
    variable: "--font-sans"
});
var calistoga = google_1.Calistoga({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: ["400"]
});
exports.metadata = {
    title: "My Portfolio",
    description: "Created with the help of Frontend Tribe"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: tailwind_merge_1.twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans overflow-x-hidden") }, children)));
}
exports["default"] = RootLayout;
