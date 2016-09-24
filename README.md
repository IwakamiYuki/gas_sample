# Google Apps Scriptをgit管理するテスト

## git管理のための準備

### Google Apps Scriptをローカル環境に落とす

git管理するために、GASのソースコードをローカルに落としてくる
Googleのデベロッパーブログに書いてあるこれを利用する
[Apps Script による高度な開発プロセス](https://googledevjp.blogspot.jp/2016/01/apps-script.html)

以下のコマンドでインストールすることができる
> $ npm install -g node-google-apps-script

GoogleのDevelopers Consoleからgappsで使うために*`OAuth2, その他のプロジェクト`*としてキーを発行する
キー情報が含まれているJSONを落とすし、以下のコマンドで認証をする
> $ gapps auth ./client_secret_<client_secret_key>.json

表示されたURLを踏むと認証が完了するはず
> Successfully Authenticated with Google Drive!

後は、GASのProject IDを指定してローカルに落としてくるだけ
> $ gapps init <Project ID>


## KEY等の管理
外部スプレッドシートを使ってKey等の管理をしてみた
