"use strict";
exports.__esModule = true;
exports.TapeSection = void 0;
var star_svg_1 = require("../assets/icons/star.svg");
var words = [
    "Performant",
    "Accesible",
    "Secure",
    "Responsive",
    "Scalable",
    "User Friendly",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
    "Interactive"
];
exports.TapeSection = function () {
    return (React.createElement("div", { className: "py-16 lg:py-24" },
        React.createElement("div", { className: "bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1" },
            React.createElement("div", { className: "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90, transparent)]" },
                React.createElement("div", { className: "flex flex-none gap-4 py-3" }, words.map(function (word) { return (React.createElement("div", { key: word, className: "inline-flex gap-4 items-center" },
                    React.createElement("span", { className: "text-gray-900 uppercase font-exrabold text-sm" }, word),
                    React.createElement(star_svg_1["default"], { className: "size-6 text-gray-900 -rotate-12" }))); }))))));
};
