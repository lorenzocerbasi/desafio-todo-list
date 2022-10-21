import { useState } from "react";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";
import { Tasks } from "./components/Tasks";

export default function App() {
  const [tasks, setTasks] = useState<any>([])

  return (
    <>
      <Header />
      <Searchbar tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}
