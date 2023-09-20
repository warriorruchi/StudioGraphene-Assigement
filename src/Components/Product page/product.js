import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from "../Card Page/card";
import { Flex } from "@chakra-ui/react";

function Product() {

    const [products, setProducts] = useState([]);

    async function fetchProducts() {

        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data);

        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="product-page">
                <Flex flexWrap="wrap">
                    {products.map((product) => (
                        <>
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                category={product.category}
                            />
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                category={product.category}
                            />
                        </>
                    ))}
                </Flex>

            </div>


        </>
    )
}

export default Product;