'use client'

import {
  BellIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  ChartBarIcon,
  CheckCircleIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  WalletIcon,
} from '@heroicons/react/24/outline'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const nav = [
  ['ダッシュボード', HomeIcon], ['クライアント', UserGroupIcon], ['案件管理', BuildingOffice2Icon],
  ['商品管理', ShoppingBagIcon], ['投稿カレンダー', CalendarDaysIcon], ['承認待ち', CheckCircleIcon],
  ['分析', ChartBarIcon], ['請求', WalletIcon], ['設定', Cog6ToothIcon],
] as const

const trend = [
  { d: '5/13', posts: 70, approved: 40 }, { d: '5/14', posts: 130, approved: 90 },
  { d: '5/15', posts: 95, approved: 60 }, { d: '5/16', posts: 150, approved: 110 },
  { d: '5/17', posts: 115, approved: 85 }, { d: '5/18', posts: 190, approved: 130 },
  { d: '5/19', posts: 225, approved: 165 },
]

const kpis = [
  ['稼働クライアント', '28', '+4（前月比）'], ['総投稿数', '1,245', '+156（前月比）'],
  ['総IMP', '1,245,000', '+12.5%（前月比）'], ['URLクリック', '12,345', '+8.2%（前月比）'],
  ['承認待ち件数', '12', '+3（前日比）'],
]

const card = 'rounded-2xl border border-border bg-white shadow-soft'

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-appbg text-ink">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[220px_1fr]">
        <aside className="hidden border-r border-border bg-white p-4 lg:flex lg:flex-col">
          <div className="mb-8 px-3 pt-2 text-lg font-extrabold text-navy-900">AI口コミ運用OS</div>
          <nav className="space-y-1">
            {nav.map(([label, Icon], i) => (
              <button key={label} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold ${i === 0 ? 'bg-teal-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`}>
                <Icon className="h-5 w-5" /> {label}
                {label === '承認待ち' && <span className="ml-auto rounded-full bg-blue-600 px-2 py-0.5 text-[10px] text-white">12</span>}
              </button>
            ))}
          </nav>
          <div className="mt-auto space-y-2 border-t border-border pt-4 text-xs text-muted">
            <div>ヘルプ・サポート</div><div>利用ガイド</div>
          </div>
        </aside>

        <section className="min-w-0">
          <header className="flex items-center gap-3 border-b border-border bg-white px-4 py-3 md:px-6">
            <div className="font-extrabold text-navy-900 lg:hidden">AI口コミ運用OS</div>
            <select className="ml-auto max-w-[360px] rounded-xl border border-border bg-white px-3 py-2 text-sm font-semibold outline-none lg:ml-0">
              <option>株式会社AAA / 美容液Aキャンペーン</option>
            </select>
            <BellIcon className="ml-auto h-5 w-5 text-slate-500" />
            <div className="hidden text-right text-xs md:block"><div className="font-bold">山田 太郎</div><div className="text-muted">管理者</div></div>
          </header>

          <div className="space-y-4 p-4 md:p-6">
            <div className="grid grid-cols-2 gap-3 xl:grid-cols-5">
              {kpis.map(([label, value, delta]) => (
                <div key={label} className={`${card} p-4`}>
                  <div className="text-xs font-semibold text-muted">{label}</div>
                  <div className="mt-2 text-2xl font-extrabold text-navy-900">{value}</div>
                  <div className="mt-1 text-xs font-semibold text-emerald-600">{delta}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.45fr_.8fr_1fr]">
              <div className={`${card} p-4`}>
                <div className="mb-4 flex items-center justify-between"><h2 className="font-bold">投稿数推移</h2><span className="text-xs text-muted">直近7日間</span></div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trend}><XAxis dataKey="d" tick={{fontSize:11}} axisLine={false}/><YAxis tick={{fontSize:11}} axisLine={false}/><Tooltip/><Line type="monotone" dataKey="posts" stroke="#0C8B9A" strokeWidth={3} dot={{r:3}}/><Line type="monotone" dataKey="approved" stroke="#2563EB" strokeWidth={2} strokeDasharray="5 5" dot={false}/></LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className={`${card} p-4`}>
                <h2 className="font-bold">チャネル別成果</h2>
                <div className="mx-auto mt-6 flex h-36 w-36 items-center justify-center rounded-full border-[20px] border-teal-600 border-r-blue-400 border-b-cyan-300">
                  <div className="text-center"><div className="text-xs text-muted">総IMP</div><div className="text-sm font-extrabold">1,245,000</div></div>
                </div>
                <div className="mt-5 space-y-2 text-xs text-slate-600"><div>Instagram 40.2%</div><div>X 28.7%</div><div>Threads 17.3%</div><div>TikTok 9.8%</div></div>
              </div>

              <div className={`${card} p-4`}>
                <div className="flex justify-between"><h2 className="font-bold">反応の高い投稿一覧</h2><span className="text-xs text-blue-600">すべて見る</span></div>
                <div className="mt-4 space-y-4">
                  {['美容液Aの使用感レビュー ✨','毛穴が気にならなくなった！','リピート確定の美容液💧'].map((t,i)=>(
                    <div key={t} className="flex gap-3 border-b border-border pb-3 last:border-0"><div className="h-12 w-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200"/><div className="min-w-0 flex-1"><div className="truncate text-sm font-semibold">{t}</div><div className="mt-1 text-xs text-muted">{['Instagram','X','Threads'][i]} ・ 5/{18-i}</div></div><div className="text-right text-[11px] text-muted"><div>IMP {['85,432','62,314','58,211'][i]}</div><div>CTR {['4.2%','3.1%','3.8%'][i]}</div></div></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr_.85fr]">
              <div className={`${card} overflow-hidden`}>
                <div className="flex items-center justify-between p-4"><h2 className="font-bold">承認待ち一覧</h2><span className="text-xs text-blue-600">すべて見る</span></div>
                <div className="overflow-x-auto"><table className="w-full min-w-[640px] text-left text-xs"><thead className="bg-slate-50 text-muted"><tr><th className="p-3">投稿内容</th><th>プラットフォーム</th><th>作成者</th><th>作成日時</th><th></th></tr></thead><tbody>{['肌のトーンが明るくなった気がします✨','使い心地がとても良いです！','ベタつかず、しっとり感が続く','朝のメイク前にも使える◎'].map((t,i)=><tr key={t} className="border-t border-border"><td className="p-3 font-medium">{t}</td><td>{['Instagram','X','Threads','Instagram'][i]}</td><td>{i%2?'ライター鈴木':'AI生成'}</td><td>5/19 10:{30-i*7}</td><td><span className="rounded-full bg-amber-50 px-2 py-1 text-amber-700">中</span></td></tr>)}</tbody></table></div>
                <div className="flex items-center justify-between p-4"><button className="rounded-xl bg-teal-600 px-4 py-2 text-xs font-bold text-white">一括承認</button><span className="text-xs text-blue-600">一覧をエクスポート</span></div>
              </div>

              <div className={`${card} p-4`}><div className="flex justify-between"><h2 className="font-bold">今後の投稿予定</h2><span className="text-xs text-blue-600">すべて見る</span></div><div className="mt-4 grid grid-cols-5 gap-2 text-center text-xs">{['19 月','20 火','21 水','22 木','23 金'].map((d,i)=><div key={d} className={`rounded-xl p-2 ${i===0?'bg-blue-50 font-bold text-blue-700':'bg-slate-50'}`}>{d}</div>)}</div><div className="mt-4 space-y-3 text-xs">{['10:00  Instagram  週末のスキンケアルーティン','12:00  X  肌の調子が整う美容液Aの魅力','18:00  Threads  継続するほど実感した変化','20:00  TikTok  夜のスキンケアにおすすめ'].map(x=><div key={x} className="rounded-xl border border-border p-3">{x}</div>)}</div></div>

              <div className={`${card} p-4`}><h2 className="font-bold">クライアントサマリー</h2><div className="mt-5 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">AAA</div><div><div className="font-bold">株式会社AAA</div><div className="text-xs text-muted">美容液Aキャンペーン</div></div></div><div className="mt-5 space-y-4 text-xs"><div><div className="text-muted">契約期間</div><div className="mt-1 font-semibold">2025/04/01 ～ 2025/09/30</div></div><div><div className="text-muted">稼働状況</div><div className="mt-1 font-semibold text-emerald-600">● 順調</div></div><div><div className="text-muted">今月の予算消化率</div><div className="mt-2 h-2 rounded-full bg-slate-100"><div className="h-2 w-[62%] rounded-full bg-teal-600"/></div><div className="mt-1 font-semibold">62%</div></div></div><button className="mt-6 w-full rounded-xl border border-blue-200 py-2 text-xs font-bold text-blue-700">詳細を見る</button></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
