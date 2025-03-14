const express = require("express");
const router = express.Router();

const sitesController = require("../app/controllers/SitesController");

router.use("/:slug", sitesController.search);
router.use("/", sitesController.index);

module.exports = router;
