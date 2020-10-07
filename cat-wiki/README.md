# CatWiki

学習用のサンプルプロジェクト  
元ネタのプロジェクトは [Dev Challenges | CatWiki](https://devchallenges.io/challenges/f4NJ53rcfgrP6sBMD2jt) を参考にしています。

## 概要

猫の品種を検索できるサービス

* 猫品種の検索は外部APIとして https://docs.thecatapi.com/ を利用する。
* フロントエンドから外部APIを参照せずに、サーバーサイドでサービス用のAPIを作成する。
* デザインは https://www.figma.com/file/6XLJCClikameMhnTZ3RKnM/CatWiki?node-id=0%3A1 を参照

## ユーザーストーリー
* ユーザーは猫の品種の検索ができる
* ユーザーは検索結果から品種を選択することで品種の詳細が見ることができる
* ユーザーはホームページで人気の検索された猫の品種一覧を見ることができる
* ユーザーは `see more` をクリックする事で人気の検索された猫の品種TOP10を見ることができる
* ユーザーは次の項目を含む品種の詳細を確認できる
    * description
    * temperament
    * origin
    * life span
    * adaptability
    * affection level
    * child friendly
    * grooming
    * inteligence
    * health issues
    * social needs
    * stranger friendly
* ユーザーは多くの猫の品種の写真を見ることができる
* ユーザーはモバイル端末上で検索ボタンを押すと検索画面がモーダルで表示できる
