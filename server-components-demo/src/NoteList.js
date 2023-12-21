/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import SidebarNote from './SidebarNote';
import {searchNotes} from "./db.mock";

export default async function NoteList({searchText}) {
  const notes = searchNotes(searchText);

  // WARNING: This is for demo purposes only.
  // We don't encourage this in real apps. There are far safer ways to access
  // data in a real application!
  // const notes = (
  //   await db.query(
  //     `select * from notes where title ilike $1 order by id desc`,
  //     ['%' + searchText + '%']
  //   )
  // ).rows;

  // Now let's see how the Suspense boundary above lets us not block on this.
  await fetch('http://localhost:4000/sleep/3000');

  return notes.length > 0 ? (
    <ul className="notes-list">
      {notes.map((note) => (
        <li key={note.id}>
          <SidebarNote note={note} />
        </li>
      ))}
    </ul>
  ) : (
    <div className="notes-empty">
      {searchText
        ? `Couldn't find any notes titled "${searchText}".`
        : 'No notes created yet!'}{' '}
    </div>
  );
}
