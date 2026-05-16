import { useState } from 'react'

function NoteForm({ onSave, initialTitle = '', initialContent = '' }) {
  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState(initialContent)

  return (
    <div className="flex flex-col gap-3 mb-8">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 outline-none"
      />
      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 outline-none h-24 resize-y"
      />
      <button
        onClick={() => onSave(title, content)}
        className="bg-black text-white px-4 py-2 rounded-lg self-start cursor-pointer"
      >
        Save Note
      </button>
    </div>
  )
}

export default NoteForm