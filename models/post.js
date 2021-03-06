const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      minlength: 3,
      maxlength: 280,
      required: true
    },
    photo: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: 'creationDate',
      updatedAt: 'editDate'
    }
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
