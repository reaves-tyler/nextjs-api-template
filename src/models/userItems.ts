import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const UserItemsSchema = new Schema({
    items: {
        type: Array,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
});

//github.com/dherault/serverless-offline/issues/258#issuecomment-535312388
const collection = process.env.MONGO_COLLECTION_USER_ITEMS;
const userItems = mongoose.models[collection] || mongoose.model<mongoose.Document>(collection, UserItemsSchema);

export default userItems;
