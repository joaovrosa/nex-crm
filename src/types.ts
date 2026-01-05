export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: string;
  user_id: string;
  name: string;
  phone?: string;
  email?: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  tags?: string[];
  notes?: string;
  metadata?: any;
  last_interaction?: string;
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  lead_id: string;
  user_id?: string;
  content: string;
  sender: 'lead' | 'user' | 'bot';
  platform?: string;
  message_type: string;
  metadata?: any;
  read: boolean;
  created_at: string;
}

export interface ApiConfig {
  id: string;
  user_id: string;
  provider: string;
  access_token?: string;
  refresh_token?: string;
  expires_at?: string;
  config?: any;
  created_at: string;
  updated_at: string;
}

export interface Campaign {
  id: string;
  user_id: string;
  ad_account_id: string;
  name: string;
  status: string;
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number;
  cpc: number;
  roi: number;
  metadata?: any;
  last_synced: string;
  created_at: string;
  updated_at: string;
}

export interface WorkList {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  color: string;
  lead_ids: string[];
  created_at: string;
  updated_at: string;
}
