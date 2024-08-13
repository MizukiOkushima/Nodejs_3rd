# Nodejs_3rd
Node.jsのフレームワークexpressを試す。<br>
expressを使用したルーティングを試す<br>

# 環境構築
package.jsonの作成<br>
`npm init -y`
<br>
ライブラリのインストール(express, nodemon)<br>
nodemon 保存する度にサーバーをリロードしてくれるモジュール<br>
`npm i express nodemon`
<br>
package.jsonのscriptsに以下を追記する<br>
`"dev": "nodemon server.js"`
<br>
ルーティングの設定<br>
routsフォルダを作成しその中にファイルを格納する<br>
user.jsに /user から始まるルートの内容を記載する。<br>
<br>
テンプレートエンジンのインストール<br>
`npm i ejs`
