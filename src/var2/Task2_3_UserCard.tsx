import { useEffect, useState } from "react";

type UserCardProps ={
    userId: number;
}

function UserCard({ userId }: UserCardProps) {
  const [user, setUser] = useState<{name: string} | null>(null);

  const fetchUser = (id: number): Promise<{name: string}> => 
    new Promise (resolve => 
        setTimeout (() => resolve ({name: `User ${id}` }), Math.random() * 2000)
    )
  useEffect(() => {
    let isActual = true
    fetchUser(userId).then((data) => {
        if (isActual) { setUser(data);}
    });

    // сделал так чтобы результат не просто сразу выводился на экран 
    // а если ответов несколько и они приходят в разном порядке, каждый из них проверяется на актуальность
    // тк флаг создан прям в юзэфект то мы просто игнорируем ответы от тех запросов которые уже не актуальны

    return() => {
        isActual = false;
    }
  }, [userId]);
  return <div>{user?.name}</div>;
}

export default UserCard