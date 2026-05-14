import { useState, useEffect } from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'

function App() {
  const [notes, setNotes] = useState([])
  const [editingNote, setEditingNote] = useState(null)
  const API_URL = import.meta.env.VITE_API_URL
  useEffect(() => {
    fetchNotes()
  }, [])

  async function fetchNotes() {
    const response = await fetch('${API_URL}/api/notes')
    const data = await response.json()
    setNotes(data)
  }

  async function createNote(title, content) {
    if (!title) return alert('Title is required')
    await fetch('${API_URL}/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    })
    fetchNotes()
  }

  async function deleteNote(id) {
    await fetch(`${API_URL}/api/notes/${id}`, {
      method: 'DELETE'
    })
    fetchNotes()
  }

  async function updateNote(id, title, content) {
    await fetch(`${API_URL}/api/notes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    })
    setEditingNote(null)
    fetchNotes()
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">My Notes</h1>
      <NoteForm onSave={createNote} />
      <NoteList
        notes={notes}
        onDelete={deleteNote}
        onEdit={(note) => setEditingNote(note)}
      />
    </div>
  )
}

export default App