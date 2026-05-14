import NoteCard from './NoteCard'

function NoteList({ notes, onDelete, onEdit }) {
  return (
    <div>
      {notes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default NoteList