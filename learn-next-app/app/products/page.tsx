import React from 'react';
import Link from 'next/link';



const Products = () => {
    const products = [
        {id: 1, name: 'PC', price: '$1200', description: 'Just a PC'},
        {id: 2, name: 'Iphone', price: '$1200', description: 'Just an Iphone'},
        {id: 3, name: 'Timberland', price: '$1200', description: 'Just a Timberland'}
    ];
    return (
        <div>
            <h1>
                Products
            </h1>
                <ul>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <li key={product.id} className='product'>
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
