import Link from 'next/link';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/expenses', label: 'Expenses' },
  { href: '/people-owe-me', label: 'People Owe Me' },
  { href: '/sales-orders', label: 'Sales / Orders' },
];

export function Sidebar() {
  return (
    <aside className="w-full border-b border-slate-200 bg-white p-4 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="mb-6">
        <h1 className="text-lg font-bold text-slate-900">Personal Manager</h1>
        <p className="text-sm text-slate-500">Simple PWA structure</p>
      </div>

      <nav className="grid gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
