const ProductDetail = () => (
  <div className="p-10 grid grid-cols-2 gap-6">
    <div>📱 Image</div>
    <div>
      <h1 className="text-3xl text-pinkPrimary">Galaxy S24</h1>
      <p>8GB RAM | 5000mAh | 108MP</p>
      <button className="bg-pinkPrimary text-white px-4 py-2 mt-4">
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductDetail;
