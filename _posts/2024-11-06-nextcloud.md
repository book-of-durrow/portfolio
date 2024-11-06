---
layout: post
title: Nextcloudのセットアップ
date: 2024-11-06
categories: diary it
---

## ここに書く動機
色んなところで詰まったので、あとから参照したいため。また、同じ困りが発生した他人がアクセスする可能性が若干あるかもしれないため。

## 手順
1. WSL2でUbuntuを入れる
2. UbuntuにDockerを入れる
3. Nextcloudのためのdocker-compose.ymlを作成
4. コンテナの起動
5. Nextcloudにlocalhostからアクセス
6. ファイアウォールからポートを開放
7. WindowsのIPアドレスへのアクセスをWSLのIPアドレスに送る
8. trusted_domainsにIPアドレスを追加

2までは終わっている想定で進めます。

## 3. Nextcloudのためのdocker-compose.ymlを作成
[nextcloud - Official Image | Docker Hub](https://hub.docker.com/_/nextcloud)にアクセス。

下の方にあるdocker-compose.ymlをコピペして作成。

## 4. コンテナの起動
```sh
docker compose up -d
```

でコンテナを起動。

## 5. Nextcloudにlocalhostからアクセス
`localhost:8080`(portを変更したなら変更後のport番号)でアクセス可能。

アクセスしたら管理者アカウントの作成を求められる。

データベースはmariadbを選ぶ。docker-compose.yml内で設定したユーザー名・パスワードを入力。

## 6. ファイアウォールからポートを開放
コントロールパネル → システムとセキュリティ → Windows Defender ファイアウォール → 詳細設定 → 受信の規則

設定したport番号を開放。

## 7. WindowsのIPアドレスへのアクセスをWSLのIPアドレスに送る
そのままだとWindowsのIPアドレスにアクセスしても何も出てこない。WSLのIPはまた別であるらしい。

```sh
ip a show dev eth0
```

を実行。出てきたIPアドレスをメモする。


PowerShellを管理者権限で起動する。

```PowerShell
netsh interface portproxy add v4tov4 listenaddress=* listenport=<ポート番号> connectaddress=<出てきたIPアドレス> connectport=<ポート番号>
```

そんな感じ。WindowsのIPアドレスを使ってアクセスできる。

## 8. trusted_domainsにIPアドレスを追加
```sh
docker cp nextcloud-app-1:/var/www/html/config/config.php ./config.php
```

上記を実行してconfig.phpを引っ張り出す。docker内部にvimとかがないっぽいので。

trusted_domainsの中にWindowsのIPアドレスを追加する。

編集したら以下を実行して差し戻す。

```sh
docker cp ./config.php nextcloud-app-1:/var/www/html/config/config.php
```

## 総括
以上。

6～8が特に躓く。

なお、なんか色々変になっちゃったな……と思った場合、

```sh
docker compose down --rmi all --volumes
```

でコンテナを止め、色々削除できる。っぽい。

参考リンク:
- [Windows11にwsl2+Dockerで自宅Nextcloud構築 - Qiita](https://qiita.com/jonxjon/items/be8d6ecdb4e7ce698d2a#52-port-forwarding%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B)
- [NextcloudをDockerで構築する手順 - Qiita](https://qiita.com/s_Pure/items/48d3823837e647b57091)
