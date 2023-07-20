export const addDeicmals = (num)=> {
    return (Math.round(num*100)/100).toFixed(2);
};

export const updateCart = (state)=> {
    //Calculate items price
    state.itemsPrice = addDeicmals(state.cartItems.reduce((acc,item) => acc+item.price * item.qty*0.95, 0));
    //Calculate shipping price(if order over ₹10000 then free, else shipping cost ₹100)
    state.shippingPrice = addDeicmals(state.itemsPrice>=10000?0:100);
    //Calculate tax price (10% tax)
    state.taxPrice = addDeicmals(Number((0.05*state.itemsPrice).toFixed(2)));
    //Calculate total price
    state.totalPrice = (Number(state.itemsPrice)+Number(state.shippingPrice)+Number(state.taxPrice)).toFixed(2);

    localStorage.setItem('cart',JSON.stringify(state));

    return state;
}