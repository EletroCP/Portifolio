export const MainHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-red-500 w-full h-18 text-[19px]">
      <div className="flex gap-4 bg-green-500 font-4xl">
        <a>Sobre</a>
        <a>Desenvolvimento</a>
        <a>Projetos</a>
        <a>Contato</a>
      </div>
      <div className="flex gap-4 bg-blue-500">
        <p>BR</p>
        <p>EN</p>
        <a>Git</a>
        <a>Linked</a>
      </div>
    </header>
  );
};