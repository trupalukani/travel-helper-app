import { Schema, model, models } from "mongoose";

const PostsSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  post: {
    type: String,
    required: [true, "Post is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
});

const Posts = models.Posts || model("Posts", PostsSchema);

export default Posts;
