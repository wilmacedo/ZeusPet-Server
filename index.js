const app = require('./bin/express');
const Zeus = require('./module/zeus/schema');
const moment = require('moment');

const port = 3333;

app.get('/', async (request, response) => {
    // const zeus = await Zeus.create({
    //     title: 'Ração',
    //     value: 30,
    //     date: moment()
    // });

    const all = await Zeus.find();
    response.status(200).send(all);
});

app.listen(port, () => {
    console.log(`API init in port ${port}`);
});