
import { CircleCheck } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Inscreva-se no nosso serviço",
    description: "Preencha o formulário de inscrição e escolha o plano de compartilhamento do ChatGPT Plus.",
  },
  {
    number: 2,
    title: "Faça o pagamento da sua cota",
    description: "Pague apenas a sua parte da assinatura através dos nossos métodos de pagamento seguros.",
  },
  {
    number: 3,
    title: "Receba suas credenciais",
    description: "Após a confirmação do pagamento, você receberá os dados de acesso ao ChatGPT Plus.",
  },
  {
    number: 4,
    title: "Aproveite o ChatGPT Plus",
    description: "Desfrute de todos os recursos premium do ChatGPT Plus por uma fração do preço original.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-xl text-gray-600">
            Um processo simples para você começar a economizar imediatamente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gradient-to-br from-purple-50 to-azure-50 p-6 md:p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">O que está incluído:</h3>
            <ul className="space-y-4">
              {[
                "Acesso completo ao ChatGPT Plus",
                "Uso do GPT-4 ilimitado",
                "Geração de imagens com DALL·E 3",
                "Navegação na web para informações atualizadas",
                "Suporte a upload de arquivos e análise",
                "Criação de plugins personalizados",
                "Modo Avançado de Dados (Advanced Data Analysis)",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CircleCheck className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-azure-500 flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                    {step.number !== steps.length && (
                      <div className="h-full w-0.5 bg-gray-200 mx-auto my-2"></div>
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
