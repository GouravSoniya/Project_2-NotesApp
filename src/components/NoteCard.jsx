function NoteCard({ note, onDelete, onEdit }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      <h3 className="font-semibold text-lg mb-1">{note.title}</h3>
      <p className="text-gray-600 mb-3">{note.content}</p>
      <small className="text-gray-400 block mb-3">
        {new Date(note.created_at).toLocaleString()}
      </small>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(note)}
          className="bg-black text-white px-3 py-1 rounded text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="bg-red-500 text-white px-3 py-1 rounded text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default NoteCard