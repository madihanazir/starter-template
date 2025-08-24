"use strict";
exports.__esModule = true;
exports.ContactSection = void 0;
var arrow_up_right_svg_1 = require("@/assets/icons/arrow-up-right.svg");
var grain_jpg_1 = require("@/assets/images/grain.jpg");
exports.ContactSection = function () {
    return (React.createElement("div", { className: "py-16 pt-12 lg:py-24 lg:pt-20" },
        React.createElement("div", { className: "relative bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-4 md:px-10 rounded-none md:rounded-3xl overflow-hidden z-0" },
            React.createElement("div", { className: "absolute inset-0 opacity-5 -z-10", style: { backgroundImage: "url(" + grain_jpg_1["default"].src + ")" } }),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between" },
                    React.createElement("div", null,
                        React.createElement("h2", { className: "font-serif text-2xl md:text-3xl" }, "Let's create something amazing together"),
                        React.createElement("p", { className: "text-sm md:text-base mt-2" }, "Click to connect and discuss")),
                    React.createElement("div", null,
                        React.createElement("button", { className: "text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900" },
                            React.createElement("span", { className: "font-semibold" }, "Contact Me"),
                            React.createElement(arrow_up_right_svg_1["default"], { className: "size-4" }))))))));
};
