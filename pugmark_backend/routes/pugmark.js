const { shortHeader, NavigationBar, AboutUs, WhyChoose, TopPlaces, Hotels, Packages, Reviews, Footer, Banner } = require("../controllers/pugmark");

const router = require("express").Router();

router.get("/check", async (req, res) => {
    try {
        return res.json({
            status: true,
            msgType: "success",
            msg: "Pugmark route working fine....",
        });
    } catch (error) {
        return res.json({
            status: false,
            msgType: "error",
            msg: `${error.toString()}`,
        });
    }
});

router.get("/short-header", shortHeader);
router.get("/navigation-bar", NavigationBar);
router.get("/banner", Banner);
router.get("/about-us", AboutUs);
router.get("/why-choose", WhyChoose);
router.get("/top-places", TopPlaces);
router.get("/hotels", Hotels);
router.get("/packages", Packages);
router.get("/reviews", Reviews);
router.get("/footer", Footer);


module.exports = router;