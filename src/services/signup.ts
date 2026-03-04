import { api } from './api';
import { SignupRequest, SignupResponse } from '../types/api';

export async function signup(payload: SignupRequest): Promise<SignupResponse> {
  return api.post<SignupResponse>('/signup', payload);
}
