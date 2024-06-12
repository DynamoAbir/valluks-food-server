import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductRoutes } from './app/modules/products/products.route';
import { SellerRoutes } from './app/modules/sellers/seller.route';
import { BuyerRoutes } from './app/modules/buyers/buyer.route';
const app :Application= express()
const port = 50000;




app.use(cors())
app.use(express.json())


app.use('/api/v1/products',ProductRoutes)
app.use('/api/v1/seller',SellerRoutes)
app.use('/api/v1/buyer',BuyerRoutes)


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;