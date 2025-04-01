
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              ChatGPT Plus em <span className="gradient-text">Grupo</span> por uma Fração do Preço
            </h1>
            <p className="text-xl text-gray-600">
              Divida o acesso premium ao ChatGPT com até 6 pessoas e pague muito menos. Acesso ilimitado a todos os recursos por menos de R$12 por mês por pessoa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-gradient-to-r from-purple-600 to-azure-500 hover:from-purple-700 hover:to-azure-600 text-lg px-8 py-6">
                Participar Agora
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6">
                Saiba Mais
              </Button>
            </div>
            <div className="flex items-center text-gray-600 pt-2">
              <Users className="h-5 w-5 text-purple-500 mr-2" />
              <span>Mais de 1,000 pessoas economizando com nossos grupos</span>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-gradient-to-br from-purple-100 to-azure-100 rounded-2xl p-4 md:p-8">
              <div className="animate-float bg-white rounded-xl shadow-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-purple-600 to-azure-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                      GPT
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold">ChatGPT Plus</h3>
                      <p className="text-sm text-gray-500">Acesso compartilhado</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Ativo
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-600">Preço original</span>
                    <span className="font-medium">R$97/mês</span>
                  </div>
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-600">Preço em grupo (6 pessoas)</span>
                    <span className="font-bold text-purple-600">R$16/mês</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Economia</span>
                    <span className="font-bold text-green-600">83%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-azure-300 to-azure-400 rounded-full opacity-70 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
