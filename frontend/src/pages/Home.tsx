import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getArtists } from '../services/api'
import type { Artist } from '../types'
import { FaClipboardList } from 'react-icons/fa'
import { artistExtras } from '../utils/artistExtras'
import '../App.css'

export default function Home() {
  const [artists, setArtists] = useState<Artist[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    getArtists().then((data) => {
      const enriched = data.map((artist) => ({
        ...artist,
        hitSong: artistExtras[artist.name]?.hitSong ?? 'Famous song',
        previewUrl: artistExtras[artist.name]?.previewUrl ?? '',
      }))
      setArtists(enriched)
    })
  }, [])

  function formatPrice(price: number) {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="hero-section">
        <h1>Hire the best artists</h1>
        <p>Search and contract artists for your private events</p>

        <input
          className="search-input"
          placeholder="Search artists..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const found = artists.find(a =>
                a.name.toLowerCase().includes(
                  e.currentTarget.value.toLowerCase()
                )
              )
              if (found) {
                navigate('/contract', { state: { artist: found } })
              }
            }
          }}
        />
      </section>

      {/* TITLE */}
      <h2 className="section-title">Available artists</h2>

      {/* CAROUSEL */}
      <div className="carousel">
        <div className="carousel-track">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="artist-card"
              onClick={() =>
                navigate('/contract', { state: { artist } })
              }
            >
              {artist.image ? (
                <img src={artist.image} alt={artist.name} />
              ) : (
                <div className="placeholder">🎵</div>
              )}

              <h3>{artist.name}</h3>
              <p className="song">{artist.hitSong}</p>
              <span>{formatPrice(artist.price)}</span>

              {artist.previewUrl && (
                <a
                  href={artist.previewUrl}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="play-overlay"
                >
                  ▶
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FLOATING BUTTON */}
      <button
        className="floating-btn"
        onClick={() => navigate('/contracts')}
        title="View contracts"
      >
        <FaClipboardList size={22} />
      </button>
    </div>
  )
}
