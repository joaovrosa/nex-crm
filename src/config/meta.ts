export const META_CONFIG = {
    APP_ID: '1389776572875133',
    REDIRECT_URI: 'https://nex-crm-theta.vercel.app/auth/meta/callback',
    SCOPE: 'leads_retrieval,whatsapp_business_messaging,business_management,ads_management',
  };
  
  export const getMetaAuthUrl = () => {
    const params = new URLSearchParams({
      client_id: META_CONFIG.APP_ID,
      redirect_uri: META_CONFIG.REDIRECT_URI,
      scope: META_CONFIG.SCOPE,
      response_type: 'code',
      state: 'random_state_string',
    });
  
    return `https://www.facebook.com/v18.0/dialog/oauth?${params.toString()}`;
  };
  