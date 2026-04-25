import { useSuspenseQuery  } from "@tanstack/react-query";


export function Skeleton(){
    return <div>load...</div>;
}

function DashboardContent({ user, stats, feed }: {
  user: {id: number, name: string},
  stats: {teamId: number, score: number},
  feed: {posts: string[]}
}) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Score: {stats.score}</p>
      <ul>{feed.posts.map(p => <li key={p}>{p}</li>)}</ul>
    </div>
  );
}

const fetchUser = (): Promise<{id: number, name: string}> =>
  new Promise(resolve => 
    setTimeout(() => resolve({ id: 1, name: 'Иван' }), 1000)
  );

const fetchStats = (userId: number): Promise<{teamId: number, score: number}> =>
  new Promise(resolve => 
    setTimeout(() => resolve({ teamId: 42, score: 100 *userId }), 1000)
  );

const fetchFeed = (teamId: number): Promise<{posts: string[]}> =>
  new Promise(resolve => 
    setTimeout(() => resolve({
         posts: [`post 1 from team ${teamId}`, 'post 2']
         }), 1000)
  );

function Dashboard() {
// использовал реакт querry 5. useSuspenseQuery бросает промис пока данные грузятся

  const {data: user} = useSuspenseQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
  });

  const {data: stats} = useSuspenseQuery ({
    queryKey: ['stats'],
    queryFn: () => fetchStats(1),
  });


  const {data: feed} = useSuspenseQuery ({
    queryKey: ['feed'],
    queryFn: () => fetchFeed(42),
  });

  return <DashboardContent user={user} stats={stats} feed={feed} />;
}

export default Dashboard;
