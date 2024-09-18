export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://html-classic.itch.zone');  // Allow all origins (you can restrict this to specific domains)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        // Handle preflight requests for CORS
        return res.status(200).end();
    }

    let globalCount = 0;  // You may replace this with your actual globalCount logic

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
