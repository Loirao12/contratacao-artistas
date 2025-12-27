import ArtistCard from './ArtistCard'
import type { Artist } from '../types'

interface Props {
  artists: Artist[]
}

export default function ArtistGrid({ artists }: Props) {
  if (!artists.length) return null

  return (
    <div className="carousel">
      {artists.map((artist) => (
        <ArtistCard key={artist.spotify_id} artist={artist} />
      ))}
    </div>
  )
}

