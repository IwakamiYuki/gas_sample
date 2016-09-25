# Google Apps Scriptをgit管理するサンプル

## git管理のための準備

### Google Apps Scriptをローカル環境に落とす

git管理するために、GASのソースコードをローカルに落としてくる

Googleのデベロッパーブログに書いてあるこれを利用する

[Apps Script による高度な開発プロセス](https://googledevjp.blogspot.jp/2016/01/apps-script.html)

以下のコマンドでインストールすることができる
```bash
$ npm install -g node-google-apps-script
```

GoogleのDevelopers Consoleからgappsで使うために*`OAuth2, その他のプロジェクト`*としてキーを発行する
キー情報が含まれているJSONを落とすし、以下のコマンドで認証をする
```bash
$ gapps auth ./client_secret_<client_secret_key>.json
```

表示されたURLを踏むと認証が完了するはず
```bash
Successfully Authenticated with Google Drive!
```

後は、GASのProject IDを指定してローカルに落としてくるだけ
```bash
$ gapps init <Project ID>
```
## このgas_sampleを自分のGoogleドライブのGoogle Apps Scriptに反映させる

### はじめに自分のGoogleドライブに空のGASプロジェクトを作成する

Googleドライブ -> 新規 -> Google Apps Script
ここでは*sample*という名前で作成した
このときのProject IDを利用する

### gas_sampleをローカルに落とす

gitからクローンしてくる
```bash
$ git clone https://github.com/IwakamiYuki/gas_sample.git
```

### 作成したGASプロジェクト*sample*をローカルに落とす

gappsコマンドを利用する
```bash
$ cd gas_sample/
$ gapps init 1cJQNXp6bOZ9usDODrYYSDUhFT6OKkSYaC2vf9yBnejYqojx7RYyZ_IOZ
```

### Googleドライブ上に反映させる

gas_sampleディレクトリの中身を見れば分かるが、このままuploadすればいい。この時、不要なファイルは削除しておく。
```bash
$ gapps upload
Pushing back up to Google Drive...
The latest files were successfully uploaded to your Apps Script project.
```

これで完了！

## KEY等の管理
外部スプレッドシートを使ってKey等の管理をしてみた
