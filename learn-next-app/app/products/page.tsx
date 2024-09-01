import React from 'react';
import Link from 'next/link';


const Products = () => {
    const products = [
        {id: 1, name: 'PC', price: '$1200', description: 'Just a PC'},
        {id: 2, name: 'Iphone', price: '$1200', description: 'Just an Iphone'},
        {id: 3, name: 'Timberland', price: '$1200', description: 'Just a Timberland'}
    ];
    return (
        <div className='container mx-auto px-4 py-4'>
            <h1 className='text-3xl font-bold mb-6 bg shadow-lg text-black'>
                Products
            </h1>
                <ul className='space-y-4'>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <li key={product.id} className='inline-flex bg-orange-200 p-8 mx-6 border rounded-lg bg-red shadow-lg hover:shadow-slate-900 transition-shadow duration-300'>
                                <Link href={`/products/${product.id}`}>
                                    <p className='text-xl mb-2 font-semibold text-blue-400 hover:underline'>
                                        {product.name}
                                    </p>
                                    <p className='text-gray-500'>
                                        {product.description}
                                    </p>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p>None</p>
                        )
                    }
                </ul>
        </div>
    );
};

export default Products;
