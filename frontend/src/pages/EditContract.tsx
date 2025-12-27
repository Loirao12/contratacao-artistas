import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import '../index.css'
import '../App.css'

export default function EditContract() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const [name, setName] = useState(state.name)
  const [eventDate, setEventDate] = useState(state.event_date)
  const [address, setAddress] = useState(state.address ?? '')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    await fetch(`http://localhost:8000/api/contracts/${state.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        event_date: eventDate,
        address,
      }),
    })

    navigate('/contracts')
  }

  return (
    <div className="container page">
      <h1>Edit Contract</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Client name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label>Event date</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>

        <div>
          <label>Address</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        <button disabled={loading}>
          {loading ? 'Saving...' : 'Save changes'}
        </button>
      </form>
    </div>
  )
}
