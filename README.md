# Zod の振る舞いの確認

確認方法: `tsc` を実行してエラーの有無を確認する
```shell
cd packages/main
pnpm build
```

## tsconfig
### `declaration: true/false`
- packages/main/Declaration.ts

monorepo 内の `declaration` の指定で振る舞いは変わらない