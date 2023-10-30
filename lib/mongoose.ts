import mongoose from 'mongoose'

let isConnected = false // variable to check the mongoose is connected

export const connectedToDB = async () => {
    mongoose.set('strictQuery', true)

    if(!process.env.MONGODB_URL) return console.log('MONGO_DB is not found')
    if(isConnected) return console.log('Already connected to MongoDB')

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        isConnected = true
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}