const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/cards", bookRoutes);

module.exports = router;
