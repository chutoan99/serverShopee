const db = require("../models/index");
const comment = require("../../data/comment");
const datas = require("../../data/data");
const HomeCategory = require("../../data/category_tree");
const productShop = require("../../data/product_shop");
const banner = require("../../data/banner");
const bcrypt = require("bcrypt");

require("dotenv").config();

const hashPassWord = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12)); // HASH PASSWORD

const insertService = () =>
  new Promise(async (resolve, reject) => {
    try {
      datas?.items?.forEach(async (item) => {
        // insert Post
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
        // insert Description

        await db.Attribute.create({
          itemid: item?.itemid,
          name: JSON.stringify(item?.attributes?.map((item) => item?.name)),
          value: JSON.stringify(item?.attributes?.map((item) => item?.value)),
        });

        // insert tierVariation

        await db.TierVariation.create({
          itemid: item?.itemid,
          name: JSON.stringify(
            item?.tier_variations?.map((item) => item?.name)
          ),
          option: JSON.stringify(
            item?.tier_variations?.map((item) => item?.options)
          ),

          img: JSON.stringify(
            item?.tier_variations?.map((item) => item?.images)
          ),
        });
        // insert Description

        await db.Description.create({
          itemid: item?.itemid,
          description: item?.description,
        });

        // insert Overview

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

        // insert Category

        await db.Category.create({
          itemid: item?.itemid,
          display_name: JSON.stringify(
            item?.categories?.map((ele) => ele?.display_name)
          ),
          catid: JSON.stringify(item?.categories?.map((ele) => ele?.catid)),
        });

        // insert videos

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
        resolve("done..");
      });

      comment?.map((datas) => {
        datas?.data?.ratings?.map(async (item) => {
          // insert comment
          await db.Comment.create({
            orderid: item?.orderid,
            itemid: item?.itemid,
            cmtid: item?.cmtid,
            rating: item?.rating,
            userid: item?.userid,
            shopid: item?.shopid,
            comment: item?.comment,
            rating_star: item?.rating_star,
            status: item?.status,
            author_username: item?.author_username,
            images: JSON.stringify(item?.images),
            videos: item?.videos[0]?.url,
          });
        });
      });

      productShop?.items.map(async (item) => {
        // insert Shop
        await db.Shop.create({
          shopid: item?.data?.shopid,
          userid: item?.data?.userid,
          place: item?.data?.place,
          portrait:
            item?.data?.account?.portrait === ""
              ? null
              : `https://cf.shopee.vn/file/${item?.data?.account?.portrait}`,
          username: item?.data?.account?.username,
          is_official_shop: item?.data?.is_official_shop,
          shop_location: item?.data?.shop_location,
          item_count: item?.data?.item_count,
          name: item?.data?.name,
          rating_star: item?.data?.rating_star,
          rating_bad: item?.data?.rating_bad,
          rating_good: item?.data?.rating_good,
          rating_normal: item?.data?.rating_normal,
          follower_count: item?.data?.follower_count,
          status: item?.data?.status,
          response_time: item?.data?.response_time,
          follower_count: item?.data?.follower_count,
        });
        // insert User
        var sex = 0;
        var img_men =
          "https://imgs.search.brave.com/NMbKJRcDath4I02VHl0t8tYf4UJSAmftuegWj3ZCbYs/rs:fit:640:403:1/g:ce/aHR0cDovL3d3dy5i/aXRyZWJlbHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEx/LzA0L0ZhY2Vib29r/LU5ldy1EZWZhdWx0/LUF2YXRhci1QaWN0/dXJlLTcuanBn";
        var img_women =
          "https://imgs.search.brave.com/GgQ8DyHg0f1QxTAoZOmh4fYbylAOXHK903G1j_P_EaE/rs:fit:640:403:1/g:ce/aHR0cDovL3d3dy5i/aXRyZWJlbHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEx/LzA0L0ZhY2Vib29r/LU5ldy1EZWZhdWx0/LUF2YXRhci1QaWN0/dXJlLTQuanBn";
        await db.User.create({
          userId: item?.data?.userid,
          name: item?.data?.account?.username,
          email: `admin${item?.data?.userid}@gmail.com`,
          sex: sex,
          role: "shop_Admin",
          avatar: sex === 0 ? img_men : img_women,
          address: item?.data?.place,
          phone: "",
          birthday: "",
          password: hashPassWord(
            `${item?.data?.account?.username}${item?.data?.userid}`
          ),
        });
      });

      HomeCategory.data.category_list.map(async (item) => {
        await db.HomeCategory.create({
          catid: item?.catid,
          parent_catid: item?.parent_catid,
          name: item?.name,
          display_name: item?.display_name,
          image: item?.image,
          unselected_image: item?.unselected_image,
          selected_image: item?.selected_image,
          level: item?.level,
        });
        item?.children?.map(async (ele) => {
          await db.HomeCategory.create({
            catid: ele?.catid,
            parent_catid: ele?.parent_catid,
            name: ele?.name,
            display_name: ele?.display_name,
            image: ele?.image,
            unselected_image: ele?.unselected_image,
            selected_image: ele?.selected_image,
            level: ele?.level,
          });
        });
      });
      banner?.data?.space_banners[0]?.banners.map(async (item) => {
        await db.Banner.create({
          image_url: item?.image_url,
        });
      });
    } catch (error) {
      reject(error);
    }
  });
module.exports = insertService;
