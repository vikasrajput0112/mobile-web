const Support = () => {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-pink-600">
            Customer Support
          </h1>
          <p className="text-gray-600 mt-2">
            We’re here to help you with your orders, devices, and services.
          </p>
        </div>

        {/* Support Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              Order Support
            </h3>
            <p className="text-gray-700 mb-4">
              Track orders, request returns, or resolve delivery-related issues.
            </p>
            <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
              Track Order
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              Device Repair
            </h3>
            <p className="text-gray-700 mb-4">
              Facing hardware or software issues? Book a repair service now.
            </p>
            <button className="w-full bg-pink-100 text-pink-600 py-2 rounded-lg hover:bg-pink-200 transition">
              Book Repair
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              Warranty Check
            </h3>
            <p className="text-gray-700 mb-4">
              Verify warranty status for your mobile phones and accessories.
            </p>
            <button className="w-full bg-pink-100 text-pink-600 py-2 rounded-lg hover:bg-pink-200 transition">
              Check Warranty
            </button>
          </div>
        </div>

        {/* Help Center */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Help Center
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Common Issues
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Order not delivered</li>
                <li>Payment failed but amount deducted</li>
                <li>Device overheating</li>
                <li>Battery draining fast</li>
                <li>Network connectivity issues</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Self-Service Tools
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Download invoice</li>
                <li>Raise replacement request</li>
                <li>Cancel an order</li>
                <li>Update delivery address</li>
                <li>Reset account password</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Contact Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="text-gray-700 space-y-3">
              <p>
                <strong>Email:</strong> support@mobileweb.com
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Support Hours:</strong> Mon – Sat (9 AM – 7 PM)
              </p>
              <p>
                <strong>Location:</strong> India
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <textarea
                rows="4"
                placeholder="Describe your issue"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-600 text-sm">
          © 2026 Mobile Web Support. We’re always happy to help you.
        </div>

      </div>
    </div>
  );
};

export default Support;
