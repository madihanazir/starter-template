"use strict";
exports.__esModule = true;
exports.Toolboxitems = void 0;
var tailwind_merge_1 = require("tailwind-merge");
var TechIcon_1 = require("./TechIcon");
exports.Toolboxitems = function (_a) {
    var items = _a.items, className = _a.className, itemsWrapperClassName = _a.itemsWrapperClassName;
    return (React.createElement("div", { className: tailwind_merge_1.twMerge("flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]", className) },
        React.createElement("div", { className: tailwind_merge_1.twMerge("flex flex-none gap-4 py-2 min-w-max", itemsWrapperClassName) },
            items.map(function (item, index) { return (React.createElement("div", { key: "first-" + item.title + "-" + index, className: "inline-flex items-center gap-2 py-2 px-3 bg-white/5 rounded-lg border border-white/10" },
                React.createElement(TechIcon_1.TechIcon, { component: item.iconType }),
                React.createElement("span", { className: "font-semibold text-white text-xs whitespace-nowrap" }, item.title))); }),
            items.map(function (item, index) { return (React.createElement("div", { key: "second-" + item.title + "-" + index, className: "inline-flex items-center gap-2 py-2 px-3 bg-white/5 rounded-lg border border-white/10" },
                React.createElement(TechIcon_1.TechIcon, { component: item.iconType }),
                React.createElement("span", { className: "font-semibold text-white text-xs whitespace-nowrap" }, item.title))); }))));
};
