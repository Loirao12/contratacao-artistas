import { Link } from 'react-router-dom'
import { FaMusic, FaFileContract } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>
        <FaMusic style={{ marginRight: 8 }} />
        ArtistHire
      </h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contracts">
          <FaFileContract style={{ marginRight: 4 }} />
          Contracts
        </Link>
      </div>
    </nav>
  )
}
