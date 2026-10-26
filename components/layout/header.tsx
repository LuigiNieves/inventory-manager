
export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Panel de administración
        </h1>

        <p className="text-sm text-gray-500">
          Gestión y control de inventario
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">
          Administrador
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
          A
        </div>
      </div>
    </header>
  );
}
