
import useSwr from 'swr'
import React from 'react'
import {MdCategory} from 'react-icons/md'
import Link from 'next/link'
import { BsDash } from 'react-icons/bs'
import { fetcher } from '@/utils/swrFetcher'

function Sidebar() {

    const {data, error, isLoading} = useSwr('https://dummyjson.com/products/categories',fetcher);

    if(error) return <div>Failed to Load</div>;
    if(isLoading) return <div>Loading...</div>;


  return (
        <div className='w-100'>
            <ul className='list-group'>
                <li className='list-group-item d-flex align-items-center navbar-top-bg'>
                    <h5 className='text-white mt-2 text-uppercase'>
                        <MdCategory/> Categories
                    </h5>
                </li>
                {
                    data.map((category, i) => {
                        return(
                            <Link key={i} href={`/category/${category}`} className='text-decoration-none zoom-effect'>
                                <li className='list-group-item list-group-item-action d-flex align-items-center text-capitalize'>
                                    <BsDash size={24} className='m-2'/>
                                    {category}
                                </li>
                            </Link>
                        )
                    })
                }

            </ul>
        </div>
  )
}

export default Sidebar