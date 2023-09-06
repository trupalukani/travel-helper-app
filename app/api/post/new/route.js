import Posts from "@models/posts";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { userId, post, tag } = await request.json();

  try {
    await connectToDB();
    const newPost = new Posts({ creator: userId, post, tag });

    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response("Failed to create post");
  }
};
