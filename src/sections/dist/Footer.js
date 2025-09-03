"use strict";
exports.__esModule = true;
exports.Footer = void 0;
var arrow_up_right_svg_1 = require("@/assets/icons/arrow-up-right.svg");
var footerLinks = [
    { title: 'Github', href: "https://github.com/madihanazir" },
    { title: 'Twitter', href: "https://x.com/madsiuuuu" },
    { title: 'Instagram', href: "#" },
    { title: 'LinkedIn', href: "https://www.linkedin.com/in/madiha-n/" },
];
exports.Footer = function () {
    return (React.createElement("footer", { className: "relative overflow-x-clip" },
        React.createElement("div", { className: "absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]" }),
        React.createElement("div", { className: "container" }),
        React.createElement("div", { className: "border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8" },
            React.createElement("div", { className: "text-white/40" }, "\u00A9 2025. All rights reserved"),
            React.createElement("div", null,
                React.createElement("nav", { className: "flex flex-col md:flex-row items-center gap-8 relative z-10" }, footerLinks.map(function (link) { return (React.createElement("a", { href: link.href, key: link.title, target: "_blank" // Opens in new tab
                    , rel: "noopener noreferrer" // Security best practice
                    , className: "inline-flex items-center gap-1.5 hover:text-emerald-300 transition-colors relative z-20" },
                    React.createElement("span", { className: "font-semibold" }, link.title),
                    React.createElement(arrow_up_right_svg_1["default"], { className: "size-4" }))); }))))));
};
