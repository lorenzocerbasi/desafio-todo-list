import Logo from "../../public/logo.png"

export function Header() {
  return (
    <header className="w-screen h-header bg-gray-700 flex items-center justify-center select-none">
      <img src={Logo} alt="Logotipo Todo" className="w-32" />
    </header>
  );
}