import mongoose from "mongoose"


const connect = async () => {
   if (mongoose.connection.readyState >= 1) {return}
   
   try {
      await mongoose.connect(process.env.MONGO_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
      console.log("Connected to MongoDB")
      } catch (error) {
         console.log("error connecting to mongo")
         throw new Error("Error connecting to mongodb")
   }
}

export default connect;  