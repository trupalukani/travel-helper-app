import Link from "next/link";

const Form = ({ type, posts, setPosts, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      {" "}
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing travel posts and tips with the world, and let
        your imagination run wild!
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi sont-semibold text-base text-gray-700">
            Your Travel Post
          </span>
          <textarea
            value={posts.post}
            onChange={(e) => setPosts({ ...posts, post: e.target.value })}
            placeholder="Enter your ideas here"
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi sont-semibold text-base text-gray-700">
            Post #tags
          </span>
          <input
            value={posts.tag}
            onChange={(e) => setPosts({ ...posts, tag: e.target.value })}
            placeholder="#tag"
            className="form_input"
          ></input>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
