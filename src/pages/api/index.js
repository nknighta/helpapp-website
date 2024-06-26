export default function handler(req, res) {
    console.log(req.query.userid)
    const time = new Date();
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    res.status(200).json({
        userid: req.query.userid, locate:
            [
                req.query.locatex !== "" ? req.query.locatex : "",
                req.query.locatey !== "" ? req.query.locatey : "",
            ], gettime: h + ":" + m + ":" + s
    });
    res.status(300).json({ message: 'Hello World' })
}