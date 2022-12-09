import { groq } from 'next-sanity';

export const settingsQuery = groq`*[_type == "settings"]`;

export interface Settings {
  title?: string;
  terms?: any;
  privacy?: any;
}