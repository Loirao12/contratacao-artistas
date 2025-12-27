import { useNavigate } from 'react-router-dom'
import type { Artist } from '../types'

interface Props {
  artist: Artist
}

export default function ArtistCard({ artist }: Props) {
  const navigate = useNavigate()

  function handleSelect() {
    navigate('/contract', {
      state: { artist },
    })
  }

 return (
  <div className="artist-card" onClick={handleSelect}>
    {artist.image_url ? (
      <img src={artist.image_url} alt={artist.name} />
    ) : (
      <div className="placeholder">🎤</div>
    )}

    <h3>{artist.name}</h3>
    {artist.price && <span>${artist.price}</span>}
  </div>
)

}
