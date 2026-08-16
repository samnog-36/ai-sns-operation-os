# Requirements

## Product scope

広告代理店が、顧客企業・商品/サービス・キャンペーン・SNSアカウント・投稿案・承認・投稿結果・レポートを一元管理するWebアプリ。

## Core workflow

顧客登録 → 案件登録 → 商品/訴求登録 → AI投稿案生成 → 人間チェック → 承認 → 予約/投稿 → 結果取得 → レポート化

## User roles

### 管理者
全機能、ユーザー、権限、設定、請求を管理。

### 運用担当
案件管理、投稿案生成、承認依頼、投稿予約、分析閲覧。

### 営業
顧客・案件・レポート閲覧、提案用途の数値確認。

### クライアント閲覧者
自社案件、投稿実績、レポートのみ閲覧。

## MVP features

### Dashboard
- 稼働クライアント数
- 総投稿数
- 総IMP
- URLクリック
- 承認待ち件数
- 投稿数推移
- チャネル別成果
- 高反応投稿
- 承認待ち一覧
- 投稿予定
- クライアントサマリー

### Client management
- 企業情報
- 担当者
- 契約期間
- 月額予算
- ステータス

### Campaign management
- キャンペーン名
- 目的
- 開始/終了日
- 対象商品
- KPI
- 投稿本数目標
- 対象SNS

### Product / Service
- 商品名
- URL
- 画像
- 特徴
- 訴求ポイント
- NG表現
- 必須表記

### SNS accounts
- Platform
- Account display name
- Status
- Linked client/campaign
- Auth state

### AI post generation
- Platform-specific generation
- Tone/persona
- Campaign/product context
- Multiple draft variations
- PR disclosure enforcement
- NG expression check

### Approval
- Draft → review requested → approved / revision requested / rejected
- Approver
- Timestamp
- Revision history
- Audit log

### Scheduling / publishing
- Date/time
- Platform
- Account
- Post content
- Media
- Status

### Analytics
- Impressions
- Likes
- Replies/comments
- Reposts/shares
- Clicks
- Engagement rate
- Per-client / per-campaign / per-account / per-post views

### Reports
- Monthly summary
- Campaign summary
- Top posts
- KPI progress
- PDF/CSV export later

## Compliance

- PR/広告表記チェック
- NGワード辞書
- 誇大・不当表現チェック
- 承認ログ保存
- ステルスマーケティング対策

## Non-functional requirements

- Responsive desktop/mobile
- Japanese-first UI
- Auditability
- Secure secret handling
- Role based access control
- No credentials in Git
- API failures must be visible and retryable

## Out of initial MVP

- Fully autonomous posting without human approval
- Account farming / platform rule evasion
- Automated creation of SNS accounts
- Automated circumvention of rate limits or platform enforcement
