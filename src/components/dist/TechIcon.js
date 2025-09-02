"use strict";
exports.__esModule = true;
exports.TechIcon = void 0;
exports.TechIcon = function (_a) {
    var Component = _a.component, className = _a.className;
    return (React.createElement(React.Fragment, null,
        React.createElement(Component, { className: className ? className : "size-10 fill-[url(#tech-icon-gradient)]" }),
        React.createElement("svg", { className: "absolute size-0", "aria-hidden": "true" },
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: "tech-icon-gradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
                    React.createElement("stop", { offset: "0%", stopColor: "rgb(110 231 183)" }),
                    React.createElement("stop", { offset: "100%", stopColor: "rgb(56 189 248)" }))))));
};
