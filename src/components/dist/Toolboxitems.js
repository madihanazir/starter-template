"use strict";
exports.__esModule = true;
exports.Toolboxitems = void 0;
var tailwind_merge_1 = require("tailwind-merge");
var TechIcon_1 = require("./TechIcon");
exports.Toolboxitems = function (_a) {
    var items = _a.items, className = _a.className, itemsWrapperClassName = _a.itemsWrapperClassName;
    return (React.createElement("div", { className: tailwind_merge_1.twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,transparent)]", className) },
        React.createElement("div", { className: tailwind_merge_1.twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName) }, items.map(function (item) { return (React.createElement("div", { key: item.title, className: "inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg" },
            React.createElement(TechIcon_1.TechIcon, { component: item.iconType }),
            React.createElement("span", { className: "font-semibold" }, item.title))); }))));
};
