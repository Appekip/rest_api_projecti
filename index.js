const express = require('express');
const mysql = require('mysql');

const index = express();

index.use(express.static('./'));



index.listen('3000', () => {
    console.log('Server started on port 3000');
});

