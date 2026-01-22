const Home = () => {
  return (
    <section className="p-10 text-center bg-pinkSoft rounded m-6">
      <h1 className="text-4xl text-pinkPrimary font-bold mb-4">
        Smart Mobile Solutions
      </h1>
      <p className="mb-6">
        Discover latest smartphones, accessories and telecom services
      </p>
      <input
        className="border border-pinkBorder p-2 w-1/2"
        placeholder="Search by brand"
      />
    </section>
  );
};

export default Home;
