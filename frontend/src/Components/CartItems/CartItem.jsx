import React, { useContext } from "react";
import  './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'
import StripeCheckout from 'react-stripe-checkout'
const apiKey=import.meta.env.VITE_API_KEY

const CartItems= ()=>{
    const {getTotalCartAmount,all_product,cartItems,removeFromCart,makePayment}=useContext(ShopContext);
    
//     const makePayment = token=>{
//       const body={
//         token,
//         cartItems
//       }
//       const headers={
//         "Content-Type":"application/json"
//       }
  
//       return fetch(`http://localhost:4000/payment`,{
//         method:"POST",
//         headers,
//         body:JSON.stringify(body)
//       })
//       .then(response=>{
//         console.log("RESPONSE",response)
//         const {status}=response
//         console.log("Status",status);
//       })
//       .catch(error=>console.log(error))
//     }
    
    
    return (
        <div className="cartitems">
           <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
           </div>
           <hr />
           {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                   return  <div key={e.id}>
                   <div className="cartitems-format cartitems-format-main">
                       <img src={e.image} alt="" className="carticon-product-icon" />
                       <p>{e.name}</p>
                       <p>${e.new_price}</p>
                       <button className="cartitems-quantity">{cartItems[e.id]}</button>
                       <p>${e.new_price*cartItems[e.id]}</p>
                       <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                   </div>
              <hr />
         </div>
            }
            return null;
           })}
           <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtatal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                     <StripeCheckout 
                         stripeKey={apiKey}
                         token={makePayment}
                         name="coplete payment"
                         amount={getTotalCartAmount()*100}
                         shippingAddress
                         billingAddress
                         >
                   <button onClick={()=>{}}>PROCEED TO PAYMENT</button>
                 </StripeCheckout>
                         {/* <button>PROCEED TO PAYMENT</button> */}
            </div>
            <div className="cartitems-promocode">
                <p>If you have any promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text"placeholder="promo code" />
                    <button>Submit</button>
                </div>
            </div>
           </div>
        </div>
    )
}
export default CartItems;