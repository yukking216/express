var express = require('express');
var router = express.Router();



// 接続情報を設定
<<<<<<< HEAD
const{ MongoClient} = require("mongodb");
const uri= "mongodb+srv://moachan0216:Manba9621@test.nvudxeo.mongodb.net/?retryWrites=true&w=majority&appName=test";
const client= new MongoClient(uri);
router.get('/', async(req, res) =>{
=======
const { MongoClient } = require("mongodb");
const uri = "********";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
>>>>>>> f9536b0ac1757f6ecb54d2755579eb6afa94d3fb
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

// idが１のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note);
})
<<<<<<< HEAD
module.exports= router;

=======

module.exports = router;
>>>>>>> f9536b0ac1757f6ecb54d2755579eb6afa94d3fb
