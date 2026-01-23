const Dashboard = () => {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      {/* Page Container */}
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-pink-600">
            User Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Manage your profile, orders, and account activity here.
          </p>
        </div>

        {/* Profile + Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-pink-500 mb-4">
              Profile Information
            </h2>

            <div className="space-y-2 text-gray-700">
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Email:</strong> john@test.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Location:</strong> India</p>
            </div>

            <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
              Edit Profile
            </button>
          </div>

          {/* Account Stats */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-pink-500 mb-4">
              Account Stats
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between">
                <span>Total Orders</span>
                <span className="font-bold">18</span>
              </li>
              <li className="flex justify-between">
                <span>Active Orders</span>
                <span className="font-bold">2</span>
              </li>
              <li className="flex justify-between">
                <span>Wishlist Items</span>
                <span className="font-bold">5</span>
              </li>
              <li className="flex justify-between">
                <span>Support Tickets</span>
                <span className="font-bold">1</span>
              </li>
            </ul>
          </div>

          {/* Membership */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-pink-500 mb-4">
              Membership
            </h2>

            <p className="text-gray-700 mb-2">
              Status: <span className="font-bold text-green-600">Active</span>
            </p>
            <p className="text-gray-700 mb-4">
              Plan: Premium User
            </p>

            <button className="w-full bg-pink-100 text-pink-600 py-2 rounded-lg hover:bg-pink-200 transition">
              Manage Subscription
            </button>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Recent Orders
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-pink-100 text-pink-700">
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Product</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">#ORD1023</td>
                  <td className="p-3">Smartphone X</td>
                  <td className="p-3 text-green-600">Delivered</td>
                  <td className="p-3">₹29,999</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">#ORD1027</td>
                  <td className="p-3">Wireless Earbuds</td>
                  <td className="p-3 text-yellow-600">In Transit</td>
                  <td className="p-3">₹3,999</td>
                </tr>
                <tr>
                  <td className="p-3">#ORD1031</td>
                  <td className="p-3">Mobile Cover</td>
                  <td className="p-3 text-blue-600">Processing</td>
                  <td className="p-3">₹799</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Support & Help
          </h2>

          <p className="text-gray-700 mb-4">
            Need help with your orders, warranty, or repairs? Our support team is here for you.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex-1 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
              Raise Support Ticket
            </button>
            <button className="flex-1 bg-pink-100 text-pink-600 py-2 rounded-lg hover:bg-pink-200 transition">
              View FAQs
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
