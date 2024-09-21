const dotenv = require('dotenv');
const express = require('express');
const issueRoute = require('./http/routes/issue.route');
const sequelize = require('./database/sequelize');
const cors = require('cors');

dotenv.config();

(async () => sequelize.sync())();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/issues', issueRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});