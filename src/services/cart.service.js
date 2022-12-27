const db = require("../models");

// GET ALL cart
const GetAllCartService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Cart.findAll({});
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get all cart.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// GET  cart id
const GetCartIdService = (cartid) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log(cartid);
      const response = await db.Cart.findOne({
        where: {
          cartid: cartid,
        },
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get cart id.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// ADD  cart
const AddCartService = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Cart.create({
        cartid: payload?.cartid,
        userid: payload?.userid,
        itemid: payload?.itemid,
        shopid: payload?.shopid,
        name: payload?.name,
        image: payload?.image,
        historical_sold: payload?.historical_sold,
        price: payload?.price,
        price_min: payload?.price_min,
        stock: payload?.stock,
        price_max: payload?.price_max,
        raw_discount: payload.raw_discount,
        price_min_before_discount:
          (+payload.price_min / 100) * (100 - payload?.raw_discount),
        price_max_before_discount:
          (payload.price_max / 100) * (100 - payload?.raw_discount),
        discount: `${payload?.raw_discount}%`,
        shop_rating: payload?.shop_rating,
        amount: payload?.amount,
        option: payload?.option,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to add cart.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// Update cart
const UpdateCartService = (cartid, payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Cart.update(
        { amount: payload?.amount, option: payload?.option },
        { where: { cartid: cartid } }
      );

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to Update cart.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// DELETE cart
const DeleteCartService = (cartid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Cart.destroy({ where: { cartid } });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to delete cart.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  GetAllCartService,
  GetCartIdService,
  AddCartService,
  UpdateCartService,
  DeleteCartService,
};
