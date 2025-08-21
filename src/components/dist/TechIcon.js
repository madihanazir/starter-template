"use strict";
exports.__esModule = true;
exports.TechIcon = void 0;
exports.TechIcon = function (_a) {
    var Component = _a.component;
    return React.createElement(React.Fragment, null,
        React.createElement(Component, { className: "size-10 fill-[url(#tech-icon-gradient)]" }));
    React.createElement("svg", { className: "size-0 hidden" },
        React.createElement("linearGradient", { id: "tech-icon-gradient" },
            React.createElement("stop", { offset: "0%", stopColor: "rgb(110 231 183)" }),
            React.createElement("stop", { offset: "100%", stopColor: "rgb(56 189 248)" })));
};
