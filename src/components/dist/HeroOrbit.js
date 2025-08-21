"use strict";
exports.__esModule = true;
exports.HeroOrbit = void 0;
exports.HeroOrbit = function (_a) {
    var children = _a.children, size = _a.size, rotation = _a.rotation;
    return (React.createElement("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" },
        React.createElement("div", { className: "flex items-center justify-start", style: {
                transform: "rotate(" + rotation + "deg)",
                height: "min(" + size + "px, 90vw)",
                width: "min(" + size + "px, 90vw)"
            } },
            React.createElement("div", { className: "inline flex", style: {
                    transform: "rotate(" + -rotation + "deg)"
                } }, children))));
};
