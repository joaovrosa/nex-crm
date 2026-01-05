import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rqqeldwmbqwniezfskco.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_GAgBgfPXiBtFlxt2SA_YJw_fu5gcUdy';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Funções auxiliares para Leads
export const leadsService = {
  async getAll(userId: string) {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async create(lead: any) {
    const { data, error } = await supabase
      .from('leads')
      .insert([lead])
      .select();

    if (error) throw error;
    return data[0];
  },

  async update(id: string, updates: any) {
    const { data, error } = await supabase
      .from('leads')
      .update(updates)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data[0];
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('leads')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};

// Funções auxiliares para Mensagens
export const messagesService = {
  async getByLead(leadId: string) {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('lead_id', leadId)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data;
  },

  async create(message: any) {
    const { data, error } = await supabase
      .from('messages')
      .insert([message])
      .select();

    if (error) throw error;
    return data[0];
  },
};

// Funções auxiliares para Campanhas
export const campaignsService = {
  async getAll(userId: string) {
    const { data, error } = await supabase
      .from('campaigns')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async upsert(campaign: any) {
    const { data, error } = await supabase
      .from('campaigns')
      .upsert([campaign])
      .select();

    if (error) throw error;
    return data[0];
  },
};

// Funções auxiliares para API Configs
export const apiConfigService = {
  async get(userId: string, provider: string) {
    const { data, error } = await supabase
      .from('api_configs')
      .select('*')
      .eq('user_id', userId)
      .eq('provider', provider)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  async upsert(config: any) {
    const { data, error } = await supabase
      .from('api_configs')
      .upsert([config], { onConflict: 'user_id,provider' })
      .select();

    if (error) throw error;
    return data[0];
  },
};
