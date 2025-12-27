import { useState } from 'react'

interface Props {
  onSearch: (value: string) => void
}

export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState('')

  return (
    <div className="w-full max-w-xl">
      <input
        type="text"
        placeholder="Search artists..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          onSearch(e.target.value)
        }}
        className="
          w-full
          rounded-lg
          bg-zinc-900
          border
          border-zinc-700
          px-4
          py-3
          text-white
          placeholder-zinc-500
          focus:outline-none
          focus:border-red-500
          focus:ring-2
          focus:ring-red-500/30
          transition
        "
      />
    </div>
  )
}
