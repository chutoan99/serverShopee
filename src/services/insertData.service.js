// const bcrypt = require("bcrypt");
// const db = require("../models/index");
// const datas = require("../../../data/data");
// const HomeCategory = require("../../../data/category_tree.json");
// const banner = require("../../../data/banner.json");
// const search_suggestion = require("../../../data/search_suggestion.json");
// const formatDate = require("../utils/formatDate");

// require("dotenv").config();
// const insertIndustries = (item, index, i) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       await db.Industry.create({
//         category_name: item?.category_name,
//         display_name: item.path[0].category_name,
//         images: JSON.stringify(item?.images),
//         path_category_name: JSON.stringify(
//           item?.path?.map((ele) => ele?.category_name)
//         ),
//         path_category_id: JSON.stringify(
//           item?.path?.map((ele) => ele?.category_id)
//         ),
//         catid: item?.path[0].category_id,
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });
// const insertService = () =>
//   new Promise(async (resolve, reject) => {
//     try {
//       // datas?.items?.forEach(async (item) => {
//       //   // insert Post
//       //   await db.Post.create({
//       //     itemid: item?.itemid,
//       //     shopid: item?.shopid,
//       //     currency: item?.currency,
//       //     stock: item?.stock,
//       //     status: item?.status,
//       //     sold: item?.sold,
//       //     liked_count: item?.liked_count,
//       //     catid: item?.catid,
//       //     cmt_count: item?.cmt_count,
//       //     discount: item?.discount,
//       //     raw_discount: item?.raw_discount,
//       //     size_chart: item?.size_chart,
//       //     shop_name: item?.shop_name,
//       //     transparent_background_image:
//       //       item?.transparent_background_image === ""
//       //         ? null
//       //         : `https://cf.shopee.vn/file/${item?.transparent_background_image}`,
//       //     images: JSON.stringify(item?.images),
//       //     view_count: item?.view_count ? item?.view_count : 0,
//       //     createdAt: formatDate(item?.ctime),
//       //   });
//       //   // // insert Description
//       //   if (typeof item?.attributes?.[0].name !== "undefined") {
//       //     await db.Attribute.create({
//       //       itemid: item.itemid,
//       //       name: JSON.stringify(item?.attributes?.map((item) => item?.name)),
//       //       value: JSON.stringify(item?.attributes?.map((item) => item?.value)),
//       //     });
//       //   }

//       //   // insert tierVariation
//       //   if (item?.tier_variations[0].name !== "") {
//       //     item?.tier_variations?.map(async (ele) => {
//       //       await db.TierVariation.create({
//       //         itemid: item.itemid,
//       //         name: ele?.name,
//       //         option: JSON.stringify(ele?.options),
//       //         img: JSON.stringify(ele?.images),
//       //       });
//       //     });
//       //   }

//       //   // insert Description

//       //   await db.Description.create({
//       //     itemid: item?.itemid,
//       //     description: item?.description,
//       //   });

//       //   // insert Overview

//       //   await db.Overview.create({
//       //     itemid: item?.itemid,
//       //     shopid: item?.shopid,
//       //     catid: item?.catid,
//       //     name: item?.name,
//       //     image:
//       //       item?.image === ""
//       //         ? null
//       //         : `https://cf.shopee.vn/file/${item?.image}`,
//       //     stock: item?.stock,
//       //     historical_sold: item?.historical_sold,
//       //     price: +item?.price / 100000,
//       //     price_min: +item?.price_min / 100000,
//       //     price_max: +item?.price_max / 100000,
//       //     price_min_before_discount:
//       //       ((+item.price_min / 100) * (100 - item?.raw_discount)) / 100000,
//       //     price_max_before_discount:
//       //       ((item.price_max / 100) * (100 - item?.raw_discount)) / 100000,
//       //     discount: item?.discount,
//       //     shop_rating: item?.shop_rating,
//       //     liked: item?.liked ? true : false,
//       //     is_official_shop: item?.is_official_shop,
//       //     is_service_by_shopee: item?.is_service_by_shopee,
//       //     show_free_shipping: item?.show_free_shipping,
//       //     ctime: formatDate(item?.ctime),
//       //     createdAt: formatDate(item?.ctime),
//       //   });

//       //   // insert Category

//       //   await db.Category.create({
//       //     itemid: item?.itemid,
//       //     display_name: JSON.stringify(
//       //       item?.categories?.map((ele) => ele?.display_name)
//       //     ),
//       //     catid: JSON.stringify(item?.categories?.map((ele) => ele?.catid)),
//       //   });
//       //   // // insert voucherProduct

//       //   if (typeof item?.voucher_info?.promotion_id !== "undefined") {
//       //     await db.VoucherProduct.create({
//       //       itemid: item?.itemid,
//       //       promotion_id: item?.voucher_info?.promotion_id,
//       //       voucher_code: item?.voucher_info?.voucher_code,
//       //       label: item?.voucher_info?.voucher_code,
//       //     });
//       //   }

//       //   // insert deepDiscountSkin
//       //   if (
//       //     item?.deep_discount_skin?.skin_data?.promo_label?.promotion_price !==
//       //     ""
//       //   ) {
//       //     await db.DeepDiscountSkin.create({
//       //       itemid: item?.itemid,
//       //       promotion_price:
//       //         item?.deep_discount_skin?.skin_data?.promo_label?.promotion_price,
//       //       hidden_promotion_price:
//       //         item?.deep_discount_skin?.skin_data?.promo_label
//       //           ?.hidden_promotion_price,
//       //       start_time: formatDate(
//       //         item?.deep_discount_skin?.skin_data?.promo_label?.start_time
//       //       ),
//       //       end_time: formatDate(
//       //         item?.deep_discount_skin?.skin_data?.promo_label?.end_time
//       //       ),
//       //     });
//       //   }

//       //   // insert videos
//       //   if (typeof item?.video_info_list[0]?.video_id !== "undefined") {
//       //     await db.Video.create({
//       //       itemid: item?.itemid,
//       //       video_id: item?.video_info_list[0]?.video_id,
//       //       thumb_url: item?.video_info_list[0]?.thumb_url,
//       //       duration: item?.video_info_list[0]?.duration,
//       //       version: item?.video_info_list[0]?.version,
//       //       defn: item?.video_info_list[0]?.default_format?.defn,
//       //       profile: item?.video_info_list[0]?.default_format?.profile,
//       //       url: item?.video_info_list[0]?.default_format?.url,
//       //       width: item?.video_info_list[0]?.default_format?.width,
//       //       height: item?.video_info_list[0]?.default_format?.height,
//       //     });
//       //   }

//       //   resolve("done..");
//       // });

//       HomeCategory.data.category_list.map(async (item) => {
//         await db.HomeCategory.create({
//           catid: item?.catid,
//           parent_catid: item?.parent_catid,
//           name: item?.name,
//           display_name: item?.display_name,
//           image: `https://cf.shopee.vn/file/${item?.image}`,
//           unselected_image: `https://cf.shopee.vn/file/${item?.unselected_image}`,
//           selected_image: `https://cf.shopee.vn/file/${item?.selected_image}`,
//           level: item?.level,
//         });
//         item?.children?.map(async (ele) => {
//           await db.HomeCategory.create({
//             catid: ele?.catid,
//             parent_catid: ele?.parent_catid,
//             name: ele?.name,
//             display_name: ele?.display_name,
//             image: `https://cf.shopee.vn/file/${ele?.image}`,
//             unselected_image: ele?.unselected_image,
//             selected_image: ele?.selected_image,
//             level: ele?.level,
//           });
//         });
//       });
//       banner?.data?.space_banners[0]?.banners.map(async (item) => {
//         await db.Banner.create({
//           image_url: `https://cf.shopee.vn/file/${item?.image_url}`,
//         });
//       });
//       search_suggestion?.map(async (item) => {
//         await db.SearchSuggestion.create({
//           text: item?.text,
//           count: item?.count,
//         });
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });
// // INSERT Comment
// const insertCommentService = (item, index, i) =>
//   new Promise(async (resolve, reject) => {
//     console.log(index, i);
//     try {
//       await db.Comment.create({
//         orderid: item?.orderid,
//         itemid: item?.itemid,
//         cmtid: item?.cmtid,
//         rating: item?.rating,
//         userid: item?.userid,
//         shopid: item?.shopid,
//         comment: item?.comment,

//         rating_star: item?.rating_star,
//         status: item?.status,
//         author_username: item?.author_username
//           ? item?.author_username
//           : "người ẩn danh",
//         author_portrait: item?.author_portrait,
//         images: JSON.stringify(item?.images),
//         videos: item?.videos?.length >= 0 ? item?.videos[0]?.url : null,
//         model_name: item?.product_items[0].model_name,
//         options:
//           item?.product_items[0]?.options?.length > 0
//             ? item?.product_items[0]?.options[0]
//             : null,
//         like_count: item?.like_count ? item?.like_count : 0,
//         liked: false,
//         mtime: formatDate(item?.mtime),
//         ctime: formatDate(item?.ctime),
//         createdAt: formatDate(item?.mtime),
//       });
//       if (typeof item.ItemRatingReply?.orderid !== "undefined") {
//         await db.CommentReply.create({
//           orderid: item?.orderid,
//           itemid: item?.itemid,
//           shopid: item?.shopid,
//           cmtid: item?.cmtid,
//           userid: item?.ItemRatingReply?.userid,
//           comment: item?.ItemRatingReply?.comment,
//           mtime: formatDate(item?.ItemRatingReply?.mtime),
//           ctime: formatDate(item?.ItemRatingReply?.ctime),
//           createdAt: formatDate(item?.ItemRatingReply?.mtime),
//         });
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });
// // insert Post
// const InsertPostService = (item, index, i) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       console.log(item?.itemid, index, i);
//       await db.Overview.create({
//         itemid: item?.itemid,
//         shopid: item?.shopid,
//         catid: item?.catid,
//         name: item?.name,
//         image:
//           item?.image === ""
//             ? null
//             : `https://cf.shopee.vn/file/${item?.image}`,
//         stock: item?.stock,
//         historical_sold: item?.historical_sold,
//         price: +item?.price / 100000,
//         price_min: +item?.price_min / 100000,
//         price_max: +item?.price_max / 100000,
//         price_min_before_discount:
//           ((+item.price_min / 100) * (100 - item?.raw_discount)) / 100000,
//         price_max_before_discount:
//           ((item.price_max / 100) * (100 - item?.raw_discount)) / 100000,
//         discount: item?.discount,
//         shop_rating: item?.shop_rating,
//         liked: item?.liked ? true : false,
//         is_official_shop: item?.is_official_shop,
//         is_service_by_shopee: item?.is_service_by_shopee,
//         show_free_shipping: item?.show_free_shipping,
//         ctime: formatDate(item?.ctime),
//         createdAt: formatDate(item?.ctime),
//       });
//       await db.Post.create({
//         itemid: item?.itemid,
//         shopid: item?.shopid,
//         currency: item?.currency,
//         stock: item?.stock,
//         status: item?.status,
//         sold: item?.sold,
//         liked_count: item?.liked_count,
//         catid: item?.catid,
//         cmt_count: item?.cmt_count,
//         discount: item?.discount,
//         raw_discount: item?.raw_discount,
//         size_chart: item?.size_chart,
//         shop_name: item?.shop_name,
//         transparent_background_image:
//           item?.transparent_background_image === ""
//             ? null
//             : `https://cf.shopee.vn/file/${item?.transparent_background_image}`,
//         images: JSON.stringify(item?.images),
//         view_count: item?.view_count ? item?.view_count : 0,
//         createdAt: formatDate(item?.ctime),
//       });
//       if (item?.tier_variations[0]?.name !== "") {
//         item?.tier_variations?.map(async (ele) => {
//           await db.TierVariation.create({
//             itemid: item.itemid,
//             name: ele?.name,
//             option: JSON.stringify(ele?.options),
//             img: JSON.stringify(ele?.images),
//           });
//         });
//       }
//       if (typeof item?.video_info_list[0]?.video_id !== "undefined") {
//         await db.Video.create({
//           itemid: item?.itemid,
//           video_id: item?.video_info_list[0]?.video_id,
//           thumb_url: item?.video_info_list[0]?.thumb_url,
//           duration: item?.video_info_list[0]?.duration,
//           version: item?.video_info_list[0]?.version,
//           defn: item?.video_info_list[0]?.default_format?.defn,
//           profile: item?.video_info_list[0]?.default_format?.profile,
//           url: item?.video_info_list[0]?.default_format?.url,
//           width: item?.video_info_list[0]?.default_format?.width,
//           height: item?.video_info_list[0]?.default_format?.height,
//         });
//       }
//       if (typeof item?.voucher_info?.promotion_id !== "undefined") {
//         await db.VoucherProduct.create({
//           itemid: item?.itemid,
//           promotion_id: item?.voucher_info?.promotion_id,
//           voucher_code: item?.voucher_info?.voucher_code,
//           label: item?.voucher_info?.voucher_code,
//         });
//       }
//       if (
//         item?.deep_discount_skin?.skin_data?.promo_label?.promotion_price !== ""
//       ) {
//         await db.DeepDiscountSkin.create({
//           itemid: item?.itemid,
//           promotion_price:
//             item?.deep_discount_skin?.skin_data?.promo_label?.promotion_price,
//           hidden_promotion_price:
//             item?.deep_discount_skin?.skin_data?.promo_label
//               ?.hidden_promotion_price,
//           start_time: formatDate(
//             item?.deep_discount_skin?.skin_data?.promo_label?.start_time
//           ),
//           end_time: formatDate(
//             item?.deep_discount_skin?.skin_data?.promo_label?.end_time
//           ),
//         });
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });
// // INSERT ALL shop
// const insertShopService = (item, index) =>
//   new Promise(async (resolve, reject) => {
//     const hashPassWord = (password) =>
//       bcrypt.hashSync(password, bcrypt.genSaltSync(12)); // HASH PASSWORD

//     var sex = 0;
//     var img_men =
//       "https://imgs.search.brave.com/NMbKJRcDath4I02VHl0t8tYf4UJSAmftuegWj3ZCbYs/rs:fit:640:403:1/g:ce/aHR0cDovL3d3dy5i/aXRyZWJlbHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEx/LzA0L0ZhY2Vib29r/LU5ldy1EZWZhdWx0/LUF2YXRhci1QaWN0/dXJlLTcuanBn";
//     var img_women =
//       "https://imgs.search.brave.com/GgQ8DyHg0f1QxTAoZOmh4fYbylAOXHK903G1j_P_EaE/rs:fit:640:403:1/g:ce/aHR0cDovL3d3dy5i/aXRyZWJlbHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEx/LzA0L0ZhY2Vib29r/LU5ldy1EZWZhdWx0/LUF2YXRhci1QaWN0/dXJlLTQuanBn";
//     try {
//       await db.Shop.create({
//         shopid: item?.data?.shopid,
//         userid: item?.data?.userid,
//         place: item?.data?.shop_location,
//         portrait:
//           item?.data?.account?.portrait === ""
//             ? null
//             : `https://cf.shopee.vn/file/${item?.data?.account?.portrait}`,
//         username: item?.data?.account?.username,
//         is_official_shop: item?.data?.is_official_shop,
//         shop_location: item?.data?.shop_location,
//         item_count: item?.data?.item_count,
//         name: item?.data?.name,
//         cover: item?.data?.cover,
//         rating_star: item?.data?.rating_star,
//         rating_bad: item?.data?.rating_bad,
//         rating_good: item?.data?.rating_good,
//         rating_normal: item?.data?.rating_normal,
//         follower_count: item?.data?.follower_count,
//         status: item?.data?.status,
//         response_time: item?.data?.response_time,
//         description: item?.data?.description,
//         followed: false,
//         ctime: formatDate(item?.data?.ctime),
//         mtime: formatDate(item?.data?.mtime),
//         response_rate: item?.data?.response_rate,
//         country: item?.data?.country,
//         last_active_time: item?.data?.last_active_time,
//         createdAt: formatDate(item?.data?.ctime),
//       });

//       await db.User.create({
//         userid: item?.data?.userid,
//         name: item?.data?.account?.username,
//         email: `admin${item?.data?.userid}@gmail.com`,
//         sex: sex,
//         role: "shop_Admin",
//         avatar: sex === 0 ? img_men : img_women,
//         address: item?.data?.shop_location,
//         phone: "",
//         birthday: "",
//         password: hashPassWord(
//           `${item?.data?.account?.username}${item?.data?.userid}`
//         ),
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });
// module.exports = {
//   insertService,
//   insertCommentService,
//   InsertPostService,
//   insertShopService,
//   insertIndustries,
// };
