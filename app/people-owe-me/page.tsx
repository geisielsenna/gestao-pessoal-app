const receivables = [
  { person: 'John Carter', amount: '$300', dueDate: '2026-04-10', status: 'Pending' },
  { person: 'Maria Silva', amount: '$180', dueDate: '2026-04-12', status: 'Pending' },
  { person: 'Alex Kim', amount: '$90', dueDate: '2026-04-01', status: 'Overdue' },
];

export default function PeopleOweMePage() {
  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold text-slate-900">People Who Owe Me Money</h2>
        <p className="text-sm text-slate-500">Manage pending payments from contacts.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {receivables.map((item) => (
          <article key={item.person} className="card">
            <p className="text-lg font-semibold text-slate-900">{item.person}</p>
            <p className="mt-2 text-sm text-slate-500">Amount: {item.amount}</p>
            <p className="text-sm text-slate-500">Due date: {item.dueDate}</p>
            <span className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {item.status}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
