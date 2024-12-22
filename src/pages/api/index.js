
export default function handler(req, res) {
    const userid = req.query.userid;

    try {
        if (req.method === 'POST') {
            res.status(200).json({
                method: 'POST',
                name: 'John Doe ' + userid
            })
        } else {
            res.status(200).json({ name: 'John Doe ' + userid })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}