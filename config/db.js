import mongoose from "mongoose"
export const dbConnect = async () => {
  const conn = await mongoose.connect('mongodb+srv://db_user:T8tzTrYE7FoImXYF@freenews.uwmgavl.mongodb.net/?appName=freenews')
  if (conn) {

    console.log("DB Connected Successfully.........");

  }
}
