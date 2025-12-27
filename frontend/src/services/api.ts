import type { Artist } from '../types/Artist'
// import ContractsList from '../pages/ContractsList'



const API_URL = 'http://localhost:8000/api'

/**
 * Fetch artists from backend search endpoint
 */


export async function searchArtists(name?: string): Promise<Artist[]> {
  const url = name
    ? `${API_URL}/artists/search?name=${name}`
    : `${API_URL}/artists`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch artists')
  }

  return response.json()
}

export async function getArtists(): Promise<Artist[]> {
  const response = await fetch(`${API_URL}/artists`)

  if (!response.ok) {
    throw new Error('Failed to fetch artists')
  }

  return response.json()
}

export async function getContracts() {
  const response = await fetch(`${API_URL}/contracts`)

  if (!response.ok) {
    throw new Error('Failed to fetch contracts')
  }

  return response.json()
}
