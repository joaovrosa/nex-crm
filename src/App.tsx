import React, { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser({
      id: '550e8400-e29b-41d4-a716-446655440000',
      email: 'joao@agoragrowth.com.br',
      name: 'João',
    });
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            🚀 ZapFlow
          </h1>
        </div>
        <nav className="p-4 space-y-2">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              currentPage === 'dashboard'
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            📊 Dashboard
          </button>
          <button
            onClick={() => setCurrentPage('leads')}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              currentPage === 'leads'
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            👥 Leads
          </button>
          <button
            onClick={() => setCurrentPage('inbox')}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              currentPage === 'inbox'
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            💬 Inbox
          </button>
          <button
            onClick={() => setCurrentPage('settings')}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              currentPage === 'settings'
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            ⚙️ Configurações
          </button>
        </nav>
      </div>

      <div className="flex-1 overflow-auto p-8">
        {currentPage === 'dashboard' && (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <p className="text-gray-600 dark:text-gray-400 text-sm">Total de Leads</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">0</p>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'leads' && (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Leads
            </h1>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow text-center">
              <p className="text-gray-600 dark:text-gray-400">Nenhum lead ainda</p>
            </div>
          </div>
        )}

        {currentPage === 'inbox' && (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              💬 Inbox
            </h1>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow text-center">
              <p className="text-gray-600 dark:text-gray-400">Nenhuma conversa</p>
            </div>
          </div>
        )}

        {currentPage === 'settings' && (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              ⚙️ Configurações
            </h1>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Perfil
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={user?.name || ''}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🔗 Integrações
              </h3>
              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Meta (Facebook Ads + WhatsApp)
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Conecte sua conta Meta para sincronizar leads
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        window.location.href = "https://www.facebook.com/v18.0/dialog/oauth?client_id=1389776572875133&redirect_uri=https://nex-crm-theta.vercel.app/auth/meta/callback&scope=leads_retrieval,whatsapp_business_messaging,business_management,ads_management&response_type=code&state=random_state_string";
                      }}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      Conectar Meta
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Evolution API
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Em breve
                      </p>
                    </div>
                    <button className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg cursor-not-allowed">
                      Em breve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
Adiciona botão Conectar Meta
