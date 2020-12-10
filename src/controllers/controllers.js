
const home = (req, res) => {
    res.send (req.headers['user-agent']);
}


module.exports = { home };