import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getContracts } from '../services/api'
// import '../index.css'
import '../App.css'

interface Contract {
  id: number
  name: string
  artist_name: string
  event_date: string
}

export default function ContractsList() {
  const [contracts, setContracts] = useState<Contract[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    getContracts().then(setContracts)
  }, [])

  return (
    <div className="container page">
      <div className="hero">
        <h1>Your contracts</h1>
        <p>Manage and review all submitted artist contracts</p>
      </div>

      {!contracts.length && (
        <p className="empty">No contracts yet</p>
      )}

      <ul className="contracts-list">
        {contracts.map((c) => (
          <li
            key={c.id}
            className="contract-item"
            onClick={() =>
              navigate('/contract', {
                state: {
                  artist: {
                    name: c.artist_name,
                    price: 0,
                  },
                },
              })
            }
          >
            <strong>{c.artist_name}</strong>

            <div>
              <span>{c.name}</span> — {c.event_date}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
