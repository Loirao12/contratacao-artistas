import { useNavigate } from 'react-router-dom'
// import '../index.css'
import '../App.css'


export default function Success() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Contract created 🎉
        </h1>

        <p className="text-zinc-400 mb-8">
          Your artist has been successfully contracted.
          <br />
          We wish you an amazing event!
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex-1 bg-zinc-800 py-3 rounded-md hover:bg-zinc-700 transition"
          >
            Hire another
          </button>

          <button
            onClick={() => navigate('/contracts')}
            className="flex-1 bg-red-600 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            View contracts
          </button>
        </div>
      </div>
    </div>
  )
}
