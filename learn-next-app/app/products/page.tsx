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
            <h1 className='text-3xl font-bold mb-6'>
                Products
            </h1>
                <ul className='space-y-4'>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <li key={product.id} className='inline-flex p-4 border rounded-lg shadow-lg'>
                                <Link href={`/products/${product.id}`}>
                                    {product.name}
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
