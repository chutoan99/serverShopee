const datas = require("../../data/data");
const comments = require("../../data/comment");
const productShop = require("../../data/product_shop");
const descriptionModel = require("../models/description");
const postModel = require("../models/post");
const userModel = require("../models/user");
const overviewModel = require("../models/overview");
const categoryModel = require("../models/category");
const tierVariationModel = require("../models/tierVariation");
const attributeModel = require("../models/attribute");
const commentModel = require("../models/comment");
const shopModel = require("../models/shop");
const videoModel = require("../models/video");

const bcrypt = require("bcrypt");
const { v4 } = require("uuid");

const hashPassWord = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12)); // HASH PASSWORD

const insertController = {
  // insert data
  insertData: async (req, res) => {
    try {
      datas.items.map(async (item) => {
        let descriptionCode = v4();
        let overviewCode = v4();
        let categoryCode = v4();
        let attributeCode = v4();
        let tierVariationCode = v4();
        let userCode = v4();
        let videoCode = v4();

        // insert posts
        await postModel.create({
          // map vs các bảng khác
          overviewId: overviewCode,
          description: descriptionCode,
          categoryId: categoryCode,
          attributeId: attributeCode,
          tierVariationId: tierVariationCode,
          userId: userCode,
          videoId: videoCode,
          commentId: item?.itemid,
          shopId: item?.shopid,
          // map vs các bảng khác
          itemid: item?.itemid,
          shopid: item?.shopid,
          currency: item?.currency,
          status: item?.status,
          stock: item?.stock,
          images: JSON.stringify(item?.images),
          sold: item?.sold,
          liked_count: item?.liked_count,
          catid: item?.catid,
          cmt_count: item?.cmt_count,
          raw_discount: item?.raw_discount,
          size_chart: item?.size_chart || null,
          shop_name: item?.shop_name,
          transparent_background_image: item?.transparent_background_image,
        });
        // insert descriptions
        await descriptionModel.create({
          descriptionId: descriptionCode,
          description: item?.description,
        });
        // insert users
        await userModel.create({
          userId: userCode,
          name: "",
          email: "",
          gender: "",
          address: "",
          phone: "",
          birthday: "",
          password: hashPassWord("12345"),
        });
        // insert overviews
        await overviewModel.create({
          overviewId: overviewCode,
          itemid: item?.itemid,
          shopid: item?.shopid,
          name: item?.name,
          image: item?.image,
          historical_sold: item?.historical_sold,
          price: item?.price,
          price_min: item?.price_min,
          price_max: item?.price_max,
          price_min_before_discount: item?.price_min_before_discount,
          price_max_before_discount: item?.price_max_before_discount,
          discount: item?.discount,
          shop_rating: item?.shop_rating,
        });
        // insert category
        await categoryModel.create({
          categoryId: categoryCode,
          display_name: item?.categories?.map((item) => item?.display_name),
          catid: item?.categories?.map((item) => item?.catid),
        });
        // insert tier_Variation
        await tierVariationModel.create({
          tierVariationId: tierVariationCode,
          name: item?.tier_variations?.map((item) => item?.name),
          option: item?.tier_variations?.map((item) => item?.options),
          img: item?.tier_variations?.map((item) => item?.images),
        });
        // insert attributes
        await attributeModel.create({
          attributeId: attributeCode,
          name: item?.attributes?.map((item) => item?.name),
          value: item?.attributes?.map((item) => item?.value),
        });
        // insert videos
        await videoModel.create({
          videoId: videoCode,
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
      });
      // insert comments
      comments.map((datas) => {
        datas?.data?.ratings?.map(async (item) => {
          await commentModel.create({
            commentId: item?.itemid,
            orderid: item?.orderid,
            itemid: item?.itemid,
            cmtid: item?.cmtid,
            rating: item?.rating,
            userid: item?.userId,
            shopid: item?.shopid,
            comment: item?.comment,
            rating_star: item?.rating_star,
            status: item?.status,
            author_username: item?.author_username,
            images: JSON.stringify(item?.images),
            videos: item?.videos.map((item) => item?.url),
          });
        });
      });
      // insert info shops
      productShop?.items.map(
        async (item) =>
          await shopModel.create({
            shopId: item?.data.shopid,
            shopid: item?.data?.shopid,
            userid: item?.data?.userid,
            place: item?.data?.place,
            portrait: item?.data?.account?.portrait,
            username: item?.data?.account?.username,
            is_official_shop: item?.data?.is_official_shop,
            shop_location: item?.data?.shop_location,
            item_count: item?.data?.item_count,
            name: item?.data?.name,
            rating_star: item?.data?.rating_start,
            rating_bad: item?.data?.rating_bad,
            rating_good: item?.data?.rating_good,
            rating_normal: item?.data?.rating_normal,
            follower_count: item?.data?.follower_count,
            status: item?.data?.status,
          })
      );
    } catch (err) {
      res.json("lỗi server");
    }
  },
  getData: async (req, res) => {
    try {
      await postModel
        .find({})
        .populate("description")
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    } catch (err) {
      res.json("lỗi server");
    }
  },
  getData2: async (req, res) => {
    try {
      await descriptionModel
        .find({})
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    } catch (err) {
      res.json("lỗi server");
    }
  },
};

module.exports = insertController;
