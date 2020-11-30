require('dotenv').config();

const app = require('./bin/express');
const zeusRouter = require('./module/zeus/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/zeus', zeusRouter);

app.listen(process.env.PORT || port, () => {
    console.log(`API init in port ${port}`);
});