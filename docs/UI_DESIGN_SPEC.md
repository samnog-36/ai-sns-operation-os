# UI DESIGN SPEC

## 1. Design lock

本システムのUIは、承認済みの管理画面モックアップを完成見本とする。
独自判断でのリデザインは禁止。

### 禁止事項
- 配色変更
- サイドバー構造変更
- KPIカード配置変更
- 角丸・余白感を大きく変える
- ダークモード化
- 派手なグラデーション追加
- 過剰なアニメーション
- AI判断による『より今風』な再設計

## 2. Visual tokens

### Colors
- Navy 900: `#06234A`
- Navy 700: `#123A68`
- Teal 600: `#0C8B9A`
- Teal 500: `#16A3AF`
- Green positive: `#18A66A`
- Orange warning: `#F5A623`
- Red danger: `#E65B5B`
- Background: `#F6F8FB`
- Surface: `#FFFFFF`
- Border: `#E5EAF1`
- Text primary: `#10223E`
- Text secondary: `#637083`

### Radius
- Small controls: 8px
- Cards: 12px
- Large panels: 16px

### Shadow
Use very subtle shadow only.
`0 4px 18px rgba(6,35,74,0.06)`

### Spacing
Base unit: 4px
Preferred card gap: 16px
Page section gap: 24px
Desktop outer padding: 24px
Mobile outer padding: 16px

## 3. Desktop layout

### Sidebar
- Width: 220px
- Fixed left navigation
- White background
- Active item: teal background with white text
- Icon + Japanese label

Menu order:
1. ダッシュボード
2. クライアント
3. 案件管理
4. 商品管理
5. 投稿カレンダー
6. 承認待ち
7. 分析
8. 請求
9. 設定

### Header
- Client / campaign selector
- Notification icon
- Current user
- Role label

### Dashboard KPI row
Five cards:
- 稼働クライアント
- 総投稿数
- 総IMP
- URLクリック
- 承認待ち件数

### Dashboard content
Top row:
- 投稿数推移
- チャネル別成果
- 反応の高い投稿一覧

Bottom row:
- 承認待ち一覧
- 今後の投稿予定
- クライアントサマリー

## 4. Mobile layout

- Bottom navigation or compact drawer allowed
- KPI cards become 2-column grid
- Charts become full width
- Approval actions remain sticky near bottom
- Approval detail must expose:
  - 投稿本文
  - media preview
  - platform
  - author
  - created date
  - 承認
  - 修正依頼
  - 予約投稿

## 5. Typography

Preferred Japanese font stack:
`Inter, Noto Sans JP, system-ui, sans-serif`

- Page title: 24-28px / 700
- Section title: 16-18px / 700
- KPI value: 28-32px / 700
- Body: 14px / 400-500
- Meta: 12px / 400

## 6. UX principles

1. クライアント別に情報が混ざらない
2. AI生成 → 人間承認 → 投稿の状態が一目で分かる
3. KPIをダッシュボードで即確認できる
4. 承認作業はスマホでも完結できる
5. 営業提案・レポートにも転用できる視認性
6. 一般ユーザーではなく広告代理店の運用担当者が迷わないことを優先

## 7. Component rules

Create reusable components for:
- Sidebar
- Header
- KPI Card
- Section Card
- Data Table
- Status Badge
- Chart Card
- Campaign Selector
- Approval Card
- Calendar Card
- Mobile Approval Actions

Do not introduce a new visual style without updating this document first.
