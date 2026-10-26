import { getProducts } from "@/services/products.service";
import Link from "next/link";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Productos</h1>

          <p className="mt-2 text-black-600">
            Administra los productos del inventario.
          </p>
        </div>

        <Link
          href="/products"
          className="rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
        >
          Nuevo producto
        </Link>
      </div>

      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b bg-gray-50 text-gray-600">
            <tr>
              <th className="px-6 py-4">SKU</th>
              <th className="px-6 py-4">Producto</th>
              <th className="px-6 py-4">Precio de venta</th>
              <th className="px-6 py-4">Stock</th>
              <th className="px-6 py-4">Estado</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-blue-100">
            {products.map((product) => {
              const lowStock = product.stock <= product.minStock;

              return (
                <tr key={product.id}>
                  <td className="px-6 py-4 font-medium text-gray-600">
                    {product.sku}
                  </td>

                  <td className="px-6 py-4 text-gray-600">{product.name}</td>

                  <td className="px-6 py-4 text-gray-600">
                    {formatCurrency(product.salePrice)}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={
                        lowStock
                          ? "font-semibold text-red-600"
                          : "text-gray-700"
                      }
                    >
                      {product.stock} unidades
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={
                        product.status === "active"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {product.status === "active" ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                </tr>
              );
            })}

            {products.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  No hay productos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
