import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import type { Artist } from '../types'
// import '../index.css'
import '../App.css'


interface LocationState {
  artist: Artist
}

export default function ContractForm() {
  const location = useLocation()
  const navigate = useNavigate()
  const { artist } = location.state as LocationState

  const [client, setClient] = useState('')
  const [date, setDate] = useState('')
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('http://localhost:8000/api/contracts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: client,
          artist_name: artist.name,
          fee: artist.price ?? 0,
          event_date: date,
          address,
        }),
      })

      if (!response.ok) throw new Error()

      navigate('/success')
    } catch {
      alert('Error creating contract')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-full max-w-md space-y-5"
      >
        <h1 className="text-2xl font-bold text-red-600 text-center">
          Contract {artist.name}
        </h1>

        <input
          className="input"
          placeholder="Your full name"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          required
        />

        <input
          className="input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <input
          className="input"
          placeholder="Event address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-red-600 w-full py-3 rounded-md font-semibold hover:opacity-90 disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Confirm contract'}
        </button>
      </form>
    </div>
  )
}
