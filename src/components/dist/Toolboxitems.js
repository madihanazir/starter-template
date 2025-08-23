"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Toolboxitems = void 0;
var tailwind_merge_1 = require("tailwind-merge");
var TechIcon_1 = require("./TechIcon");
var react_1 = require("react");
exports.Toolboxitems = function (_a) {
    var items = _a.items, className = _a.className, itemsWrapperClassName = _a.itemsWrapperClassName;
    return (React.createElement("div", { className: tailwind_merge_1.twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,transparent)]", className) },
        React.createElement("div", { className: tailwind_merge_1.twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName) }, __spreadArrays(new Array(2)).fill(0).map(function (_, index) { return (React.createElement(react_1.Fragment, { key: index }, items.map(function (item) { return (React.createElement("div", { key: item.title, className: "inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg" },
            React.createElement(TechIcon_1.TechIcon, { component: item.iconType }),
            React.createElement("span", { className: "font-semibold" }, item.title))); }))); }))));
};
