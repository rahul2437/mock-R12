import React, { useState } from "react";

const initForm = {
  name: "",
  description: "",
  category: "",
  image: "",
  location: "",
  postedAt: "",
  price: "",
};

const PostForm = () => {
  const [form, setForm] = useState(initForm);

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_DB_BASE_URL}/products/post`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setForm(initForm);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className="flex flex-col border gap-2 p-3">
        <input
          value={form.name}
          onChange={onFormChange}
          className="border px-2 py-1"
          placeholder="Enter Name"
          type="text"
          name="name"
        />
        <textarea
          value={form.description}
          onChange={onFormChange}
          className="border px-2 py-1"
          placeholder="Enter Product Description"
          name="description"
        ></textarea>
        <select
          value={form.category}
          onChange={onFormChange}
          className="border px-2 py-1"
          name="category"
        >
          <option value="">Choose Category</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="furniture">Furniture</option>
          <option value="other">Other</option>
        </select>
        <input
          value={form.image}
          onChange={onFormChange}
          className="border px-2 py-1"
          placeholder="Enter Image URL"
          type="text"
          name="image"
        />
        <input
          value={form.location}
          onChange={onFormChange}
          className="border px-2 py-1"
          placeholder="Enter Location"
          type="text"
          name="location"
        />
        <input
          value={form.postedAt}
          onChange={onFormChange}
          className="border px-2 py-1"
          type="date"
          name="postedAt"
        />
        <input
          value={form.price}
          onChange={onFormChange}
          className="border px-2 py-1"
          placeholder="Enter price"
          type="number"
          name="price"
        />
        <input
          className="bg-blue-300 text-white font-bold text-xl px-2 py-2 hover:bg-blue-400"
          value="Post"
          type="submit"
        />
      </form>
    </div>
  );
};

export default PostForm;
