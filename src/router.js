const express = require('express');
const assetRouter = require('./api/asset/asset.router');
const userRouter = require('./api/user/user.router');

const router = express.Router();

router.use('/asset', assetRouter);
router.use('/user', userRouter);

module.exports = router;
