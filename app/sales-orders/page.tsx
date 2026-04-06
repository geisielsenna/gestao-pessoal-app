const orders = [
  { id: '#184', total: '$420', cost: '$310', profit: '$110' },
  { id: '#185', total: '$260', cost: '$190', profit: '$70' },
  { id: '#186', total: '$150', cost: '$105', profit: '$45' },
];

export default function SalesOrdersPage() {
  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold text-slate-900">Sales / Orders</h2>
        <p className="text-sm text-slate-500">Track sales and order profitability.</p>
      </header>

      <article className="card overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-slate-500">
            <tr>
              <th className="pb-3">Order</th>
              <th className="pb-3">Sale Total</th>
              <th className="pb-3">Cost</th>
              <th className="pb-3">Profit</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-slate-100">
                <td className="py-3 font-medium">{order.id}</td>
                <td className="py-3">{order.total}</td>
                <td className="py-3">{order.cost}</td>
                <td className="py-3 text-emerald-600">{order.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
