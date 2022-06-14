import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const DashboardSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
});

//github.com/dherault/serverless-offline/issues/258#issuecomment-535312388
const collection = process.env.MONGO_COLLECTION;
const dashboard = mongoose.models[collection] || mongoose.model<mongoose.Document>(collection, DashboardSchema);

export default dashboard;
