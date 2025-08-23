"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Card = void 0;
var grain_jpg_1 = require("@/assets/images/grain.jpg");
var tailwind_merge_1 = require("tailwind-merge");
exports.Card = function (_a) {
    var className = _a.className, children = _a.children, other = __rest(_a, ["className", "children"]);
    return (React.createElement("div", __assign({ className: tailwind_merge_1.twMerge("bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none", className) }, other),
        React.createElement("div", { className: "absolute inset-0 -z-10 opacity-5", style: {
                backgroundImage: "url(" + grain_jpg_1["default"].src + ")",
                backgroundSize: "cover",
                backgroundPosition: "center"
            } }),
        children));
};
