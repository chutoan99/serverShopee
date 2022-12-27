const { internalServerError } = require("../middleWares/handle_errors");
const {
  GetAllPostService,
  GetPostIdService,
  InsertPostService,
  UpdatePostService,
  DeletePostService,
  AddPostService,
} = require("../services/post.service");

const InsertPostController = async (req, res) => {
  try {
    for (let index = 0; index < 200; index++) {
      const hotItems = require(`../../data/hotitems10/hot_items_${index}.json`)
        .data.items;
      await hotItems.forEach(async (item, i) => {
        await InsertPostService(item);
      });
    }
  } catch (error) {
    internalServerError(res);
  }
};

// GET ALL Post
const GetAllPostController = async (req, res) => {
  try {
    const response = await GetAllPostService();
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

// GET  Post Id
const GetPostIdController = async (req, res) => {
  const { itemid } = req.params;
  try {
    const response = await GetPostIdService(itemid);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

// ADD  Post
const AddPostController = async (req, res) => {
  const payload = req.body;
  try {
    const response = await AddPostService(payload);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

// UPDATE  Post
const UpdatePostController = async (req, res) => {
  const { itemid } = req.params;
  const payload = req.body;
  try {
    const response = await UpdatePostService(itemid, payload);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

// DELETE  Post Id
const DeletePostController = async (req, res) => {
  const { itemid } = req.params;
  try {
    const response = await DeletePostService(itemid);
    return res.status(200).json(response);
  } catch (error) {
    internalServerError(res);
  }
};

module.exports = {
  AddPostController,
  InsertPostController,
  GetAllPostController,
  GetPostIdController,
  UpdatePostController,
  DeletePostController,
};
