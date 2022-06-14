import { NextApiRequest } from 'next';
import connectDB from '../../../middleware/mongodb';
import userItems from '../../../models/userItems';

const handler = async (req: NextApiRequest, res) => {
    if (req.method === 'GET') {
        try {
            const { user } = req.query;

            if (!user) {
                return res.status(400).json({
                    message: 'user param is required',
                });
            }

            const items = await userItems.findOne({ user });
            console.log(items);

            return res.status(200).send(items);
        } catch (error) {
            return res.status(500).send(error);
        }
    } else {
        res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(handler);
