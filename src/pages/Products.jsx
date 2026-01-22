const Products = () => (
  <div className="p-10 grid grid-cols-4 gap-6">
    <aside className="bg-white p-4 border">
      <h3 className="font-bold mb-2">Filters</h3>
      <p><input type="checkbox" /> 8GB RAM</p>
      <p><input type="checkbox" /> 5000mAh+</p>
    </aside>

    <div className="col-span-3 grid grid-cols-3 gap-4">
      <div className="bg-white p-4 border">
        <h3>Galaxy S24</h3>
        <p>₹79,999</p>
      </div>
    </div>
  </div>
);

export default Products;
