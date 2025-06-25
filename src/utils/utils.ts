import { ACCESS_TOKEN_STORAGE_KEY } from '@/constants'

export async function setSession(accessToken?: string) {
  if (accessToken) {
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken)
  }
}

export async function removeSession() {
  localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY)
}

export async function getSession() {
  return localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
}
