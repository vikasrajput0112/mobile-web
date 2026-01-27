const Home = () => {
  return (
    <div className="min-h-screen bg-pink-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-200 to-pink-100 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-6">
            Smart Mobile Solutions for Modern Life-Test
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Explore the latest smartphones, premium accessories, and reliable
            telecom services — all in one place.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="text"
              placeholder="Search by brand, model, or feature"
              className="w-full md:w-1/2 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-10">
            Why Choose Mobile Web
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-pink-500 mb-3">
                Latest Smartphones
              </h3>
              <p className="text-gray-700">
                Discover newly launched smartphones from top global brands with
                the latest technology and features.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-pink-500 mb-3">
                Trusted Accessories
              </h3>
              <p className="text-gray-700">
                Shop original accessories including chargers, earphones, covers,
                and power banks at the best prices.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-pink-500 mb-3">
                Reliable Services
              </h3>
              <p className="text-gray-700">
                Get fast repairs, warranty checks, and professional support from
                certified technicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-8">
            Popular Mobile Brands
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-gray-700">
            <div className="p-4 border rounded-lg">Apple</div>
            <div className="p-4 border rounded-lg">Samsung</div>
            <div className="p-4 border rounded-lg">OnePlus</div>
            <div className="p-4 border rounded-lg">Xiaomi</div>
            <div className="p-4 border rounded-lg">Realme</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-600 text-center mb-10">
            Our Mobile Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-pink-500 mb-3">
                Mobile Repair Services
              </h3>
              <p className="text-gray-700">
                Screen replacement, battery issues, software problems, and more
                — handled by experienced technicians.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-pink-500 mb-3">
                Warranty & Insurance
              </h3>
              <p className="text-gray-700">
                Check warranty status, extend coverage, and protect your device
                from accidental damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-pink-100 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">
            Ready to Upgrade Your Mobile Experience?
          </h2>
          <p className="text-gray-700 mb-6">
            Join thousands of happy customers who trust Mobile Web for their
            smartphones and services.
          </p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition">
            Explore Products
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm py-6">
        © 2026 Mobile Web. All rights reserved.
      </footer>

    </div>
  );
};

export default Home;
