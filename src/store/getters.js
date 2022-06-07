export default {
  checkedShopCart(state) {
    let shopCart = state.shopCart;
    let list = [];
    for (let key in shopCart) {
      if (shopCart[key].checked) {
        list.push(shopCart[key]);
      }
    }
    return list;
  },
  checkedLength(state) {
    let shopCart = state.shopCart;
    let num = 0;
    for (let key in shopCart) {
      if (shopCart[key].checked) {
        num += shopCart[key].num;
      }
    }
    return num;
  },
  totalPrice(state) {
    let shopCart = state.shopCart;
    let price = 0;
    for (let key in shopCart) {
      if (shopCart[key].checked) {
        price += shopCart[key].num * shopCart[key].price;
      }
    }
    return price;
  },
};
