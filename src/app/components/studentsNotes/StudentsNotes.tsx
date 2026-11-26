"use client";
import type { Notes } from "@/data/student";

import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import AddIcon from "@mui/icons-material/Add";
import OptionsMenu from "@/app/ui/optionsMenu/optionsmenu";

type StudentNotesProps = {
  notes: Notes[];
};

export default function StudentsNotes({ notes }: StudentNotesProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
            <NoteAltOutlinedIcon className="text-purple-600" />
          </div>

          <h2 className="text-lg font-semibold text-gray-900">Student Notes</h2>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
        >
          <AddIcon fontSize="small" />
          Add note
        </button>
      </div>

      {/* Notes list */}
      <div className="flex flex-col gap-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-4 rounded-xl bg-purple-50/80 px-4 py-3"
          >
            <p className="text-sm leading-5 text-gray-800">
              {note.description}
            </p>

            <span className="whitespace-nowrap text-xs text-gray-500">
              {note.date}
            </span>

           <OptionsMenu />
          </div>
        ))}
      </div>
    </div>
  );
}
