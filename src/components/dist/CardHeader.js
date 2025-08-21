"use strict";
exports.__esModule = true;
exports.CardHeader = void 0;
var star_svg_1 = require("@/assets/icons/star.svg");
var tailwind_merge_1 = require("tailwind-merge");
exports.CardHeader = function (_a) {
    var title = _a.title, description = _a.description, className = _a.className;
    return (React.createElement("div", { className: tailwind_merge_1.twMerge("flex flex-col p-6 md:py-8 md:px-10", className) },
        React.createElement("div", { className: "inline-flex items-center gap-2" },
            React.createElement(star_svg_1["default"], { className: "size-9 text-emerald-300" }),
            React.createElement("h3", { className: "font-serif text-3xl" }, title)),
        React.createElement("p", { className: "text-sm lg:text-base max-w-xs text-white/60 mt-2" }, description)));
};
