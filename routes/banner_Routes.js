const express = require("express");
const router = express.Router();
const brandController = require("../controller/banner_controller");

// Get all brand
router.get("/allbanners", brandController.getAllBanners);

// Edit an existing brand
router.get("/:banner_id", brandController.getBannerById);
router.get("/object/:id", brandController.getBannerByObjestId);
// Add a new brand
router.post("/add", brandController.addBanner);

// Edit an existing brand
router.put("/edit/:id", brandController.editBanner);

// Delete a brand
router.delete("/delete/:id", brandController.deleteBanner);

module.exports = router;
