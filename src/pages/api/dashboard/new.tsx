import connectDB from '../../../middleware/mongodb';
import Dashboard from '../../../models/dashboard';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { type, user, day } = req.body;

        if (type && user && day) {
            try {
                var dashboard = new Dashboard({
                    type: type,
                    day: day,
                    user: user,
                });

                var created = await dashboard.save();
                return res.status(200).send(created);
            } catch (error) {
                return res.status(500).send(error.message);
            }
        } else {
            res.status(422).send('data_incomplete');
        }
    }
};

export default connectDB(handler);
