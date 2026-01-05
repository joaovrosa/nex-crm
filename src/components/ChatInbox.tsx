import React from 'react';

interface ChatInboxProps {
  user: any;
}

export default function ChatInbox({ user }: ChatInboxProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        💬 Inbox
      </h1>

      <div className="grid grid-cols-3 gap-4 h-[calc(100vh-200px)]">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <input
              type="text"
              placeholder="Buscar conversas..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-gray-600 dark:text-gray-400">Nenhuma conversa</p>
          </div>
        </div>

        <div className="col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              Selecione uma conversa
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400">Nenhuma conversa selecionada</p>
          </div>
        </div>
      </div>
    </div>
  );
}
