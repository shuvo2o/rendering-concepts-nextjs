import RecomendedProducts from '@/app/components/RecomendedProducts';
import Reviews from '@/app/components/Reviews';
import React, { Suspense } from 'react'
const getProducts = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-store"
    });


    return res.json();
}
const ProductDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const product = await getProducts(id);
    return (
        <div>
            <h1 className='mb-2'>Product Details Page</h1>
            <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magnam sunt fuga assumenda magni earum minima dolore illum omnis doloremque esse totam molestiae nemo deserunt ullam, aspernatur architecto necessitatibus. Facere.</p>
            <div>Product Details:
                <p>Title: {product.title}</p>
                <p>Description: {product.body}</p>
            </div>
            <Suspense fallback={<p>Loading Recommended Products</p>}>
                <RecomendedProducts />
            </Suspense>
            <Suspense fallback={<p>Loading Recommended Reviews</p>}>
                <Reviews />
            </Suspense>


        </div>
    )
}

export default ProductDetailsPage
