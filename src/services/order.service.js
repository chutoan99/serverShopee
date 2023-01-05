const db = require("../models");

// GET ALL order
const GetAllOrderService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Order.findAll({});
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get all Order.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// GET  order id
const GetOrderIdService = (orderid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Order.findOne({
        where: {
          orderid: orderid,
        },
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Order id.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// ADD  order
const AddOrderService = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Order.create({
        orderid: payload.orderid,
        userid: payload.userid,
        itemid: payload.itemid,
        shopid: payload.shopid,
        name: payload.name,
        image: payload.image,
        historical_sold: payload.historical_sold,
        price: payload.price,
        price_min: payload.price_min,
        stock: payload.stock,
        price_max: payload.price_max,
        discount: `${payload?.raw_discount}%`,
        price_min_before_discount:
          (+payload.price_min / 100) * (100 - payload?.raw_discount),
        price_max_before_discount:
          (payload.price_max / 100) * (100 - payload?.raw_discount),
        discount: payload.discount,
        shop_rating: payload.shop_rating,
        amount: payload.amount,
        option: payload.option,
        state: payload.state,
        note: payload.note,
        shiped: payload.shiped,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to add order.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// Update order
const UpdateOrderService = (orderid, payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Order.update(
        {
          amount: payload?.amount,
          option: payload?.option,
          state: payload?.state,
        },
        { where: { orderid: orderid } }
      );
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to Update order.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// DELETE order
const DeleteOrderService = (orderid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Order.destroy({ where: { orderid: orderid } });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to delete order.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  GetAllOrderService,
  GetOrderIdService,
  AddOrderService,
  UpdateOrderService,
  DeleteOrderService,
};
