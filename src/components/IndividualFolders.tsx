
import React from "react";
import { Folder, FolderOpen, Users } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const userFolders = [
  { name: "Fabiana", color: "text-blue-500" },
  { name: "Nataniel", color: "text-purple-500" },
  { name: "Gisele", color: "text-emerald-500" },
  { name: "Marcos", color: "text-orange-500" },
  { name: "Rafael", color: "text-gray-400" },
];

const IndividualFolders = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Organize-se com Pastas Individuais</h2>
            <p className="text-xl text-gray-600 mb-6">
              Cada membro do grupo tem sua própria pasta dentro da plataforma, garantindo privacidade e organização para todos os usuários.
            </p>

            <div className="space-y-5 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Privacidade Garantida</h3>
                  <p className="text-gray-600">Seus projetos e conversas ficam apenas na sua pasta pessoal</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FolderOpen className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Organização Eficiente</h3>
                  <p className="text-gray-600">Mantenha seus projetos separados dos outros membros do grupo</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {userFolders.map((user, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="flex items-center py-2 px-3 bg-white rounded-full border shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                      <Folder className={`h-5 w-5 mr-2 ${user.color}`} />
                      <span>{user.name}</span>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Pasta de {user.name}</h4>
                        <p className="text-sm">
                          Todos os projetos e conversas de {user.name} ficam organizados em sua pasta pessoal, garantindo privacidade e organização.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative bg-gradient-to-br from-purple-100 to-azure-100 p-4 rounded-2xl shadow-lg">
              <img 
                src="/lovable-uploads/64b8a38e-96e0-45e0-b77b-dbf8cf933824.png" 
                alt="Interface do ChatGPT com pastas individuais para cada membro do grupo" 
                className="rounded-xl w-full shadow-md"
              />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full opacity-50 blur-xl -z-10"></div>
              <div className="absolute -top-3 -left-3 w-32 h-32 bg-gradient-to-br from-azure-300 to-azure-400 rounded-full opacity-50 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualFolders;
