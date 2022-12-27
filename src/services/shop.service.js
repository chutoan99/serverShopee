const db = require("../models");

// INSERT ALL shop
const insertShopService = () =>
  new Promise(async (resolve, reject) => {
    try {
      // productShop?.data.map(async (item) => {
      //   await db.Shop.create({
      //     shopid: item?.data?.shopid,
      //     userid: item?.data?.userid,
      //     place: item?.data?.place,
      //     portrait: item?.data?.account?.portrait,
      //     username: item?.data?.account?.username,
      //     is_official_shop: item?.data?.is_official_shop,
      //     shop_location: item?.data?.shop_location,
      //     item_count: item?.data?.item_count,
      //     name: item?.data?.name,
      //     rating_star: item?.data?.rating_star,
      //     rating_bad: item?.data?.rating_bad,
      //     rating_good: item?.data?.rating_good,
      //     rating_normal: item?.data?.rating_normal,
      //     follower_count: item?.data?.follower_count,
      //     status: item?.data?.status,
      //     response_time: item?.data?.response_time,
      //     follower_count: item?.data?.follower_count,
      //   });
      // });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to insert shop.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

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
  insertShopService,
  getAllShopService,
  getShopIDService,
  updateShopService,
  addShopService,
  deleteShopService,
};
