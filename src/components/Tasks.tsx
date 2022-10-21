import Clipboard from "../../public/clipboard.png"
import { Trash, Check } from "phosphor-react"

export function Tasks({ tasks, setTasks }: any) {

  const totalTasks = tasks?.length
  const completedTasks = tasks?.filter((i:any) => i?.status === true).length

  function handleToggleTaskCompletion(id: number) {
    const newTask = tasks.map((task:any) => task.id === id ? {
      ...task,
      status: !task.status
    } : task)
    setTasks(newTask)
  }

  function deleteTask(e: any) {
    setTasks(tasks?.filter((i: any) => i?.id !== e))
  }

  const tasksList = tasks && tasks?.map((i: any) => (
    <div className="w-full border-t border-gray-400 rounded-t-lg mb-3" key={i?.id}>
      <div className="bg-gray-500 border border-gray-400 rounded-lg flex items-center p-6 w-full h-auto">
        {i?.status === true
          ? <div
            className="rounded-full cursor-pointer min-w-[25px] min-h-[25px] border-[3px] bg-purple border-purple transition-all
          hover:border-blue-dark hover:bg-blue-dark hover:bg-opacity-20 flex items-center justify-center" onClick={() => handleToggleTaskCompletion(i?.id)}>
            <Check size={18} color="#FEFEFE" weight="bold" />
          </div>
          : <div
            className="rounded-full cursor-pointer min-w-[25px] min-h-[25px] border-[3px] border-blue transition-all
            hover:border-blue-dark hover:bg-blue-dark hover:bg-opacity-20" onClick={() => handleToggleTaskCompletion(i?.id)}
          />
        }
        <p className={`mx-3 text-gray-100 w-full break-all ${i?.status === true && 'line-through text-gray-300'}`} >
          {i?.description}
        </p>
        <button
          className="text-gray-300 flex justify-end rounded-md transition-all hover:text-danger hover:bg-gray-400 p-1.5"
          onClick={() => deleteTask(i?.id)}
        >
          <Trash size={27} />
        </button>
      </div>
    </div>
  ))

  return (
    <>
      <div className="max-w-[736px] mx-auto mt-8 px-4 lg:px-0">
        <div className="flex justify-between mb-6">
          <p className="text-blue text-sm lg:text-base font-bold flex items-center select-none hover:cursor-pointer">
            Tarefas criadas
            <span className="bg-gray-400 text-gray-200 ml-2 rounded-full flex items-center px-3 py-0.5">{totalTasks}</span>
          </p>
          <p className="text-purple text-sm lg:text-base font-bold flex items-center select-none hover:cursor-pointer">
            Concluídas
            <span className="bg-gray-400 text-gray-200 ml-2 rounded-full flex items-center px-3 py-0.5">{completedTasks + " de " + totalTasks}</span>
          </p>
        </div>
        {tasks?.length === 0
          ? <div className="mt-16 flex flex-col items-center">
            <img src={Clipboard} className="select-none mb-4" />
            <p className="font-bold text-gray-300">Você ainda não tem tarefas cadastradas</p>
            <p className="text-gray-300">Crie tarefas e organize seus itens a fazer</p>
          </div>
          : <>{tasksList}</>
        }
      </div>
    </>
  );
}