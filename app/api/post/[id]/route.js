import Posts from "@models/posts";
import { connectToDB } from "@utils/database";

//GET (read)
export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const post = await Posts.findById(params.id).populate("creator")
        if (!post) return new Response("post Not Found", { status: 404 });

        return new Response(JSON.stringify(post), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

//PATCH
export const PATCH = async (request, { params }) => {
    const { post, tag } = await request.json();

    try {
        await connectToDB();

        // Find the existing post by ID
        const existingPost = await Posts.findById(params.id);

        if (!existingPost) {
            return new Response("post not found", { status: 404 });
        }

        // Update the post with new data
        existingPost.post = post;
        existingPost.tag = tag;

        await existingPost.save();

        return new Response("Successfully updated the posts", { status: 200 });
    } catch (error) {
        return new Response("Error Updating post", { status: 500 });
    }
};

//DELETE

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the post by ID and remove it
    await Posts.findByIdAndRemove(params.id);

    return new Response("Post deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting post", { status: 500 });
  }
};
