import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BiRupee, BiCartAdd } from 'react-icons/bi'
import { addToCart } from '@/utils/cartitems'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'

function ProductCard({product}) {
  const router = useRouter();
  const redirectToCart = () => {
    router.push("/cart");
  }
  return (
    <div className='card zoom-effect'>
    <Link href={`/product/${product?.id}`}>
        <div className='object-fit-cover'>
            <Image src={product?.thumbnail} width={200} height={200} alt={product?.title} className='card-img-top'/>
        </div>
    </Link>
      <div className="card-body">
        <Link href={`/product/${product?.id}`} className='text-decoration-none'>
            <h5 className="card-title text-black">{product?.title} </h5>
        </Link>
        <div className='d-flex justify-content-between align-items-center'>
            <h6 className='card-title d-flex align-items-center'>
                <BiRupee size={21}/>
                {product?.price}
            </h6>
            <div className='d-flex'>
                <button className='btn btn-warning btn-sm mx-2' onClick={(e)=>{addToCart(product,1), toast.success(`${product?.title} Added to the Cart`)}}><BiCartAdd size={22}/></button> 
                <button className='btn btn-success btn-sm' onClick={(e)=>{addToCart(product,1), redirectToCart() }}>Buy</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard