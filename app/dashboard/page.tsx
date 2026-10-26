
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

const metrics = [
  {
    title: "Productos activos",
    value: "128",
    description: "Productos registrados",
  },
  {
    title: "Unidades en inventario",
    value: "1.540",
    description: "Existencias totales",
  },
  {
    title: "Stock bajo",
    value: "8",
    description: "Productos por reabastecer",
  },
  {
    title: "Agotados",
    value: "3",
    description: "Productos sin existencias",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <Header />

        <main className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Dashboard
            </h2>

            <p className="mt-2 text-gray-600">
              Resumen general de tu inventario.
            </p>
          </div>

          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <article
                key={metric.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-medium text-gray-500">
                  {metric.title}
                </p>

                <p className="mt-3 text-3xl font-bold text-gray-900">
                  {metric.value}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {metric.description}
                </p>
              </article>
            ))}
          </section>

          <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Actividad reciente
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Aquí mostraremos las entradas, salidas y ajustes
              de inventario.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
