# 静的 Web サイトのスターター：素の HTML、CSS、JavaScript を GitHub からデプロイ

[English](README.md) | [Français](README.fr.md) | [日本語](README.ja.md) | [Español](README.es.md)

[MitsuruTech ラーニングプラットフォーム](https://mitsurutech.co.uk/ja/learning)の**静的サイト**スタック用の、静的 Web サイトのスターターです。素の HTML、CSS、JavaScript だけで、裏で動くものはありません。
GitHub のアドレスから、アカウントなし、インストールなしで無料でデプロイできます。機能は
[GitHub から Web アプリをデプロイ](https://mitsurutech.co.uk/ja/apps)で、手順はマニュアルの
[GitHub からアプリをデプロイするガイド](https://mitsurutech.co.uk/ja/help/deploy-app)にあります。

**Deploy App** タブで、このリポジトリの URL を指定し、言語を*静的サイト*にしてデプロイします。既定値は次のとおりです。

- **Build：** `test -f index.html || { echo '...'; exit 1; }`
  ビルドするものはないので、ビルドでは配信するものがあることを確認します。ページがサブフォルダーにあるリポジトリは、
  そのままデプロイに成功しても `/` で 404 を返すため、動くアドレスだけが残り、デバッグする手がかりがありません。
- **Start：** `python3 -m http.server $PORT`
  チェックアウトした内容を配信します。ページがサブフォルダーにある場合は、移動せずに
  `--directory public` を追加してください。

## ファイル

| ファイル | 役割 |
| --- | --- |
| `index.html` | ページ本体です。リポジトリのルートに置くか、起動コマンドを変更する必要があります。 |
| `style.css` | ページからリンクされています。配信されれば、スタイルシートが見つかることの証明になります。 |
| `script.js` | 時刻を表示し、ボタンが押された回数を数えます。JavaScript が本当に動いていることが確認できます。 |

## 持っていないもの

ビルド手順も、依存関係も、パッケージファイルもありません。それが狙いです。これは、
ビルドが GitHub だけに接続するスタックです。

## ライセンス

この作品は [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) でライセンスされています。Mitsuru Technologies Ltd のクレジットを表示し、商用に使わず、これをもとに作ったものを同じライセンスで共有するなら、学習と授業のために共有・改変できます。全文は `LICENSE` ファイルにあります。対象は、このリポジトリのファイルです。

## このリポジトリについて

[Mitsuru Technologies](https://mitsurutech.co.uk) が
[MitsuruTech ラーニングプラットフォーム](https://mitsurutech.co.uk/ja/learning)のために作りました。学校向けに、Python、Java、Go、Node、SQL、Linux を
ブラウザーで学べ、コンテナーラボ、GitHub から Web アプリをデプロイする機能、自動採点のクイズがあります。
アカウントなしでコードを試せる[プレイグラウンド](https://mitsurutech.co.uk/ja/playground)もあります。日本語での研修とサポートもご用意しています。
