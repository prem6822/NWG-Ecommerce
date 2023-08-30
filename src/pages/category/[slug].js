import { useRouter } from 'next/router'
import React from 'react'
import Head from 'next/head';
import Breadcrum from '@/components/layout/Breadcrum';
import ProductCard from '@/components/cards/ProductCard';

function CategoryProducts({products}) {
    const router = useRouter();
    const categoryName = router?.query.slug;
  return (
    <>
      <Head>
        <title>{categoryName}</title>
      </Head>
      <main className='mb-4'>
        <Breadcrum title={`${categoryName?.toLocaleUpperCase()} - Products`}/>
        <div className='row'>
        {
          products && products.map((product)=>{
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

export default CategoryProducts


export async function getServerSideProps(context){
  const category = context.params.slug;
  let products = [];
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const result = await response.json();
    products = result.products;
  } catch (error) {
    return {notFound:true}
  }

  return{
    props:{
      products
    }
  }


}