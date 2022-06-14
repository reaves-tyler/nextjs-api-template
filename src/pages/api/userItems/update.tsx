import connectDB from '../../../middleware/mongodb';
import userItems from '../../../models/userItems';

const handler = async (req, res) => {
    if (req.method === 'PUT') {
        const { items, user } = req.body;

        try {
            await userItems.validate(req.body);

            const updated = await userItems.findOneAndUpdate({ user: user }, { items: items }, { upsert: true });
            return res.status(200).send(updated);
        } catch (error) {
            return res.status(500).send(error);
        }
    } else {
        res.status().send('data_incomplete');
    }
};

export default connectDB(handler);
