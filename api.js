const { urlencoded, json } = require('body-parser');
const app = require('express')();

app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/', (req, res) => {
  return res.json({ status: '000', message: 'Success' });
});

app.listen(3000);
