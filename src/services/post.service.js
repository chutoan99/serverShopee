const db = require("../models");
require("dotenv").config();

// insert Post
const InsertPostService = (item) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.Overview.create({
        itemid: item?.itemid,
        shopid: item?.shopid,
        name: item?.name,
        image:
          item?.image === ""
            ? null
            : `https://cf.shopee.vn/file/${item?.image}`,
        stock: item?.stock,
        historical_sold: item?.historical_sold,
        price: +item?.price / 100000,
        price_min: +item?.price_min / 100000,
        price_max: +item?.price_max / 100000,
        price_min_before_discount:
          ((+item.price_min / 100) * (100 - item?.raw_discount)) / 100000,
        price_max_before_discount:
          ((item.price_max / 100) * (100 - item?.raw_discount)) / 100000,
        discount: item?.discount,
        shop_rating: item?.shop_rating,
      });
      await db.Post.create({
        itemid: item?.itemid,
        shopid: item?.shopid,
        currency: item?.currency,
        stock: item?.stock,
        status: item?.status,
        sold: item?.sold,
        liked_count: item?.liked_count,
        catid: item?.catid,
        cmt_count: item?.cmt_count,
        discount: item?.discount,
        raw_discount: item?.raw_discount,
        size_chart: item?.size_chart,
        shop_name: item?.shop_name,
        transparent_background_image:
          item?.transparent_background_image === ""
            ? null
            : `https://cf.shopee.vn/file/${item?.transparent_background_image}`,
        images: JSON.stringify(item?.images),
      });
      await db.TierVariation.create({
        itemid: item?.itemid,
        name: JSON.stringify(item?.tier_variations?.map((item) => item?.name)),
        option: JSON.stringify(
          item?.tier_variations?.map((item) => item?.options)
        ),

        img: JSON.stringify(item?.tier_variations?.map((item) => item?.images)),
      });
      await db.Video.create({
        itemid: item?.itemid,
        video_id: item?.video_info_list[0]?.video_id,
        thumb_url: item?.video_info_list[0]?.thumb_url,
        duration: item?.video_info_list[0]?.duration,
        version: item?.video_info_list[0]?.version,
        defn: item?.video_info_list[0]?.default_format?.defn,
        profile: item?.video_info_list[0]?.default_format?.profile,
        url: item?.video_info_list[0]?.default_format?.url,
        width: item?.video_info_list[0]?.default_format?.width,
        height: item?.video_info_list[0]?.default_format?.height,
      });
    } catch (error) {
      reject(error);
    }
  });

// GET ALL Post
const GetAllPostService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Description, as: "Descriptions" },
          { model: db.Category, as: "Categories" },
          { model: db.Video, as: "Videos" },
          { model: db.TierVariation, as: "TierVariations" },
          { model: db.Attribute, as: "Attributes" },
          { model: db.Shop, as: "Shops" },
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
          },
          {
            model: db.Category,
            as: "Categories",
          },
          {
            model: db.Video,
            as: "Videos",
          },
          {
            model: db.TierVariation,
            as: "TierVariations",
          },
          {
            model: db.Attribute,
            as: "Attributes",
          },
          {
            model: db.Shop,
            as: "Shops",
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
          "transparent_background_image",
          "createdAt",
          "updatedAt",
        ],
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
  InsertPostService,
  UpdatePostService,
  DeletePostService,
};
