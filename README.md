# AI SNS Operation OS

広告代理店向けのAI SNS運用管理システム。

## Product goal

複数クライアント・複数案件・複数SNSアカウントを一元管理し、AI投稿案生成 → 人間承認 → 予約投稿 → 成果取得 → レポートまでを一つのOSで運用する。

## Design principle

このプロジェクトでは、承認済みUIモックアップを完成見本として扱う。

- UIを独自判断で再デザインしない
- 白背景 + ネイビー + ティールの配色を維持する
- カード、余白、角丸、KPI配置、サイドバー構成を維持する
- PC / Mobileの両方で同じデザインシステムを利用する
- 機能追加時も既存の情報設計を崩さない

詳細は `docs/UI_DESIGN_SPEC.md` を参照。

## Initial stack

- Next.js
- TypeScript
- Tailwind CSS
- Recharts
- PostgreSQL
- Prisma
- OpenAI API
- X API
- Threads API

## Main screens

1. Dashboard
2. Clients
3. Campaigns
4. Products / Services
5. Post Calendar
6. Approval Queue
7. Analytics
8. Billing
9. Settings
10. Mobile Approval

## Security

このリポジトリにはAPIキー、アクセストークン、顧客個人情報、SNS認証情報をコミットしないこと。
