import { NextApiRequest } from 'next';
import connectDB from '../../../middleware/mongodb';
import Dashboard from '../../../models/dashboard';

const handler = async (req: NextApiRequest, res) => {
    if (req.method === 'GET') {
        const { user, day } = req.query;

        const items = await Dashboard.find({ user, day });
        //todays date

        return res.status(200).send(items);
    } else {
        res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(handler);
