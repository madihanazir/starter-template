"use strict";
exports.__esModule = true;
exports.ProjectsSection = void 0;
var dark_saas_landing_page_png_1 = require("@/assets/images/dark-saas-landing-page.png");
var light_saas_landing_page_png_1 = require("@/assets/images/light-saas-landing-page.png");
var ai_startup_landing_page_png_1 = require("@/assets/images/ai-startup-landing-page.png");
var check_circle_svg_1 = require("@/assets/icons/check-circle.svg");
var arrow_up_right_svg_1 = require("@/assets/icons/arrow-up-right.svg");
var grain_jpg_1 = require("@/assets/images/grain.jpg");
var Card_1 = require("@/components/Card");
var portfolioProjects = [
    {
        company: "Heart Disease Detection",
        year: "2023",
        title: "Flask-based web application ",
        results: [
            { title: "Practical experience in deploying ML solutions within web apps" },
            { title: "Built a minimalistic, responsive UI using HTML, CSS, and deployed the solution to cloud platforms for public access" },
        ],
        link: "https://heart-disease-detection-web-app.onrender.com/",
        image: dark_saas_landing_page_png_1["default"]
    },
    {
        company: "Hybrid Intrusion Detection App",
        year: "2025",
        title: "Interactive Security Dashboard & Analytics",
        results: [
            { title: "Integrated a Go Fiber REST API to fetch data for dashboards and reporting." },
            { title: "Designed a single PostgreSQL events table that stores both logs and alerts, making it easier to query, analyze, and visualize." },
            { title: "Successfully deployed a pipeline that captures live network traffic and flags anomalies using Isolation Forest + Random Forest (via ONNX Runtime)." },
        ],
        link: "https://github.com/madihanazir/MyApp-Release/releases/tag/v1.0.0",
        image: light_saas_landing_page_png_1["default"]
    },
    {
        company: "Quantum Dynamics",
        year: "2023",
        title: "AI Startup Landing Page",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "https://youtu.be/Z7I5uSRHMHg",
        image: ai_startup_landing_page_png_1["default"]
    },
];
exports.ProjectsSection = function () {
    return (React.createElement("section", { id: "projects", className: "pb-16 lg:py-24" },
        React.createElement("div", { className: "max-w-6xl mx-auto px-4" },
            React.createElement("div", { className: "flex justify-center" },
                React.createElement("p", { className: "uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center" }, "Real-world results")),
            React.createElement("h2", { className: "font-serif text-3xl text-center mt-6" }, "Featured Projects"),
            React.createElement("p", { className: "text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-2xl mx-auto" }, "See how I transformed concepts into engaging digital experiences"),
            React.createElement("div", { className: "mt-10 flex flex-col gap-20" }, portfolioProjects.map(function (project, projectIndex) { return (React.createElement(Card_1.Card, { key: project.title, className: "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-6 sm:px-8 pt-8 lg:pt-16 lg:px-20 after:pointer-events-none sticky", style: {
                    top: "calc(64px + " + projectIndex * 40 + "px)"
                } },
                React.createElement("div", { className: "absolute inset-0 -z-10 opacity-5", style: {
                        backgroundImage: "url(" + grain_jpg_1["default"] + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    } }),
                React.createElement("div", { className: "lg:grid lg:grid-cols-2 lg:gap-16" },
                    React.createElement("div", { className: "lg:pb-16" },
                        React.createElement("div", { className: "bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text" },
                            React.createElement("span", null, project.company),
                            React.createElement("span", null, "\u2022"),
                            React.createElement("span", null, project.year)),
                        React.createElement("h3", { className: "font-serif text-2xl mt-2" }, project.title),
                        React.createElement("hr", { className: "border-t-2 border-white/5 mt-4" }),
                        React.createElement("ul", { className: "flex flex-col gap-4 mt-4" }, project.results.map(function (result) { return (React.createElement("li", { key: result.title, className: "flex gap-2 text-sm text-white/50 items-center" },
                            React.createElement(check_circle_svg_1["default"], { className: "w-4 h-4 flex-shrink-0" }),
                            React.createElement("span", null, result.title))); })),
                        React.createElement("a", { href: project.link, target: "_blank", rel: "noopener noreferrer" },
                            React.createElement("button", { className: "bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8" },
                                React.createElement("span", null, "Visit Live Site"),
                                React.createElement(arrow_up_right_svg_1["default"], { className: "size-4" })))),
                    React.createElement("div", { className: "relative" },
                        React.createElement("img", { src: project.image, alt: project.title, className: "mt-8 -mb-4 w-full rounded-xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" }))))); })))));
};
