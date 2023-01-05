const db = require("../models");
require("dotenv").config();

// GET ALL Post
const GetAllPostService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Description, as: "description" },
          { model: db.Category, as: " ategories" },
          { model: db.Video, as: "video" },
          { model: db.TierVariation, as: "tier_variations" },
          { model: db.Attribute, as: "attributes" },
          { model: db.Shop, as: "shop_info" },
          { model: db.DeepDiscountSkin, as: "deep_discount_skin" },
          { model: db.VoucherProduct, as: "voucher" },
        ],
        attributes: [
          "id",
          "itemid",
          "shopid",
          "currency",
          "stock",
          "stock",
          "sold",
          "liked_count",
          "catid",
          "cmt_count",
          "discount",
          "raw_discount",
          "size_chart",
          "shop_name",
          "images",
          "transparent_background_image",
          "createdAt",
          "updatedAt",
        ],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Post.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// GET  Post Id
const GetPostIdService = (itemid) =>
  new Promise(async (resolve, reject) => {
    try {
      const tier_variations = await db.TierVariation.findAll({
        where: {
          itemid: itemid,
        },
        attributes: { exclude: ["id", "itemid", "createdAt", "updatedAt"] },
      });

      const response = await db.Post.findOne({
        where: {
          itemid: itemid,
        },
        raw: true,
        nest: true,
        include: [
          {
            model: db.Description,
            as: "Descriptions",
            attributes: {
              exclude: [
                "id",
                "itemid",
                "createdAt",
                "updatedAt",
                "description",
              ],
            },
          },
          {
            model: db.Category,
            as: "categories",
            attributes: { exclude: ["id", "itemid", "createdAt", "updatedAt"] },
          },
          {
            model: db.Video,
            as: "video",
            attributes: { exclude: ["id", "itemid", "createdAt", "updatedAt"] },
          },

          {
            model: db.Attribute,
            as: "attributes",
            attributes: { exclude: ["id", "itemid", "createdAt", "updatedAt"] },
          },
          {
            model: db.Shop,
            as: "shop_info",
            attributes: { exclude: ["id", "shopid", "createdAt", "updatedAt"] },
          },
          {
            model: db.DeepDiscountSkin,
            as: "deep_discount_skin",
            attributes: { exclude: ["id", "itemid", "createdAt", "updatedAt"] },
          },
          {
            model: db.VoucherProduct,
            as: "voucher",
            attributes: { exclude: ["id", "itemid", "createdAt", "updatedAt"] },
          },
        ],
        attributes: [
          "id",
          "itemid",
          "shopid",
          "currency",
          "stock",
          "stock",
          "sold",
          "liked_count",
          "catid",
          "cmt_count",
          "discount",
          "raw_discount",
          "size_chart",
          "shop_name",
          "images",
          "transparent_background_image",
          "createdAt",
          "updatedAt",
        ],
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get PostId.",
        response: { ...response, tier_variations: tier_variations },
      });
    } catch (error) {
      reject(error);
    }
  });

// UPDATE  Post Id
const UpdatePostService = (itemid, payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.update(
        {
          currency: payload?.currency,
          stock: payload?.stock,
          status: payload?.status,
          sold: payload?.sold,
          liked_count: payload?.liked_count,
          discount: payload?.discount,
          raw_discount: payload?.raw_discount,
          size_chart: payload?.size_chart,
          shop_name: payload?.shop_name,
          transparent_background_image: payload?.transparent_background_image,
          images: payload?.images,
        },
        {
          where: {
            itemid: itemid,
          },
        }
      );
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to Update Post.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// UPDATE  Post Id
const AddPostService = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.create({
        itemid: payload?.itemid,
        shopid: payload?.shopid,
        catid: payload?.catid,
        currency: payload?.currency,
        stock: payload?.stock,
        status: payload?.status,
        sold: payload?.sold,
        liked_count: payload?.liked_count,
        discount: payload?.discount,
        raw_discount: payload?.raw_discount,
        size_chart: payload?.size_chart,
        shop_name: payload?.shop_name,
        transparent_background_image: payload?.transparent_background_image,
        images: payload?.images,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to Update Post.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// UPDATE  Post Id
const DeletePostService = (itemid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.destroy({
        where: {
          itemid: itemid,
        },
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get PostId.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  GetAllPostService,
  AddPostService,
  GetPostIdService,
  UpdatePostService,
  DeletePostService,
};
