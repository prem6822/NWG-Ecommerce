import Head from 'next/head'
import Banner from '@/components/Banner'
import ProductCard from '@/components/cards/ProductCard'

export default function Home({products}) {
  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner/>
        <div my-2 bg-light>
          <h4 className='text-center p-2 text-uppercase'>
            Products
          </h4>
        </div>
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

export async function getServerSideProps(context){
  let products = [];
  try {
    const response = await fetch('https://dummyjson.com/products');
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
