"use client";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params; // Get the dynamic id from the URL

  const productData = {
    1: { name: "PC", price: "$1200", description: "Just a PC" },
    2: { name: "Iphone", price: "$1200", description: "Just an Iphone" },
    3: { name: "Timberland", price: "$1200", description: "Just a Timberland" },
  };

  // Get the product based on the id
  const product = productData[id];

  if (!product) {
    return <p className='text-blue-800'>Product not found</p>;
  }

  return (
    <div className='bg-green-900 mt-10 p-10'>
      <h1 className=''>Name: {product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetail;
