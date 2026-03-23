import Image from "next/image";
import Home from "./components/Home/Home";

async function getTeam() {
  const res = await fetch(`http://localhost:3000/api/users`, { next: { revalidate: 30 } });
  if (!res.ok) return [];
  return res.json();
}

export default async function HomePage() {
  const team = await getTeam();
  return <Home team={team} />;
}
