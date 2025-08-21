"use strict";
exports.__esModule = true;
exports.SectionHeader = void 0;
exports.SectionHeader = function (_a) {
    var title = _a.title, eyebrow = _a.eyebrow, description = _a.description;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex justify-center" },
            React.createElement("p", { className: "uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center" }, eyebrow)),
        React.createElement("h2", { className: "font-serif text-3xl text-center mt-6" }, title),
        React.createElement("p", { className: "text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-2xl mx-auto" }, description)));
};
