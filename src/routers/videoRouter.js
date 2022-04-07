import express from "express";
import { protectorMiddleware, videoUpload } from "../../middlewares";
import {
  deleteVideo,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  watch,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id[0-9a-f]{24}", watch);
videoRouter
  .route("/:id[0-9a-f]{24}")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/:id[0-9a-f]{24}/delete")
  .all(protectorMiddleware)
  .get(deleteVideo);
videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(videoUpload.fields([{ name: "video" }, { name: "thumb" }]), postUpload);

export default videoRouter;
