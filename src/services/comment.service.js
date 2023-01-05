const db = require("../models");
require("dotenv").config();

// GET ALL Comment
const getCommentService = (query) =>
  new Promise(async (resolve, reject) => {
    const queries = { ...query };
    try {
      const response = await db.Comment.findAll({
        where: queries,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Comment.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// GET  Comment  id
const getCommentIdService = (cmtid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Comment.findOne({ where: { cmtid: cmtid } });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Comment id.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// ADD  Comment
const addCommentIdService = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Comment.create({
        orderid: payload?.orderid,
        itemid: payload?.itemid,
        cmtid: payload?.cmtid,
        rating: payload?.rating,
        userid: payload?.userid,
        shopid: payload?.shopid,
        comment: payload?.comment,
        rating_star: payload?.rating_star,
        status: payload?.status,
        author_username: payload?.author_username,
        images: payload?.images,
        videos: payload?.videos,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to add Comment.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// DELETE  Comment  id
const deleteCommentIdService = (cmtid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Comment.destroy({ where: { cmtid: cmtid } });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to delete Comment.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// UPDATE  Comment  id
const updateCommentIdService = (cmtid, payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Comment.update(
        { rating_star: payload?.rating_star, comment: payload?.comment },
        { where: { cmtid: cmtid } }
      );
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to update Comment.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  getCommentService,
  getCommentIdService,
  addCommentIdService,
  deleteCommentIdService,
  updateCommentIdService,
};
