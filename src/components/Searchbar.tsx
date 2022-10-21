import { PlusCircle } from "phosphor-react"
import { useState } from "react";

export function Searchbar({ setTasks, statusTask }: any) {

  const [newTextTask, setNewTextTask] = useState<any>()

  let newKey = Math.random() * 1000000

  let taskAdd = { description: newTextTask, status: false, id: newKey.toFixed(0) }

  function newTask() {
    setTasks((prevTasks: any) => [...prevTasks, taskAdd])
  }

  return (
    <>
      <div className="max-w-[736px] mx-auto flex relative bottom-8 px-5 lg:px-0">
        <input
          className="w-full bg-gray-500 border border-gray-700 rounded-lg focus:outline-none py-2 px-4 text-gray-100 mr-2"
          placeholder="Adicione uma nova tarefa" value={newTextTask} onChange={(e: any) => setNewTextTask(e?.target?.value)} />
        <button
          className="flex text-gray-100 bg-blue-dark select-none rounded-lg px-4 py-5 relative transition-all hover:bg-blue"
          onClick={newTask}
        >
          <span className="mr-1 font-bold">Criar</span>
          <PlusCircle size={22} weight="bold" />
        </button>
      </div>
    </>
  );
}