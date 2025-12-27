import { useNavigate } from 'react-router-dom'

export default function FloatingContracts() {
  const navigate = useNavigate()

  return (
    <button
      className="floating-btn"
      onClick={() => navigate('/contracts')}
    >
      📄
    </button>
  )
}
