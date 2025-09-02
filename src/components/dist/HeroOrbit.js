"use strict";
exports.__esModule = true;
exports.HeroOrbit = void 0;
var tailwind_merge_1 = require("tailwind-merge");
exports.HeroOrbit = function (_a) {
    var children = _a.children, size = _a.size, rotation = _a.rotation, _b = _a.shouldOrbit, shouldOrbit = _b === void 0 ? false : _b, orbitDuration = _a.orbitDuration, _c = _a.shouldSpin, shouldSpin = _c === void 0 ? false : _c, spinDuration = _a.spinDuration;
    return (React.createElement("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20" },
        React.createElement("div", { className: tailwind_merge_1.twMerge(shouldOrbit === true && "animate-spin"), style: {
                animationDuration: orbitDuration
            } },
            React.createElement("div", { className: "flex items-center justify-start", style: {
                    transform: "rotate(" + rotation + "deg)",
                    height: "min(" + size + "px, )",
                    width: "min(" + size + "px, )"
                } },
                React.createElement("div", { className: tailwind_merge_1.twMerge(shouldSpin === true && "animate-spin"), style: {
                        animationDuration: spinDuration
                    } },
                    React.createElement("div", { className: "inline flex", style: {
                            transform: "rotate(" + -rotation + "deg)"
                        } }, children))))));
};
