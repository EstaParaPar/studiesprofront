const express = require('express');

const app = express();

app.use(express.static('./dist/studiesprofront'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/studiesprofront/'}),
);

app.listen(process.env.PORT || 8080);

