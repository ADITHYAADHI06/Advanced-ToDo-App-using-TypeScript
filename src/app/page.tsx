import Addtodo from "@/components/Addtodo";
import NavBar from "@/components/NavBar";
import Tasks from "@/components/Tasks";

export default function Home() {
  return (
    <main>
      <h2>TODO NEXT + TYPESCRIPT </h2>
      <NavBar />
      <Addtodo />
      <Tasks />
    </main>
  )
}
