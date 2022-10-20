import { PlusCircle } from "phosphor-react"

export function Searchbar() {
  return (
    <>
      <div className="max-w-[736px] mx-auto flex">
        <input className="w-full"></input>
        <button className="flex text-gray-100 bg-blue-dark select-none">
          <span>Criar</span>
          <PlusCircle size={24} />
        </button>
      </div>
    </>
  );
}