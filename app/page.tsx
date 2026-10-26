import Image from "next/image";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Inventory Manager
      </h1>

      <p className="mt-4 text-gray-600">
        Sistema de administración de inventario.
      </p>
    </main>
  );
}
