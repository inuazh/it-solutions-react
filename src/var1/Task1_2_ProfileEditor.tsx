import { useState } from "react";

type ProfileEditorProps = {
    userId: number;
}

function ProfileEditor({ userId }: ProfileEditorProps) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
// баг был в том что чезе юзэфект поля надо прописывать в ручную, а через кей точно не забудешь вписать какое нибудь поле новое
// при использовании key элемент уничтожается и создается заново. стейт сбрасывается автоматически

  return (
    <form>
      <input name="name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
    </form>
  );
}


export default ProfileEditor;