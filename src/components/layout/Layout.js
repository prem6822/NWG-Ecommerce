import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { signIn, useSession } from 'next-auth/react'
import Login from '../login';

function Layout({children}) {
    const session = useSession();
    if(session.data==null){
        return(<Login/>)
    }
    else{
        return (
            <>
                <Header/>
                <div className='container-md mt-4'>
                    <div className='row g-3'>
                        <div className='col-md-3 d-none d-md-block'>
                            <Sidebar/>
                        </div>
                        <div className='col-12 col-md-9'>
                            {children}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return(<div>Please try again after sometime.</div>)
}

export default Layout