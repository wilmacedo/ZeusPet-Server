const app = require('./bin/express');
const port = 3333;

app.get('/', (request, response) => {
    response.status(200).send('Hello World');
});

app.listen(port, () => {
    console.log(`API init in port ${port}`);
});