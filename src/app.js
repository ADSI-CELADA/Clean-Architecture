import express, { json } from "express";
import { userRouter } from "./router/router.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { connectMongo } from "./database/mongo.js";


const app = express();

app.use(json());

// routers
app.use('/api', userRouter)

// Middlewares
app.use(errorMiddleware)

await connectMongo();

app.listen(4000, () => {
    console.log("Server running <3");
});
