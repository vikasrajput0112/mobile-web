const Products = () => {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Filters Sidebar */}
        <aside className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-pink-600 mb-4">
            Filter Products
          </h2>

          {/* Brand Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Brand</h3>
            <div className="space-y-2 text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Samsung
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Apple
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> OnePlus
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Xiaomi
              </label>
            </div>
          </div>

          {/* RAM Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">RAM</h3>
            <div className="space-y-2 text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 6 GB
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 8 GB
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 12 GB
              </label>
            </div>
          </div>

          {/* Battery Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Battery</h3>
            <div className="space-y-2 text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 4000mAh+
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 5000mAh+
              </label>
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Price Range</h3>
            <input
              type="range"
              min="10000"
              max="100000"
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>₹10,000</span>
              <span>₹1,00,000</span>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <section className="md:col-span-3">
          <h1 className="text-3xl font-bold text-pink-600 mb-6">
            Mobile Phones
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* Product Card */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="bg-pink-100 h-40 flex items-center justify-center rounded-lg mb-4">
                📱
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Samsung Galaxy S24
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                8GB RAM | 256GB Storage
              </p>
              <p className="text-xl font-bold text-gray-800 mb-3">
                ₹79,999
              </p>
              <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                View Details
              </button>
            </div>

            {/* Product Card */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="bg-pink-100 h-40 flex items-center justify-center rounded-lg mb-4">
                📱
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                iPhone 15
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                6GB RAM | 128GB Storage
              </p>
              <p className="text-xl font-bold text-gray-800 mb-3">
                ₹89,999
              </p>
              <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                View Details
              </button>
            </div>

            {/* Product Card */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="bg-pink-100 h-40 flex items-center justify-center rounded-lg mb-4">
                📱
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                OnePlus 12
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                12GB RAM | 256GB Storage
              </p>
              <p className="text-xl font-bold text-gray-800 mb-3">
                ₹64,999
              </p>
              <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                View Details
              </button>
            </div>

            {/* Product Card */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="bg-pink-100 h-40 flex items-center justify-center rounded-lg mb-4">
                📱
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Xiaomi 14 Pro
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                8GB RAM | 512GB Storage
              </p>
              <p className="text-xl font-bold text-gray-800 mb-3">
                ₹59,999
              </p>
              <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                View Details
              </button>
            </div>

            {/* Product Card */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="bg-pink-100 h-40 flex items-center justify-center rounded-lg mb-4">
                📱
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Realme GT Neo
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                8GB RAM | 128GB Storage
              </p>
              <p className="text-xl font-bold text-gray-800 mb-3">
                ₹32,999
              </p>
              <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                View Details
              </button>
            </div>

          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-2">
            <button className="px-4 py-2 bg-pink-100 text-pink-600 rounded-lg">
              1
            </button>
            <button className="px-4 py-2 bg-white border rounded-lg">
              2
            </button>
            <button className="px-4 py-2 bg-white border rounded-lg">
              3
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Products;
