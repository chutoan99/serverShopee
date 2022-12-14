const {
  getCommentService,
  getCommentIdService,
  addCommentIdService,
  deleteCommentIdService,
  updateCommentIdService,
} = require("../services/comment.service");
const { internalServerError } = require("../middleWares/handle_errors");

// GET ALL Comment
const getAllCommentController = async (req, res) => {
  const query = req.query;
  try {
    const response = await getCommentService(query);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

// GET  Comment  id
const getCommentIdController = async (req, res) => {
  const { cmtid } = req.params;
  try {
    const response = await getCommentIdService(cmtid);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

// ALL  Comment  id
const addCommentController = async (req, res) => {
  const payload = req.body;
  try {
    const response = await addCommentIdService(payload);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

// DELETE  Comment  id
const deleteCommentController = async (req, res) => {
  const { cmtid } = req.params;
  console.log(cmtid);
  try {
    const response = await deleteCommentIdService(cmtid);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

// UPDATE  Comment  id
const updateCommentController = async (req, res) => {
  const { cmtid } = req.params;
  const payload = req.body;
  try {
    const response = await updateCommentIdService(cmtid, payload);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

module.exports = {
  getAllCommentController,
  getCommentIdController,
  addCommentController,
  deleteCommentController,
  updateCommentController,
};
