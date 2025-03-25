// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex items-center justify-between bg-red-500 w-full h-36">
      <div className="flex gap-4 bg-green-500">
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

      <div></div>
      <section>
        <div>
          <image></image>
        </div>
        <div>
          <h2></h2>
        </div>
        <div>
          <p></p>
        </div>
      </section>
      <article>
        <h1></h1>
        <p></p>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </article>
      <article>

      </article>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>Olá mundo!</p>
        <b>Bora Codar</b>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
