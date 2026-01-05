import React from 'react';

interface DashboardProps {
  user: any;
}

export default function Dashboard({ user }: DashboardProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-gray-600 dark:text-gray-400 text-sm">Total de Leads</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">0</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-gray-600 dark:text-gray-400 text-sm">Novos Hoje</p>
          <p className="text-3xl font-bold text-blue-500 mt-2">0</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-gray-600 dark:text-gray-400 text-sm">Conversões</p>
          <p className="text-3xl font-bold text-green-500 mt-2">0</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-gray-600 dark:text-gray-400 text-sm">Taxa de Conversão</p>
          <p className="text-3xl font-bold text-purple-500 mt-2">0%</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Bem-vindo, {user?.name}!
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Comece criando seus primeiros leads ou conectando suas contas Meta.
        </p>
      </div>
    </div>
  );
}
