const cloudinary = require("cloudinary").v2;
const { Op } = require("sequelize");
const db = require("../models");
require("dotenv").config();

// GET ALL overview
const GetAllOverviewService = ({ page, limit, order, name, price, ...query }) =>
  // page, limit, order
  //name la filter
  new Promise(async (resolve, reject) => {
    const queries = { raw: true, nest: true };
    page < 1 && page === 1;
    const offset = !page || +page <= 1 ? 0 : +page - 1;
    const fLimit = +limit || +process.env.LIMIT;
    queries.offset = offset * fLimit;
    queries.limit = fLimit;
    if (order) queries.order = [order];
    if (name) query.name = { [Op.substring]: name };
    if (price) query.price = { [Op.between]: price };
    console.log(query);
    try {
      const response = await db.Overview.findAndCountAll({
        where: query,
        ...queries,
        raw: true,
        nest: true,
      });

      var total = Math.ceil(response.count / limit);
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "cant not found..",
        page: page ? +page : 0,
        limit: +limit ? +limit : +process.env.LIMIT,
        totalPage: total,
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// GET ALL overview
const GetAllid = () =>
  // page, limit, order
  //name la filter
  new Promise(async (resolve, reject) => {
    try {
      var limit = [];
      const response = await db.Overview.findAll({
        attributes: ["itemid", "shopid"],
      });
      // response.map((item) => limit.push(item.itemid));

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

// GET ALL overview
const GetOverviewIdService = (itemid) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log(itemid);
      const response = await db.Overview.findOne({
        where: { itemid: itemid },
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Overview id.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// Add overview
const AddOverviewService = (payload, fileData) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Overview.create({
        itemid: payload?.itemid,
        shopid: payload?.shopid,
        name: payload?.name,
        image: fileData?.path,
        stock: payload?.stock,
        filename: fileData?.filename,
        historical_sold: payload?.historical_sold,
        price: payload?.price,
        price_min: payload?.price_min,
        price_max: payload?.price_max,
        price_min_before_discount: payload?.price_min_before_discount,
        price_max_before_discount: payload?.price_max_before_discount,
        discount: payload?.discount === "" ? null : payload.discount,
        shop_rating: payload?.shop_rating,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to add Overview id.",
        response,
      });
      if (fileData && !response) cloudinary.uploader.destroy(fileData.filename);
    } catch (error) {
      reject(error);
      if (fileData) cloudinary.uploader.destroy(fileData.filename);
    }
  });

// UPDATE overview
const UpdateOverviewService = (itemid, payload, fileData) =>
  new Promise(async (resolve, reject) => {
    try {
      if (fileData) {
        payload.image = fileData.path;
      }
      const response = await db.Overview.update(
        {
          name: payload?.name,
          image: payload?.image,
          historical_sold: payload?.historical_sold,
          price: payload?.price,
          price_min: payload?.price_min,
          stock: payload?.stock,
          price_max: payload?.price_max,
          price_min_before_discount: payload?.price_min_before_discount,
          price_max_before_discount: payload?.price_max_before_discount,
          discount: payload?.discount,
          shop_rating: payload?.shop_rating,
        },
        {
          where: { itemid: itemid },
        }
      );
      resolve({
        err: response ? 0 : 1,
        msg: response
          ? "update Overview success"
          : "Failed to update Overview id.",
        response,
      });
      if (fileData && !response) cloudinary.uploader.destroy(fileData.filename);
    } catch (error) {
      if (fileData) cloudinary.uploader.destroy(fileData.filename);
      reject(error);
    }
  });

// DELETE overview id
const DeleteOverviewService = (itemid, fileName) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Overview.destroy({
        where: { itemid, itemid },
      });
      cloudinary.api.delete_resources(fileName);
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to Delete Overview id.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  AddOverviewService,
  GetOverviewIdService,
  GetAllOverviewService,
  UpdateOverviewService,
  DeleteOverviewService,
  GetAllid,
};
