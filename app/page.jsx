import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h2 className="head_text text-center">
        Travel,
        <br className="max-md:hidden" />
        <span className="blu_gradient text-center"> Simplified!</span>
      </h2>
      <p className="desc text-center">
        Your all-in-one travel companion for planning adventures, discovering
        new destinations, and effortlessly sharing your experiences with a
        global community of fellow travelers.
      </p>
      <Feed/>
    </section>
  );
};

export default Home;
