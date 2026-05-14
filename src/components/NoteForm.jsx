function NoteForm({ onSave }) {
  return (
    <div className="flex flex-col gap-3 mb-8">
      <input
        type="text"
        id="title-input"
        placeholder="Title"
        className="border border-gray-300 rounded-lg px-4 py-2 outline-none"
      />
      <textarea
        id="content-input"
        placeholder="Write your note..."
        className="border border-gray-300 rounded-lg px-4 py-2 outline-none h-24 resize-y"
      />
      <button
        onClick={onSave}
        className="bg-black text-white px-4 py-2 rounded-lg self-start"
      >
        Save Note
      </button>
    </div>
  )
}

export default NoteForm