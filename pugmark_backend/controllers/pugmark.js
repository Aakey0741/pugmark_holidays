const shortHeaderData = require("../website_data/shortHeader.json");
const NavigationBarData = require("../website_data/navigationBar.json");
const bannerData = require("../website_data/banner.json");
const AboutUsData = require("../website_data/AboutUs.json");
const whyChooseData = require("../website_data/whyChoose.json");
const TopPlacesData = require("../website_data/TopPlaces.json");
const HotelsData = require("../website_data/Hotels.json");
const packagesData = require("../website_data/packages.json");
const reviewsData = require("../website_data/reviews.json");
const footerData = require("../website_data/footer.json");

const shortHeader = async (req, res) => {
    try {
        return res.json({
            status: true,
            msgType: "success",
            data: shortHeaderData,
        });
    } catch (error) {
        return res.json({
            status: false,
            msgType: "error",
            msg: `${error.toString()}`,
        });
    }
};

const NavigationBar = async (req, res) => {
    try {
        return res.json({
            status: true,
            msgType: "success",
            data: NavigationBarData,
        });
    } catch (error) {
        return res.json({
            status: false,
            msgType: "error",
            msg: `${error.toString()}`,
        });
    }
};

const Banner = async (req, res) => {
    try {
        return res.json({
            status: true,
            msgType: "success",
            data: bannerData,
        });
    } catch (error) {
        return res.json({
            status: false,
            msgType: "error",
            msg: `${error.toString()}`,
        });
    }
};

const AboutUs = async (req, res) => {
    try {
        return res.json({
            status: true,
            msgType: "success",
            data: AboutUsData,
        });
    } catch (error) {
        return res.json({
            status: false,
            msgType: "error",
            msg: `${error.toString()}`,
        });
    }
};

const WhyChoose = async (req, res) => {
    try {
        return res.json({
            status: true,
            msgType: "success",
            data: whyChooseData,
        });
    } catch (error) {
        return res.json({
            status: false,
            msgType: "error",
            msg: `${error.toString()}`,
        });
    }
};

const TopPlaces = async (req, res) => {
    try {
        return res.json({
            status: true,
            msgType: "success",
            data: TopPlacesData,
        });
    } catch (error) {
        return res.json({
            status: false,
            msgType: "error",
            msg: `${error.toString()}`,
        });
    }
};

const Hotels = async (req, res) => {
    try {
        return res.json({
            status: true,
            msgType: "success",
            data: HotelsData,
        });
    } catch (error) {
        return res.json({
            status: false,
            msgType: "error",
            msg: `${error.toString()}`,
        });
    }
};

const Packages = async (req, res) => {
    try {
        return res.json({
            status: true,
            msgType: "success",
            data: packagesData,
        });
    } catch (error) {
        return res.json({
            status: false,
            msgType: "error",
            msg: `${error.toString()}`,
        });
    }
};

const Reviews = async (req, res) => {
    try {
        return res.json({
            status: true,
            msgType: "success",
            data: reviewsData,
        });
    } catch (error) {
        return res.json({
            status: false,
            msgType: "error",
            msg: `${error.toString()}`,
        });
    }
};

const Footer = async (req, res) => {
    try {
        return res.json({
            status: true,
            msgType: "success",
            data: footerData,
        });
    } catch (error) {
        return res.json({
            status: false,
            msgType: "error",
            msg: `${error.toString()}`,
        });
    }
};

module.exports = {
    shortHeader,
    NavigationBar,
    Banner,
    AboutUs,
    WhyChoose,
    TopPlaces,
    Hotels,
    Packages,
    Reviews,
    Footer
};
