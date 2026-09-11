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

## 2. ポートフォリオ動画を設定する（YouTube限定公開＋サムネイル方式）
サイトを軽く保つため、動画ファイル自体は置かず、YouTubeの限定公開動画を
クリックしたときだけ読み込む方式にしています。普段はサムネイル画像だけが表示されます。

**手順**
1. 動画をYouTubeに「限定公開」でアップロードする
2. アップロードした動画のURLからIDをコピーする
   - 通常の動画URL（例：`https://www.youtube.com/watch?v=ABCDE12345`）の場合は `v=` より後ろの文字列
   - ショート動画URL（例：`https://www.youtube.com/shorts/ABCDE12345`）の場合は `/shorts/` より後ろの文字列
   - どちらの形式でも、コピーするIDの部分（`ABCDE12345`のような文字列）は同じ扱いです
3. `index.html` の中の該当する `data-youtube-id="YOUTUBE_ID_01"` の
   `YOUTUBE_ID_01` の部分を、コピーしたIDに書き換える（WORK 01〜05それぞれ）
4. サムネイル画像を用意し、`images` フォルダに次の名前で保存する
   ```
   work01-thumb.jpg
   work02-thumb.jpg
   work03-thumb.jpg
   work04-thumb.jpg
   work05-thumb.jpg
   ```
   （YouTubeの動画詳細ページ右クリック→「サムネイルをコピー」などで取得できます。またはCapCutなどで動画から1枚切り出してもOKです）

6本目以降を追加したい場合は、`index.html` の `WORKS` セクション内にある
`<article class="work-card">〜</article>` のかたまりをコピーして増やし、
`data-youtube-id`・サムネイル画像のファイル名・タイトル文を書き換えてください。

各動画のタイトルは、`<h3>動画タイトルを入力</h3>` の部分を書き換えるだけでOKです。

IDを設定する前の状態でサムネイルをクリックすると、「YouTube IDが未設定です」という
アラートが出るようになっています（設定漏れに気づけるようにするためです）。

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
