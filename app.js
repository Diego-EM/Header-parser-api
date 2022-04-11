const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({optionsSuccessStatus: 200}));

app.set('port', process.env.PORT || 3000);
app.set('trust proxy', true);

app.get("/api/whoami", function (req, res) {
    const response = {
        "ipaddress": req.ip,
        "language": req.headers['accept-language'],
        "software": req.headers['user-agent']
    }
    res.json(response)
});

app.use(express.static('./public'));

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
})