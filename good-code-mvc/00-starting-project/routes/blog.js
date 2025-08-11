const express = require("express");

const blogControllers = require("../controllers/post-controllers");
const guardRoute = require("../middlewares/auth-protetion-middleware");

const router = express.Router();

router.get("/", blogControllers.getHome);

router.use(guardRoute);

router.get("/admin", blogControllers.getAdmin);

router.post("/posts", blogControllers.createPost);

router.get("/posts/:id/edit", blogControllers.getSinglePost);

router.post("/posts/:id/edit", blogControllers.updatePost);

router.post("/posts/:id/delete", blogControllers.deletePost);

module.exports = router;
