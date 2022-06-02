const express = require("express");
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// const fs = require("fs");
// const util = require("util");

//Initialize the app & create port
const app = express();
const PORT = process.env.PORT || 3001;

//Parsing body, require static, route middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api' , apiRoutes);
app.use('/', htmlRoutes);

//Start the server
app.listen(PORT, () => console.log(`Listening on port: http://localhost:${PORT}`))