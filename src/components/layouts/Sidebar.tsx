import { useState } from 'react';
import { DashboardIcon } from './icons/DashboardIcon';
import { DocumentIcon } from './icons/DocumentIcon';
import { EquiposIcon } from './icons/EquiposIcon';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeView = useLocation().pathname.split('/')[1] || 'dashboard';

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'documents', label: 'Documentos', icon: <DocumentIcon /> },
    { id: 'equipos', label: 'Equipos', icon: <EquiposIcon /> }
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 aspect-square hover:bg-white hover:border hover:border-blue-800 hover:text-blue-800 hover:cursor-pointer fixed top-4 left-4 z-70 bg-primary text-white p-2 rounded-md shadow-lg"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-4 left-4 h-full w-64 bg-surface border-r z-60 border-background transform origin-top-left transition-transform duration-300 ease-in-out ${
  isOpen ? 'scale-100': 'scale-0'
}`}
      >
        <div className="h-16 flex items-center justify-center border-b border-secondary">
          <h1 className="text-xl font-bold text-text-primary">Gestion</h1>
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/${item.id}`}
                  className={`w-full flex items-center px-4 py-3 my-1 rounded-lg transition-colors duration-200 ${
                    activeView === item.id
                      ? 'bg-primary text-white'
                      : 'text-text-secondary hover:bg-secondary hover:text-text-primary'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="p-3 w-full">
        <Outlet />
      </main>
    </>
  );
};

export default Sidebar;