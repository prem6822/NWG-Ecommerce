import { useSession } from 'next-auth/react';
import {useRouter} from 'next/router'
import React from 'react'
import Image from 'next/image';

function ThankYou() {
    const router = useRouter();
    const cartData = JSON.parse(router.query.cart);
    const yourCartData = JSON.parse(router.query.yourCart);
    const shippingData = JSON.parse(router.query.shipping);
    const session = useSession();
    const date = new Date().toString();

    const printHandler = () => {

			window.print();

    }
    return (
        <div class="container-fluid">
            <div id="ui-view" data-select2-id="ui-view">
                <div>
                    <div class="card">
                        <div class="card-header mx-2">ThankYou for shopping with us!!
                            <strong className='mx-2'>@{session?.data?.user?.name}</strong>
                        </div>                   
                        <div class="card-header mx-2">Invoice
                            <strong className='mx-2'>#BBB-10010110101938</strong>
                            <a class="btn btn-sm btn-info float-right mr-1 d-print-none" href="#" data-abc="true" onClick={printHandler}>
                                <i class="fa fa-save"></i>
                                <strong>Print</strong></a>
                        </div>
                        <div class="card-body">
                            <div class="row mb-4">
                                <div class="col-sm-4">
                                    <h6 class="mb-3">To Address:</h6>
                                    <div>
                                        <strong>{shippingData.firstName} {shippingData.lastName}</strong>
                                    </div>
                                    <div>{shippingData.address}</div>
                                    <div>{shippingData.landmark}, {shippingData.state} {shippingData.zip}</div>
                                    <div>Email: {shippingData.email}</div>
                                    <div>Phone: {shippingData.mobile}</div>
                                </div>
                                <div class="col-sm-4">
                                    <h6 class="mb-3">Details:</h6>
                                    <div>Invoice
                                        <strong className='mx-2'>#BBB-10010110101938</strong>
                                    </div>
                                    <div>{date.slice(4, 15)}</div>
                                    <div>VAT: NYC09090390</div>
                                    <div>Account Name: State Bank of India</div>
                                    <div>
                                        <strong>IFSC code: 66 8888 2222 2222</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive-sm">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th class="center">#</th>
                                            <th>Item</th>
                                            <th>Description</th>
                                            <th class="center">Quantity</th>
                                            <th class="right">Unit Cost</th>
                                            <th class="right">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                      cartData.map((item)=>{
                                        return(
                                          <tr>
                                            <td class="center">{cartData.indexOf(item)+1}</td>
                                            <td>
                                                <div className='d-flex align-items-center gap-3'>
                                                    <Image src={item?.image} className='rounded-circle' width={40} height={40} alt={item?.title}/>
                                                </div>
                                            </td>
                                            <td class="left">{item.title}</td>
                                            <td class="center">{item.qty}</td>
                                            <td class="right">${item.price}</td>
                                            <td class="right">${item.price * item.qty}</td>
                                        </tr>
                                        )
                                      })
                                    }
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-sm-5 ml-auto">
                                    <table class="table table-clear">
                                        <tbody>
                                            <tr>
                                                <td class="left">
                                                    <strong>Subtotal</strong>
                                                </td>
                                                <td class="right">{yourCartData.subTotal}</td>
                                            </tr>
                                            <tr>
                                                <td class="left">
                                                    <strong>GST (18%)</strong>
                                                </td>
                                                <td class="right">${yourCartData.gstAmount}</td>
                                            </tr>
                                            <tr>
                                                <td class="left">
                                                    <strong>Shipping charge</strong>
                                                </td>
                                                <td class="right">
                                                    <strong>Free</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="left">
                                                    <strong>Total</strong>
                                                </td>
                                                <td class="right">
                                                    <strong>${yourCartData.grandTotal}</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThankYou
