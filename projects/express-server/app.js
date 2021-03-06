const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) =>{
res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

const port = 9000;

app.listen(port, () => console.log(`listening on port ${port}...`))
