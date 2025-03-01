# Sample AWS SAM

## 目的

AWS SAMの動作確認を目的として作成。

- Node.js v22
  - TypeScriptをesbuildでビルドして使用
- PRD/STG環境に対応
- API GatewayとEventBridge(Cron)から呼び出される構成

## AWS IAM

[デプロイに必要なポリシー](https://docs.aws.amazon.com/ja_jp/serverless-application-model/latest/developerguide/sam-permissions.html)

## 事前準備

- SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- Node.js v22
- Yarn
- Docker

```sh
$ yarn install
```

## コマンド

### ビルド

```sh
$ sam build
```

### デプロイ

```sh
# STG環境にデプロイ
$ sam deploy --config-env stg

# PRD環境にデプロイ
$ sam deploy --config-env prd
```

※ samconfig.toml に設定を記載しているため、 `$ sam deploy --guided` のようなguidedの使用は不要

### 削除

```sh
# STG環境を削除
$ sam delete --config-env stg

# PRD環境を削除
$ sam delete --config-env prd
```

## ローカルテスト

```sh
# Lambda関数の実行
$ sam local invoke HelloWorldFunction --event events/apigateway.json

# APIサーバのエミュレータの起動
$ sam local start-api
```
