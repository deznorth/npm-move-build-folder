const express = require('express');
const app = module.exports = express();
const morgan = require('morgan');
const path = require('path');

const config = require('./config/config');
const PORT = config.PORT;

const apiRoutes = require('./routes/api');

app.use(morgan('common'));
app.use(express.static(path.resolve('build')));

app.use('/api', apiRoutes);

app.get('*', (req,res) => {
    res.sendFile(path.resolve('build', 'static', 'index.html'));
});

app.listen(PORT, (err) => {
    if(err) console.log(err);
    else{
        console.log('server has started.\nhttp://localhost:%s', PORT);
    }
});