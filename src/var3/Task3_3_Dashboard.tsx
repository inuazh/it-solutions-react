import { useEffect, useState } from "react";

// Текущая реализация — waterfall
function Dashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [feed, setFeed] = useState(null);
  
  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  useEffect(() => {
    if (!user) return; // ждём user!
    fetchStats(user.id).then(setStats);
  }, [user]);

  useEffect(() => {
    if (!stats) return; // ждём stats!
    fetchFeed(stats.teamId).then(setFeed);
  }, [stats]);

  if (!user || !stats || !feed) return <Skeleton />;
  return <DashboardContent user={user} stats={stats} feed={feed} />;
}

export default Dashboard;
