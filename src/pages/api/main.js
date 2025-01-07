import React from "react";
const Post = (req, res) => {
  try {
    return res.status(200).json({ message: "送信成功", name: req.body.name });
  } catch (error) {
    return res.status(400).json({ message: "送信失敗" });
  }
};

export default Post;