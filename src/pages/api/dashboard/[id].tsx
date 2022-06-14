import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../middleware/mongodb';
import Dashboard from '../../../models/dashboard';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const { id } = req.query;
        const item = await Dashboard.findById(id);

        return res.status(200).send(item);
    }

    if (req.method === 'PATCH') {
        const { id } = req.query;
        const item = await Dashboard.findByIdAndUpdate(id, req.body);

        return res.status(200).send(item);
    }

    if (req.method === 'DELETE') {
        const { id } = req.query;
        const item = await Dashboard.deleteOne({ _id: id });

        return res.status(200).send(item);
    }
};

export default connectDB(handler);
