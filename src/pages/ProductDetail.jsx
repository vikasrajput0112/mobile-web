const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
          Home / Smartphones / Samsung / Galaxy S24
        </div>

        {/* Product Main Section */}
        <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

          {/* Product Image */}
          <div className="flex items-center justify-center border rounded-lg bg-pink-100 h-80">
            <span className="text-6xl">📱</span>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-pink-600 mb-2">
              Samsung Galaxy S24
            </h1>

            <p className="text-gray-700 mb-4">
              Experience next-generation performance with cutting-edge camera,
              powerful battery, and premium design.
            </p>

            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-800">
                ₹79,999
              </span>
              <span className="ml-3 text-sm text-green-600">
                In Stock
              </span>
            </div>

            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• 8GB RAM | 256GB Storage</li>
              <li>• 5000mAh Battery</li>
              <li>• 108MP Triple Camera</li>
              <li>• 5G Connectivity</li>
              <li>• Android 14</li>
            </ul>

            <div className="flex gap-4">
              <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
                Add to Cart
              </button>
              <button className="bg-pink-100 text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-200 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p><strong>Display:</strong> 6.8-inch AMOLED</p>
            <p><strong>Processor:</strong> Snapdragon Gen Series</p>
            <p><strong>RAM:</strong> 8GB</p>
            <p><strong>Storage:</strong> 256GB</p>
            <p><strong>Battery:</strong> 5000mAh</p>
            <p><strong>Camera:</strong> 108MP + Ultra-wide + Macro</p>
            <p><strong>OS:</strong> Android 14</p>
            <p><strong>Connectivity:</strong> 5G, Wi-Fi 6, Bluetooth 5.3</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Product Description
          </h2>

          <p className="text-gray-700 mb-4">
            The Samsung Galaxy S24 is designed for users who demand power,
            performance, and premium experience. Featuring a stunning AMOLED
            display and a professional-grade camera system, it delivers
            exceptional visuals and photography.
          </p>

          <p className="text-gray-700">
            With long-lasting battery life and lightning-fast performance, the
            Galaxy S24 keeps you connected all day. Whether you’re gaming,
            streaming, or working, this smartphone handles everything with ease.
          </p>
        </div>

        {/* Customer Reviews */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Customer Reviews
          </h2>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="font-semibold text-gray-800">⭐️⭐️⭐️⭐️⭐️ Rahul</p>
              <p className="text-gray-700">
                Amazing phone! Camera quality is outstanding and battery lasts
                all day.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-semibold text-gray-800">⭐️⭐️⭐️⭐️ Sneha</p>
              <p className="text-gray-700">
                Smooth performance and beautiful display. Worth the price.
              </p>
            </div>
          </div>
        </div>

        {/* Support & Warranty */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Warranty & Support
          </h2>

          <ul className="text-gray-700 space-y-2">
            <li>• 1-Year Manufacturer Warranty</li>
            <li>• Free Software Updates</li>
            <li>• Authorized Service Centers Nationwide</li>
            <li>• Easy Replacement within 7 Days</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm">
          © 2026 Mobile Web. All product details are for demonstration purposes.
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
