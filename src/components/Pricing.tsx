
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="precos" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preços Acessíveis</h2>
          <p className="text-xl text-gray-600">
            Economize no ChatGPT Plus sem comprometer os recursos
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center max-w-5xl mx-auto">
          {/* Original Price Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex-1">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">ChatGPT Plus Individual</h3>
              <p className="text-gray-500 mb-4">Preço padrão da OpenAI</p>
              <div className="mb-4">
                <span className="text-4xl font-bold">R$125</span>
                <span className="text-gray-500">/mês</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">Acesso ao GPT-4</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">DALL·E 3</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">Navegação na web</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">Upload de arquivos</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">Assinatura Padrão</Button>
          </div>

          {/* Group Price Card */}
          <div className="bg-white rounded-xl border border-purple-200 shadow-lg p-8 flex-1 relative transform lg:scale-110 z-10">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className="bg-gradient-to-r from-purple-600 to-azure-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Recomendado
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">ChatGPT Plus em Grupo</h3>
              <p className="text-gray-500 mb-4">Economia de 72%</p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-purple-600">R$34.90</span>
                <span className="text-gray-500">/mês</span>
              </div>
              <p className="text-sm text-gray-500">por pessoa em grupo de 6</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-500 mr-2" />
                <span>Acesso ao GPT-4</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-500 mr-2" />
                <span>DALL·E 3</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-500 mr-2" />
                <span>Navegação na web</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-500 mr-2" />
                <span>Upload de arquivos</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-500 mr-2" />
                <span>Gerenciamento do grupo por nossa equipe</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-500 mr-2" />
                <span>Suporte prioritário</span>
              </li>
            </ul>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-azure-500 hover:from-purple-700 hover:to-azure-600">
              Participar Agora
            </Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto mt-12 border border-gray-100">
          <h3 className="font-bold text-lg mb-3">Garantia de Satisfação</h3>
          <p className="text-gray-600">
            Se você não estiver satisfeito com o serviço nos primeiros 7 dias, devolvemos seu dinheiro integralmente, sem complicações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
