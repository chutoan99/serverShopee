const db = require("../models");
const formatDate = require("../utils/formatDate");

// GET ALL shop
const getAllShopService = (query) =>
  new Promise(async (resolve, reject) => {
    const queries = { ...query };
    try {
      const response = await db.Shop.findAll({
        where: queries,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get shop.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// GET  shop ID
const getShopIDService = (shopid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Shop.findOne({
        where: { shopid: shopid },
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get shop Id.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// UPDATE ALL shop
const updateShopService = (shopid, payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Shop.update(
        {
          is_official_shop: payload?.is_official_shop,
          item_count: payload?.item_count,
          rating_star: payload?.rating_star,
          name: payload?.name,
          shop_location: payload?.shop_location,
          username: payload?.username,
          portrait: payload?.portrait,
          place: payload?.place,
          description: payload.description,
        },
        { where: { shopid: shopid } }
      );
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to update shop.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// ADD  shop
const addShopService = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Shop.create({
        shopid: payload?.shopid,
        userid: payload?.userid,
        is_official_shop: payload?.is_official_shop,
        item_count: payload?.item_count,
        rating_star: payload?.rating_star,
        name: payload?.name,
        follower_count: payload?.follower_count,
        rating_bad: payload?.rating_bad,
        rating_good: payload?.rating_good,
        rating_normal: payload?.rating_normal,
        status: payload?.status,
        shop_location: payload?.shop_location,
        username: payload?.username,
        portrait: payload?.portrait,
        place: payload?.place,
        response_time: payload?.response_time,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to ADD shop.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// DELETE shop id
const deleteShopService = (shopid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Shop.destroy({ where: { shopid: shopid } });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to delete shop.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  getAllShopService,
  getShopIDService,
  updateShopService,
  addShopService,
  deleteShopService,
};
