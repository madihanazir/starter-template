"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.TapeSection = void 0;
var react_1 = require("react");
var star_svg_1 = require("../assets/icons/star.svg");
var words = [
    "Performant",
    "Accessible",
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
            React.createElement("div", { className: "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]" },
                React.createElement("div", { className: "flex flex-none gap-4 pr-4 py-3 animate-move-left" }, __spreadArrays(new Array(4)).fill(0).map(function (_, idx) { return ( // Increased to 4 copies for smoother animation
                React.createElement(react_1.Fragment, { key: idx }, words.map(function (word) { return (React.createElement("div", { key: word + "-" + idx, className: "inline-flex gap-4 items-center whitespace-nowrap" },
                    React.createElement("span", { className: "text-gray-900 uppercase font-bold text-sm" }, word),
                    React.createElement(star_svg_1["default"], { className: "size-6 text-gray-900 -rotate-12" }))); }))); }))))));
};
