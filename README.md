# ホームページの使い方

## フォルダの中身
```
portfolio-site/
├── index.html      ← ページの中身（文章・構成）
├── style.css       ← デザイン（色・フォント・レイアウト）
├── script.js       ← スマホ用メニューの開閉
├── images/         ← 似顔絵イラストなどをここに入れる
└── videos/         ← ポートフォリオ動画をここに入れる
```

## 1. 似顔絵を差し替える
`images` フォルダに、作った似顔絵イラストを **`portrait.png`** という名前で入れてください。
（ファイル形式がjpgの場合は `index.html` 内の `portrait.png` を `portrait.jpg` に書き換えてください）

画像が見つからない間は、水色の点線の枠が仮に表示されるようになっています。

## 2. ポートフォリオ動画を差し替える
`videos` フォルダに、Instagramから保存した動画ファイルを次の名前で入れてください。

```
work01.mp4
work02.mp4
work03.mp4
work04.mp4
work05.mp4
work06.mp4
work07.mp4
```

8本目以降を追加したい場合は、`index.html` の `WORKS` セクション内にある
`<article class="work-card">〜</article>` のかたまりをコピーして増やし、
ファイル名（`work08.mp4` など）とタイトル文を書き換えてください。

各動画のタイトルは、`<h3>動画タイトルを入力</h3>` の部分を書き換えるだけでOKです。

（任意）動画の再生前に表示するサムネイル画像を用意する場合は、
`images/work01-poster.jpg` のように保存すると、読み込み中の見た目がきれいになります。

## 3. お問い合わせフォームのリンクを設定する
1. Googleフォームで質問項目（お名前・会社名・ご相談内容など）を作成し、「送信」ボタンからリンクをコピーします。
2. `index.html` の中にある次の部分を、コピーしたリンクに書き換えます。

```html
<a href="https://forms.gle/xxxxxxxxxxxx" class="btn btn-primary" ...>
```

## 4. 無料で公開する（GitHub Pagesの場合）
1. GitHubのアカウントを作成する（無料）
2. 新しいリポジトリを作成し、このフォルダの中身（index.html, style.css, script.js, images, videos）をすべてアップロードする
3. リポジトリの「Settings」→「Pages」から、公開するブランチを選んで保存する
4. 数分後、`https://ユーザー名.github.io/リポジトリ名/` で公開される

Cloudflare Pagesも同様の手順（ドラッグ＆ドロップでアップロードするだけ）で無料公開できます。

## 5.（任意）独自ドメインをつける
「〇〇.com」のような自分の名前のドメインが欲しい場合は、お名前.comやCloudflare Registrarなどで
年間1,000〜1,500円程度で取得し、GitHub PagesやCloudflare Pagesの設定画面で紐づけできます。
月額課金ではなく年払いの買い切りに近い形です。
