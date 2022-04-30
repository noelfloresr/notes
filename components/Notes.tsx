import Link from "next/link";
import { FC } from "react";
import { Note } from "../src/API";
import CustomCard from "./Card";

interface NotesProps {
  notes: Note[];
  onDeleteNoteFromList: (id: string) => void;
}

const Notes: FC<NotesProps> = ({ notes, onDeleteNoteFromList }) => {
  const onDelete = async (id: string) => {
    onDeleteNoteFromList(id);
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">{"Notes"}</h1>

      <div className="flex justify-end">
        <Link href="/notes/create">
          <a className="inline-block p-4 bg-blue-900 text-white">Create Note</a>
        </Link>
      </div>
      {!notes.length && <h2>There is no notes to show.</h2>}

      {notes.length && (
        <div className="flex flex-wrap">
          {notes.map((note: Note) => (
            <div className="m-2" key={note.id}>
              <CustomCard note={note} onDelete={onDelete} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notes;
