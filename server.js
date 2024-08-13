// expressモジュールの読み込み
const express = require("express");
// インスタンス化のように使えるようにする
const app = express();
// パスの指定が必要
// userRouterはuser.jsのmodule.exports = router; に記載したrouterのことである
const userRouter = require("./routes/user");

// ポートの指定
const PORT = 3000;

// ミドルウェアの使用をする宣言
// expressは上から下へ処理が実行される
// ミドルウェアを宣言する場合は一番上で宣言する必要がある
// app.use(myLogger);

// HTMLをレンダリングする
// publicフォルダに作成したHTMLを表示させる
// app.use(express.static("public"));

// DB接続
// ejs expressで用意されているテンプレートエンジン
//     テンプレートエンジンとは、DBに用意したデータをテンプレートエンジンの中にファイルを作り読み込ませHTMLとして表示する
app.set("view engine", "ejs");

// get GETメソッド
// 代一引数 エンドポイント 今回はルートディレクトリの指定
// 代二引数 リクエストとレスポンスをコールバック関数として受け取る
app.get("/", (req, res) => {

    // ブラウザから http://localhost:3000 へアクセスするとターミナルにhello expressが表示される
    // console.log("hello express");

    // send ブラウザ側に文字を表示させる
    // ブラウザから http://localhost:3000 へアクセスするとブラウザにこんにちは。が表示される
    // res.send("<h1>こんにちは。</h1>");

    // sendStatus ステータスコード  500 サーバー側にエラーがある番号 Internal Server Error
    //                           404 お探しのページが見つからない場合の番号  Not Found
    //                           400番台はクライアント側に何かしらの問題がある場合の番号
    // res.sendStatus(404);

    // statusとsendをつなげた書き方
    // ブラウザのコンソールに以下が表示される Failed to load resource: the server responded with a status of 500 (Internal Server Error)
    // res.status(500).send("エラーです。");

    // 上記内容をjson形式で記載する方法
    // res.status(500).json({ msg: "エラーです。" });


    res.render("index", { text: "NodejsとExpress" });

});

// use ルーティング設計を行う
// 代一引数 共通のエンドポイントの指定   /userを指定
// 代二引数 その後のエンドポイントの指定 userRouterに任せる
app.use("/user", userRouter);
// app.use("/auth", authRouter);            ルーティングを増やした場合の例 (実際には未作成のためコメントアウト)
// app.use("/customer", customerRouter);    ルーティングを増やした場合の例 (実際には未作成のためコメントアウト)
// app.use("/product", productRouter);      ルーティングを増やした場合の例 (実際には未作成のためコメントアウト)

// ミドルウェア リクエストを送る前に何かを確かめる中間に挟む処理
// expressは上から下へ実行する nextは実行を止めない
// function myLogger(req, res, next) {
//     // myLoggerというミドルウェアを挟みレスポンスを返す(今回はログを見る)
//     console.log(req.originalUrl);
//     next();
// }


// listen expressを使用してローカルサーバーを使う
// 代一引数 ポートの指定
// ブラウザに以下にアクセスする http://localhost:3000 Cannot GET が表示される
app.listen(PORT, () => console.log("サーバーが起動しました。"));