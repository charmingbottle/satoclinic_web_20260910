# 佐藤医院 Webデザインデモ（架空サイト）

このリポジトリは、Web制作・学習用の**架空の医療機関サイト**です。実在の医療機関ではありません。診療・予約・電話連絡・メールでの問い合わせ・個人情報の収集は行いません。サイト上の人物や経歴、所在地、診療時間などはすべて架空の設定です。

## GitHub Pages に公開する手順

1. ZIPを展開します（ZIPファイルそのものはGitHub Pagesにアップロードしないでください）。
2. `index.html`、`style.css`、`script.js`、`assets/`、`.nojekyll` などを、GitHubリポジトリの**ルート直下**に配置します。既存ファイルは変更内容が反映されるよう更新します。
3. GitHub のリポジトリから **Settings > Pages** を開きます。
4. **Build and deployment** で **Deploy from a branch**、`main`、`/(root)` を選択し、保存します（既存設定がある場合は確認のみで構いません）。
5. 公開後のURL: https://charmingbottle.github.io/satoclinic_web_20260910/

## 変更内容

- `index.html` の `noindex, nofollow, noarchive, nosnippet` を削除しました。これにより検索エンジンへのインデックス禁止指定がなくなります。**危険判定を解除する機能ではありません。**
- ページのタイトル・説明・デモ告知を明確にしました。
- 診療時間、アクセス、スタッフ紹介等が架空の情報であることを追記しました。
- `style.css` の地図画像上の表示を「架空の所在地」に修正しました。
- JavaScript、画像と基本レイアウトは変更していません。

## Google Chrome の『危険なサイト』警告への対応

**重要:** ページと `https://charmingbottle.github.io/` の両方が危険と判定された場合、ページ以外のGitHub Pages公開サイトやサブドメイン単位の評価が関係している可能性があります。HTML変更と再公開だけでは解除されません。

1. Google Search Console (https://search.google.com/search-console/) で対象サイトの所有権を確認し、「セキュリティの問題」を調べます。
2. 警告の具体的な種類・例示されたURLを確認し、同一アカウントで公開している**他のサイトや不審なファイル**も含めて点検します。
3. 問題を修正して検証後、Search Consoleで再審査をリクエストします。誤判定の疑いがある場合は、Safe Browsingの誤判定報告フォーム (https://safebrowsing.google.com/safebrowsing/report_error/) も確認してください。
4. 解除されるまで、ブラウザの保護機能を無効にしたり、警告を無視して先へ進むことを推奨しません。

`noindex` を削除したため、Googleの検索結果に掲載される可能性があります。学習用として一般公開しつつ検索結果に出したくない場合は、再審査との関連を確認したうえでインデックス方針を別途決めてください。

Googleの再審査や警告解除はこのファイルでは自動実行されません。公開URLのリアルタイム判定もこのZIPでは確認できません。
