import { postJson } from './api';
import { SignupRequest } from '../types/api';

const SIGNUP_ENDPOINT = 'https://artjoms-spole.fly.dev/signup';

export async function signup(payload: SignupRequest): Promise<unknown> {
  return postJson<SignupRequest, unknown>(SIGNUP_ENDPOINT, payload);
}
