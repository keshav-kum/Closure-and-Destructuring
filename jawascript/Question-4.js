function shoppingCart() {
    const cartItems = [];

    function itemIndexInCart(productId){
        return cartItems.findIndex(item =>item.id === productId);
    }

    return{
        addItem:function(product){
            const itemIndex = itemIndexInCart(product.id);

            if(itemIndex !== -1){
                cartItems[itemIndex].quantity++;
            }else{
                cartItems.push({id:product.id, name:product.name, price:product.price, quantity:1});
            }
        },

        getCartItems: function(){
            return cartItems;
        }
    }
}

const cart = shoppingCart();
console.log('Cart Items:', cart.getCartItems());

const product1 = {id:1, name:'product 1', price:10};
const product2 = {id:2, name:'product 2', price:20};

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);


console.log('Cart Items:', cart.getCartItems());

