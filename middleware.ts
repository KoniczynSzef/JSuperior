import { NextApiResponse, NextApiRequest } from 'next';

export const middleware = (req: NextApiRequest, res: NextApiResponse) => {
    if (process.env.NODE_ENV === 'production') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, DELETE, OPTIONS'
        );
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-Requested-With, Content-Type, Authorization'
        );
    }
};

export default middleware;
