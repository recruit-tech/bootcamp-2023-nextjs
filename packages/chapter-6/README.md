# 【第 6 章】簡単なアプリを作ってみよう

ORM ライブラリの Prisma を使ってみよう  
https://www.prisma.io/docs

## DB Server Setup

```
$ docker compose up -d
$ npm run db:migrate
```

## DB Server Reset

```
$ npm run db:migrate:reset
```

## Prisma Studio

```
$ npm run db:studio
$ open http://localhost:5555
```

## 【課題】次の機能を追加で実装してみてください

- ✏️ ① 記事を書く時「128 文字以内の本文」を送信できるようにしてみよう
- ✏️ ② 本文を編集できるようにしてみよう
- ✏️ ③ 記事にタグを付けられるようにしてみよう
- ✏️ ④ タグで記事一覧をフィルターできる機能を追加してみよう
- ✏️ ⑤ 新規タグを作成できる機能を追加してみよう
- ✏️ ⑥ タグテーブルのクエリーを減らすにはどうすれば良いか検討してみよう

⏰ 制限時間まで、自由に作り込んでみてください※
