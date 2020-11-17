const app = require('./bin/express');
const zeusRouter = require('./module/zeus/routes');
const bodyParser = require('body-parser');

const port = 3333;

app.use(bodyParser.json());
app.use('/api/zeus', zeusRouter);

app.listen(port, () => {
    console.log(`API init in port ${port}`);
});