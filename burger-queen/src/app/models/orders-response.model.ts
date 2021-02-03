export interface OrdersResponseI {
  _id: string;
  userId: string;
  client: string;
  products: any [//{
    //  qty: number,
      //products: ProductI
 // }
  ],
  status: string;
  dateEntry: string;
  dateProcessed: string
}