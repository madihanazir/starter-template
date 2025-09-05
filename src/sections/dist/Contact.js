"use strict";
exports.__esModule = true;
exports.ContactSection = void 0;
var arrow_up_right_svg_1 = require("@/assets/icons/arrow-up-right.svg");
var grain_jpg_1 = require("@/assets/images/grain.jpg");
exports.ContactSection = function () {
    return (React.createElement("section", { id: "contact", className: "py-16 pt-12 lg:py-24 lg:pt-20" },
        React.createElement("div", { className: "relative bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-4 md:px-10 rounded-none md:rounded-3xl overflow-hidden z-0" },
            React.createElement("div", { className: "absolute inset-0 opacity-5 -z-10", style: {
                    backgroundImage: "url(" + grain_jpg_1["default"] + ")",
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px"
                } }),
            React.createElement("div", { className: "max-w-5xl mx-auto" },
                React.createElement("div", { className: "flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between" },
                    React.createElement("div", null,
                        React.createElement("h2", { className: "font-serif text-2xl md:text-3xl" }, "Let's create something amazing together"),
                        React.createElement("p", { className: "text-sm md:text-base mt-2" }, "Click to connect and discuss")),
                    React.createElement("div", null,
                        React.createElement("a", { href: "https://mail.google.com/mail/?view=cm&fs=1&to=madihan541@gmail.com&su=Reaching%20Out&body=Hello%20Madihan,", target: "_blank", rel: "noopener noreferrer", className: "text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-white hover:text-gray-900 transition-colors duration-200" },
                            React.createElement("span", { className: "font-semibold" }, "Contact Me"),
                            React.createElement(arrow_up_right_svg_1["default"], { className: "size-4" }))))))));
};
