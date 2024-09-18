let globalCount = 0;

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).send(globalCount.toString());
    } else if (req.method === 'POST') {
        const playerCount = parseInt(req.body.count);
        if (!isNaN(playerCount)) {
            globalCount += playerCount;
            res.status(200).send('Global count updated');
        } else {
            res.status(400).send('Invalid count');
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
}
