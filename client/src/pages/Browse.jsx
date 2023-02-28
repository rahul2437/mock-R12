import React, { useEffect, useState } from "react";

const Browse = () => {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_DB_BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  console.log(products);
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold">Products</h1>
      </div>
      <div className="grid grid-cols-2 gap-2 justify-center mx-auto">
        {products.map((product) => (
          <div className="border p-2 rounded bg-slate-200">
            <img className="w-48" src={product.image} alt="product" />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p className="truncate hover:text-clip hover:overflow-visible hover:whitespace-normal ">
              {product.description}
            </p>
            <p>Location: {product.location}</p>
            <p>Posted on: {product.date}</p>
            <p>Rs. {product.price}/-</p>
            <button className="border rounded text-white bg-blue-500 hover:bg-blue-600 px-4 py-2">
              BUY
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
