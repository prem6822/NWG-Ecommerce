import Breadcrum from '@/components/layout/Breadcrum';
import Head from 'next/head'
import React, { useState } from 'react'
import Image from 'next/image';
import { BiRupee } from 'react-icons/bi';
import { addToCart } from '@/utils/cartitems'
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import ProductCard from '@/components/cards/ProductCard';

function SingleProduct({product, similarProducts}) {

    const [items, setItems] = useState(1);
    const router = useRouter();
    const redirectToCart = () => {
      router.push("/cart");
    }

    function increment(){
      setItems(prevItems=>prevItems+1);
    }

    function decrement(){
      setItems(prevItems=>prevItems-1>0?prevItems-1:prevItems);
    }

  return (
    <>
        <Head>
            <title>Product Name</title>
        </Head>
        <main>
            <Breadcrum title={product?.title}/>
            <div className='row g-3'>
                <div className='col-lg-6'>
                    <div className='p-2'>
                        <Image src={product?.thumbnail} className='border' alt={product?.title} width={350} height={300}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <h2>{product?.title}</h2>
                    <h4 className='card-title d-flex align-items-center'><BiRupee size={21}/>{product?.price}</h4>
                    <h5 className='mt-2'>Description</h5>
                    <p>{product?.description}</p>
                    <div className='d-flex gap-3'>
                        <b>Quantity:</b>
                        <div class="input-group input-group-sm w-25 border mb-3">
                          <button class="input-group-text btn btn-sm btn-outline-dark" onClick={decrement}>-</button>
                          <input type="text" class="form-control" value={items}/>
                          <button class="input-group-text btn btn-sm btn-outline-dark" onClick={increment}>+</button>
                        </div>
                    </div>
                    <div className='d-flex gap-3 mt-4'>
                        <button type='button' className='btn btn-sm btn-warning' onClick={(e)=>{addToCart(product,1), toast.success(`${product?.title} Added to the Cart`)}}>Add To Cart</button>
                        <button type='button' className='btn btn-sm btn-success'onClick={(e)=>{addToCart(product,1), redirectToCart() }}>Buy Now</button>
                    </div>
                </div>
            </div>
            <hr/>
            <div bg-light mt-5>
              <h4 className='text-center p-2 text-uppercase'>
                Similar Products
              </h4>
            </div>
            <div className='row'>
            {
              similarProducts && similarProducts.map((product)=>{
                return (
                  <div key={product.id} className='col-md-4'>
                    <div className='mt-4'>
                      <ProductCard product={product}/>
                    </div>
                  </div>
                )
              })
            }
            </div>
        </main>
    </>
  )
}

export default SingleProduct


export async function getServerSideProps(context){
    const productId = context.params.slug;
    let product = [];
    let similarProducts = [];
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      product = await response.json();
      const response1 = await fetch(`https://dummyjson.com/products/category/${product.category}`);
      const result = await response1.json();
      similarProducts = result.products;
    } catch (error) {
      return {notFound:true}
    }
    return{
      props:{
        product, similarProducts
      }
    }
  }
