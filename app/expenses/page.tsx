const expenses = [
  { description: 'Groceries', category: 'Food', value: '$120', date: '2026-04-02' },
  { description: 'Internet Bill', category: 'Utilities', value: '$75', date: '2026-04-03' },
  { description: 'Transportation', category: 'Mobility', value: '$48', date: '2026-04-04' },
];

export default function ExpensesPage() {
  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold text-slate-900">Expenses</h2>
        <p className="text-sm text-slate-500">Track your personal spending.</p>
      </header>

      <article className="card overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-slate-500">
            <tr>
              <th className="pb-3">Description</th>
              <th className="pb-3">Category</th>
              <th className="pb-3">Value</th>
              <th className="pb-3">Date</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {expenses.map((expense) => (
              <tr key={`${expense.description}-${expense.date}`} className="border-t border-slate-100">
                <td className="py-3">{expense.description}</td>
                <td className="py-3">{expense.category}</td>
                <td className="py-3">{expense.value}</td>
                <td className="py-3">{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
