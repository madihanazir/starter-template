"use strict";
exports.__esModule = true;
exports.Card = void 0;
var grain_jpg_1 = require("@/assets/images/grain.jpg");
var tailwind_merge_1 = require("tailwind-merge");
exports.Card = function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement("div", { className: tailwind_merge_1.twMerge("bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none", className) },
        React.createElement("div", { className: "absolute inset-0 -z-10 opacity-5", style: {
                backgroundImage: "url(" + grain_jpg_1["default"].src + ")",
                backgroundSize: "cover",
                backgroundPosition: "center"
            } }),
        children));
};
