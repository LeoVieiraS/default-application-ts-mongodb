import express, {Request, Response} from 'express'
import cors from 'cors'
import routes from './routes'
import mongoose from 'mongoose'

class App {
  public express: express.Application

  constructor( ){
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect('mongodb://localhost:27017/test',{
      authSource:"admin",
      auth:{user:"test", password:"test"},
      useNewUrlParser: true
    })
  }

  private routes (): void {
    this.express.use(routes)

  }
}

export default new App().express
