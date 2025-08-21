"use strict";
exports.__esModule = true;
exports.AboutSection = void 0;
var SectionHeader_1 = require("@/components/SectionHeader");
var Card_1 = require("../components/Card");
var book_cover_png_1 = require("@/assets/images/book-cover.png");
var image_1 = require("next/image");
var square_js_svg_1 = require("@/assets/icons/square-js.svg");
var html5_svg_1 = require("@/assets/icons/html5.svg");
var css3_svg_1 = require("@/assets/icons/css3.svg");
var react_svg_1 = require("@/assets/icons/react.svg");
var github_svg_1 = require("@/assets/icons/github.svg");
var Python_logo_notext_svg_1 = require("@/assets/icons/Python-logo-notext.svg");
var cdnlogo_com_golang_svg_1 = require("@/assets/icons/cdnlogo.com_golang.svg");
var map_png_1 = require("@/assets/images/map.png");
var memoji_smile_png_1 = require("@/assets/images/memoji-smile.png");
var CardHeader_1 = require("@/components/CardHeader");
var ToolboxItems_1 = require("@/components/ToolboxItems");
var toolboxItems = [
    { title: "JavaScript", iconType: square_js_svg_1["default"] },
    { title: "HTML5", iconType: html5_svg_1["default"] },
    { title: "CSS3", iconType: css3_svg_1["default"] },
    { title: "React", iconType: react_svg_1["default"] },
    { title: "Python", iconType: Python_logo_notext_svg_1["default"] },
    { title: "Github", iconType: github_svg_1["default"] },
    { title: "Golang", iconType: cdnlogo_com_golang_svg_1["default"] },
];
var hobbies = [
    { title: "Painting", emoji: "🎨", left: "5%", top: "5%" },
    { title: "Filming", emoji: "📷", left: "50%", top: "5%" },
    { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
    { title: "Music", emoji: "🎶", left: "70%", top: "45%" },
    { title: "Fitness", emoji: "🧘🏻‍♀️", left: "5%", top: "65%" },
    { title: "Reading", emoji: "📚", left: "45%", top: "70%" },
    { title: "Hiking", emoji: "🍃⛰️", left: "35%", top: "40%" },
];
exports.AboutSection = function () {
    return (React.createElement("div", { className: "py-20 lg:py-28" },
        React.createElement("div", { className: "max-w-6xl mx-auto px-4" },
            React.createElement(SectionHeader_1.SectionHeader, { eyebrow: "AboutMe", title: "A Glimpse Into My World", description: "Learn more about who I am, what I do, and what inspires me" }),
            React.createElement("div", { className: "mt-20 flex flex-col gap-8" },
                React.createElement("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3" }),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8" },
                    React.createElement(Card_1.Card, { className: "h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2" },
                        React.createElement("div", { className: "flex flex-col" },
                            React.createElement(CardHeader_1.CardHeader, { title: "My Reads", description: "Explore the books that have shaped my journey" }),
                            React.createElement("div", { className: "w-40 mx-auto mt-2 md:mt-0" },
                                React.createElement(image_1["default"], { src: book_cover_png_1["default"], alt: "Book Cover" })))),
                    React.createElement(Card_1.Card, { className: "h-[320px] p-0 relative md:col-span-2 lg:col-span-1" },
                        React.createElement(CardHeader_1.CardHeader, { title: "My Toolbox", description: "Explore the technologies and tools", className: "" }),
                        React.createElement(ToolboxItems_1.Toolboxitems, { items: toolboxItems, className: "" }),
                        React.createElement(ToolboxItems_1.Toolboxitems, { items: toolboxItems, className: "mt-6", itemsWrapperClassName: "-translate-x-1/2" })),
                    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
                        React.createElement(Card_1.Card, { className: "h-[320px] p-0 flex flex-col" },
                            React.createElement(CardHeader_1.CardHeader, { title: "Beyond the code", description: "Explore my interests and hobbies beyond the digital realm", className: "px-6 py-6" }),
                            React.createElement("div", { className: "relative flex-1" }, hobbies.map(function (hobby) { return (React.createElement("div", { key: hobby.title, className: "inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute", style: { left: hobby.left, top: hobby.top } },
                                React.createElement("span", { className: "font-medium text-gray-950" }, hobby.title),
                                React.createElement("span", null, hobby.emoji))); }))),
                        React.createElement(Card_1.Card, { className: "h-[320px] p-0 relative" },
                            React.createElement(image_1["default"], { src: map_png_1["default"], alt: "map", className: "h-full w-full object-cover object-left-top" }),
                            React.createElement("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30" },
                                React.createElement(image_1["default"], { src: memoji_smile_png_1["default"], alt: "smiling memoji", className: "size-20" }))))),
                " ")),
        " "));
};
