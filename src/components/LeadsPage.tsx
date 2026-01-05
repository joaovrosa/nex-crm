import React from 'react';

interface LeadsPageProps {
  user: any;
}

export default function LeadsPage({ user }: LeadsPageProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Leads
        </h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Novo Lead
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow text-center">
        <p className="text-gray-600 dark:text-gray-400">Nenhum lead ainda</p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          Clique em "+ Novo Lead" para começar
        </p>
      </div>
    </div>
  );
}
