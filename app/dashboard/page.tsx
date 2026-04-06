const stats = [
  { label: 'Balance This Month', value: '$4,230' },
  { label: 'Pending Receivables', value: '$1,050' },
  { label: 'Expenses This Month', value: '$1,820' },
  { label: 'Sales Profit', value: '$780' },
];

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold text-slate-900">Dashboard</h2>
        <p className="text-sm text-slate-500">Overview of your personal finances.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="card">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{stat.value}</p>
          </article>
        ))}
      </div>

      <article className="card">
        <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• Grocery expense added - $120</li>
          <li>• Payment received from John - $300</li>
          <li>• New order #184 registered - profit $92</li>
        </ul>
      </article>
    </section>
  );
}
