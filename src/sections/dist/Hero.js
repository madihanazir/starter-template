"use client";
"use strict";
exports.__esModule = true;
exports.HeroSection = void 0;
var memoji_beautiful_girl_woman_white_background_emoji_826801_6882_removebg_preview_png_1 = require("@/assets/images/memoji-beautiful-girl-woman-white-background-emoji_826801-6882-removebg-preview.png");
var image_1 = require("next/image");
var arrow_down_svg_1 = require("@/assets/icons/arrow-down.svg");
var grain_jpg_1 = require("@/assets/images/grain.jpg");
var star_svg_1 = require("@/assets/icons/star.svg");
var sparkle_svg_1 = require("@/assets/icons/sparkle.svg");
var HeroOrbit_1 = require("@/components/HeroOrbit");
exports.HeroSection = function () {
    return (React.createElement("section", { id: "home", className: "relative z-0 flex flex-col items-center justify-center min-h-screen overflow-hidden w-full max-w-full  bg-gray-900 text-white" },
        React.createElement("div", { className: "absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none" },
            React.createElement("div", { className: "absolute inset-0 -z-30 opacity-10", style: { backgroundImage: "url(" + grain_jpg_1["default"].src + ")" } }),
            React.createElement("div", { className: "absolute flex items-center justify-center w-full h-full" },
                React.createElement("div", { className: "size-[min(620px,90vw)] hero-ring" }),
                React.createElement("div", { className: "size-[min(820px,90vw)] hero-ring" }),
                React.createElement("div", { className: "size-[min(1020px,90vw)] hero-ring" }),
                React.createElement("div", { className: "size-[min(1220px,90vw)] hero-ring" })),
            React.createElement(HeroOrbit_1.HeroOrbit, { size: 430, rotation: -35, shouldOrbit: true, orbitDuration: "30s" },
                React.createElement(sparkle_svg_1["default"], { className: "size-8 text-emerald-300/20" })),
            React.createElement(HeroOrbit_1.HeroOrbit, { size: 440, rotation: 80, shouldOrbit: true, orbitDuration: "32s" },
                React.createElement(sparkle_svg_1["default"], { className: "size-5 text-emerald-300/20" })),
            React.createElement(HeroOrbit_1.HeroOrbit, { size: 520, rotation: -41, shouldOrbit: true, orbitDuration: "34s" },
                React.createElement("div", { className: "size-3 rounded-full bg-emerald-300/20" })),
            React.createElement(HeroOrbit_1.HeroOrbit, { size: 530, rotation: 350, shouldOrbit: true, orbitDuration: "36s", shouldSpin: true, spinDuration: "8s" },
                React.createElement(sparkle_svg_1["default"], { className: "size-10 text-emerald-300/20" })),
            React.createElement(HeroOrbit_1.HeroOrbit, { size: 550, rotation: -500, shouldOrbit: true, orbitDuration: "38s", shouldSpin: true, spinDuration: "10s" },
                React.createElement(star_svg_1["default"], { className: "size-12 text-emerald-300" })),
            React.createElement(HeroOrbit_1.HeroOrbit, { size: 650, rotation: -5, shouldOrbit: true, orbitDuration: "40s", shouldSpin: true, spinDuration: "12s" },
                React.createElement("div", { className: "size-3 rounded-full bg-emerald-300/20" })),
            React.createElement(HeroOrbit_1.HeroOrbit, { size: 710, rotation: 178, shouldOrbit: true, orbitDuration: "42s", shouldSpin: true, spinDuration: "14s" },
                React.createElement(sparkle_svg_1["default"], { className: "size-14 text-emerald-300/20" })),
            React.createElement(HeroOrbit_1.HeroOrbit, { size: 750, rotation: 220, shouldOrbit: true, orbitDuration: "44s", shouldSpin: true, spinDuration: "16s" },
                React.createElement("div", { className: "size-3 rounded-full bg-emerald-300/60" })),
            React.createElement(HeroOrbit_1.HeroOrbit, { size: 800, rotation: -135, shouldOrbit: true, orbitDuration: "60s", shouldSpin: true, spinDuration: "18s" },
                React.createElement(star_svg_1["default"], { className: "absolute -top-10 -left-10 w-10 h-10 text-teal-400" })),
            React.createElement(HeroOrbit_1.HeroOrbit, { size: 800, rotation: -72, shouldOrbit: true, orbitDuration: "68s", shouldSpin: true, spinDuration: "20s" },
                React.createElement(star_svg_1["default"], { className: "size-28 text-emerald-300" })),
            React.createElement(HeroOrbit_1.HeroOrbit, { size: 1000, rotation: 135, shouldOrbit: true, orbitDuration: "65s", shouldSpin: true, spinDuration: "22s" },
                React.createElement(star_svg_1["default"], { className: "absolute -top-12 -left-12 w-8 h-8 text-teal-400/50" })),
            React.createElement(HeroOrbit_1.HeroOrbit, { size: 1100, rotation: -72, shouldOrbit: true, orbitDuration: "70s", shouldSpin: true, spinDuration: "25s" },
                React.createElement(star_svg_1["default"], { className: "size-20 text-emerald-300/40" }))),
        React.createElement("div", { className: "relative flex flex-col items-center" },
            React.createElement("div", { className: "relative z-10 flex flex-col items-center max-w-3xl mx-auto px-4" },
                React.createElement(image_1["default"], { src: memoji_beautiful_girl_woman_white_background_emoji_826801_6882_removebg_preview_png_1["default"], className: "size-[100px]", alt: "Person peeking" }),
                React.createElement(HeroOrbit_1.HeroOrbit, { size: 120, rotation: -20, shouldOrbit: true, orbitDuration: "60s", shouldSpin: true, spinDuration: "20s" },
                    React.createElement(star_svg_1["default"], { className: "w-10 h-10 text-teal-400" }))),
            React.createElement("div", { className: "bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4 relative" },
                React.createElement("div", { className: "relative" },
                    React.createElement("div", { className: "bg-green-500 size-2.5 rounded-full relative z-10" }),
                    React.createElement("div", { className: "absolute inset-0 w-full h-full rounded-full bg-green-500/50 animate-ping" })),
                React.createElement("div", { className: "text-sm font-medium" }, "Madiha, available for hiring as an SDE")),
            React.createElement("div", { className: "max-w-lg mx-auto mt-8 text-center" },
                React.createElement("h1", { className: "font-serif text-2xl md:text-4xl tracking-wide" }, "Building exceptional solutions for user experiences"),
                React.createElement("p", { className: "mt-4 text-white/60 md:text-lg" }, "I specialize in transforming ideas and designs into robust architectures and high-performing applications. I'm ready to bring problem solving with clean code to your team. Let's connect and see what you need built!")),
            React.createElement("div", { className: "flex flex-col md:flex-row justify-center items-center mt-8 gap-4" },
                React.createElement("button", { onClick: function () { var _a; return (_a = document.getElementById("work")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" }); }, className: "inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white hover:text-black transition-colors duration-200" },
                    React.createElement("span", { className: "font-semibold" }, "Explore My Work"),
                    React.createElement(arrow_down_svg_1["default"], { className: "size-4" })),
                React.createElement("button", { onClick: function () { var _a; return (_a = document.getElementById("contact")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" }); }, className: "inline-flex items-center gap-2 border border-white/15 bg-gray-900 text-white hover:bg-white hover:text-gray-900 transition-colors h-12 px-6 rounded-xl" },
                    React.createElement("span", null, "\uD83D\uDC4B"),
                    React.createElement("span", { className: "font-semibold" }, "Let's Connect"))))));
};
