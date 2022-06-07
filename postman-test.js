const axios = require("axios");

// axios.post("http://localhost:3000/api/cart/add", {
//   user_id: "Rayzhao",
//   goods_id: "sdfjsnlksfmdf",
//   goods_name: "耳机",
//   goods_num: 2,
//   goods_price: 999,
//   goods_checked: true,
//   small_image: "zl_pods.jpg",
// });
axios.get("http://localhost:3000/api/cart/add", {
  params: {
    result: "200",
    message: "请求发送成功",
  },
});
