import { getDonaciones } from "@/app/actions/getDonaciones";
import { cn } from "@/lib/utils";

async function DashboardPage() {
  const messages = await getDonaciones();

  console.log(messages);

  return (
    <div className="flex justify-center flex-col items-center container p-10 bg-lime-300 min-h-screen">
        
        
        
        <h1 className="mb-14 underline text-3xl font-bold">Mensajes de donaciones</h1>
     
     
      <ul className="max-h-100 overflow-y-scroll p-10">
        {messages.map((m, index) => (
          <li key={index} className={cn("text-1xl text-black list-decimal w-full", {
            "font-extrabold" : m.mensaje
          })}>{m.mensaje ? m.mensaje : 'sin mensaje'}</li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardPage;
