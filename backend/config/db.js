import mongoose from "mongoose";

const db = async() => {
     await mongoose
       .connect(process.env.MONGO_URI)
       .then(() => {
         console.log("MONGODB CONNECTED");
       })
       .catch((err) => {
         console.log("CONNECTION FAILED:", err);
       });
}

export default db;
