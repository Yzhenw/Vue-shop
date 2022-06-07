import axios from 'axios'
const axiosCart = axios.create({ baseURL: 'http://localhost:3000/api/cart' })
export const addGoodsToCart = (params) => {
  return axiosCart.post('/add', params)
}
export const initGoodsToCart = (account) => {
  return axiosCart.get('/search', { params: { user_id: account } })
}
