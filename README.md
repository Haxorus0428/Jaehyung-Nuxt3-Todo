<div align="center">
<h2>[2024] Nuxt3を用いたTODO管理アプリ</h2>
日々のタスクを管理し、簡単なドラッグ＆ドロップで整理できるシンプルなToDoアプリです。
</div>

## 目次
- [概要](#概要)
  - [プロジェクト説明](#プロジェクト説明)
  - [スクリーンショット](#スクリーンショット)
- [使用技術](#使用技術)
- [インストール方法](#インストール方法)
  - [前提条件](#前提条件)
  - [インストール手順](#インストール手順)
  - [プロジェクト実行](#プロジェクト実行)
- [機能の使い方](#機能の使い方)
- [ディレクトリ構成](#ディレクトリ構成)

---

## 概要

### プロジェクト説明
このプロジェクトは、Nuxt3、Vue、TypeScriptを使用して開発されたタスク管理アプリです。タスクの追加、削除、ドラッグ＆ドロップによる並び替えが可能で、BowerとjQueryを使用してドラッグ機能を実装しています。また、Piniaで状態管理を行い、簡単で直感的なインターフェースを提供しています。

### スクリーンショット

|![image](./assets/images/screenshot1.png)|![image](./assets/images/screenshot2.png)|
|:---:|:---:|
|タスク管理画面|完了済みタスク画面|

## 使用技術

- HTML5
- CSS3
- jQuery
- TypeScript
- Vue.js
- Nuxt.js 3
- Pinia (状態管理)
- Bower (依存管理)

---

## インストール方法

### 前提条件

このプロジェクトを実行するには、以下のソフトウェアが必要です:
- **Node.js** (v14以降): [Download](https://nodejs.org/)
- **npm** または **yarn**
- **Bower**（依存関係の管理用）を以下のコマンドでインストールしてください:

  ```bash
  npm install -g bower

### インストール手順

1. このリポジトリをクローンします:

git clone https://github.com/yourusername/Jaehyung-Nuxt3-Todo.git

cd Jaehyung-Nuxt3-Todo

2. npmとBowerを使用して依存関係をインストールします:

npm install
bower install

### プロジェクト実行

開発用サーバーを開始するには以下のコマンドを使用します:

npm run dev
アプリケーションは http://localhost:3000 でアクセス可能です。

## 機能の使い方

1. タスク管理: タスクの追加、削除、並び替えが可能です。jQueryのdraggableおよびsortable機能を使用して、ドラッグ＆ドロップで簡単に整理できます。
2. レスポンシブUI: Vue.jsとCSSを使用し、快適に操作できるインターフェースを実現しています。（優先度が設定されており、作成時間も表示されています）
3. 状態管理: Piniaを使用してアプリケーションの状態を効率的に管理しています。

## ディレクトリ構成
<<<<<<< HEAD

|![image](./assets/images/screenshot3.png)|
|:---:|
|ディレクトリ構成|
=======
├── assets                # 정적 파일
│   ├── css
│   │   └── app.css       # 메인 CSS 파일
│   └── images            # 이미지 파일
│       ├── check.svg     # 체크 아이콘
│       ├── screenshot1.png  # 스크린샷 1
│       ├── screenshot2.png  # 스크린샷 2
│       ├── trash.svg     # 휴지통 아이콘
│       └── undo.svg      # 실행 취소 아이콘
├── components            # Vue 컴포넌트 파일
│   ├── AddTask.vue       # 할 일 추가 컴포넌트
│   ├── Header.vue        # 헤더 컴포넌트
│   └── Task.vue          # 개별 할 일 컴포넌트
├── layouts               # 레이아웃 파일
│   └── main.vue          # 메인 레이아웃
├── pages                 # 페이지 파일
│   ├── done.vue          # 완료된 작업 페이지
│   └── index.vue         # 메인 할 일 페이지
├── plugins               # 플러그인 설정 파일
│   ├── bootstrap.client.js  # Bootstrap 설정
│   └── jquery.client.js     # jQuery 설정
├── public                # 공개용 정적 파일
│   └── favicon.png       # 파비콘 이미지
├── store                 # 상태 관리 파일
│   ├── todo.ts           # 할 일 상태 관리
│   └── user.ts           # 사용자 상태 관리
├── .gitignore            # Git 무시 파일 설정
├── app.vue               # 루트 Vue 컴포넌트
├── nuxt.config.ts        # Nuxt 설정 파일
├── package.json          # npm 의존성 설정
├── README.md             # 프로젝트 개요 및 설치 방법
└── tsconfig.json         # TypeScript 설정 파일
>>>>>>> f55a8c36e51e8081699b39d65cdc141455c91cdc

