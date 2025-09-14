export default function Sidebar() {
  return (
    <aside className="w-56 bg-white/80 border-r border-gray-100 p-6 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center text-white font-bold">
          H
        </div>
        <div>
          <div className="font-semibold">Hireism</div>
          <div className="text-xs text-gray-400">Dashboard</div>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 text-sm">
          <li className="px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-medium">
            Dashboard
          </li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-50">Recruitment</li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-50">Interview</li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-50">Onboarding</li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-50">Tasks</li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-50">Appointments</li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-50">Training</li>
        </ul>
      </nav>

      <div className="text-xs text-gray-400">© 2025 Hireism</div>
    </aside>
  );
}
