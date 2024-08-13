// expressモジュールの読み込み
const express = require("express");
// Router expressでルーティングを行う関数
const router = express.Router();

// ミドルウェアの宣言
// /userのみ適応させるためuser.jsに実装する
// router.use(myLogger);

// エンドポイントを指定した場合の書き方 ルーティングの設計
// http://localhost:3000/user へアクセス
// 代二引数にミドルウェアmyLoggerを設定し/のルートディレクトリにのみ使用
router.get("/", myLogger, (req, res) => {
    res.send("ユーザーです。");
});

router.get("/info", (req, res) => {
    res.send("ユーザー情報です。");
});

// :を指定することでランダムな文字列または数値を入れることが可能になる
router.get("/:id", (req, res) => {
    // ランダムな文字列または数値をreq.params.idで取得する
    // /user/1234 へアクセスすると1234のユーザー情報を取得しました。と出力される
    res.send(`${req.params.id}のユーザー情報を取得しました。`);
});

// POSTメソッドはFORMを置く必要があるため動かない
router.post("/:id", (req, res) => {
    res.send(`${req.params.id}のユーザー情報を取得しました。`);
});

// DELETEメソッドはFORMを書く必要があるため動かない
router.delete("/:id", (req, res) => {
    res.send(`${req.params.id}のユーザー情報を取得しました。`);
});

// ミドルウェア リクエストを送る前に何かを確かめる中間に挟む処理
// expressは上から下へ実行する nextは実行を止めない
function myLogger(req, res, next) {
    // myLoggerというミドルウェアを挟みレスポンスを返す(今回はログを見る)
    // 現実的にはユーザーが認証しているかどうかを確認する処理を入れる
    console.log(req.originalUrl);
    next();
}

// server.jsで使えるようにエクスポートする
// server.jsで受け取る必要がある(server.jsの頭に記載)
module.exports = router;