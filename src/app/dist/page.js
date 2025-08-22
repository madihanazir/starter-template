"use strict";
exports.__esModule = true;
var Header_1 = require("@/sections/Header");
var Hero_1 = require("@/sections/Hero");
var Projects_1 = require("@/sections/Projects");
var Tape_1 = require("@/sections/Tape");
var About_1 = require("@/sections/About");
var Contact_1 = require("@/sections/Contact");
var Footer_1 = require("@/sections/Footer");
function Home() {
    return (React.createElement("div", { className: "w-full min-h-screen overflow-x-hidden" },
        React.createElement(Header_1.Header, null),
        React.createElement(Hero_1.HeroSection, null),
        React.createElement(Projects_1.ProjectsSection, null),
        React.createElement(Tape_1.TapeSection, null),
        React.createElement(About_1.AboutSection, null),
        React.createElement(Contact_1.ContactSection, null),
        React.createElement(Footer_1.Footer, null)));
}
exports["default"] = Home;
