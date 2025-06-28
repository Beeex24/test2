// src/types/emailjs.ts

export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface PersonalFormData {
  form_type: '個人のお客様';
  to_email: string;
  user_name: string;
  user_email: string;
  message: string;
  send_date: string;
}

export interface CorporateFormData {
  form_type: '法人・団体のお客様';
  to_email: string;
  company_name: string;
  contact_person: string;
  corporate_email: string;
  corporate_message: string;
  send_date: string;
}

export type FormData = PersonalFormData | CorporateFormData;

export interface EmailJSResponse {
  status: number;
  text: string;
}

export interface EmailJSError {
  status?: number;
  text?: string;
  message?: string;
}