export interface OrdersI {
  userId: string;
  client: string;
  products:[
    {
      productId: string,
      qty: number
    }
  ]
}