import Cookies from "js-cookie";

const getCartItems = () => {
    const cartItems = Cookies.get('cartItems');
    return cartItems?JSON.parse(cartItems):[];
}

const setCartItems = (cartItems) => {
    Cookies.set('cartItems',JSON.stringify(cartItems));
}

const addToCart = (product, quantity) => {
    const cartItems = getCartItems();
    const existingItem = cartItems.find((item)=>item.id===product.id);
    if(existingItem){
        existingItem.qty += quantity;
    }else{
        cartItems.push({id: product.id, title: product.title, price: product.price, image: product.thumbnail, qty: quantity})
    }
    setCartItems(cartItems);
}

const removeFromCart = (productId) => {
    const cartItems = getCartItems().filter((item) => item.id !== productId);
    console.log(cartItems);
    setCartItems(cartItems);
}

const updateCartItems = (productId, quantity ) => {
    const cartItems = getCartItems().map((item) => 
        item.id === productId ?
        {...item, qty: quantity} :
        item
    );
    setCartItems(cartItems);
}

export {getCartItems, addToCart, removeFromCart, updateCartItems};