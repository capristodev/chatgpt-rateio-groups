
import { CircleDollarSign, Users, Zap, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: CircleDollarSign,
    title: "Economia de até 83%",
    description: "Divida o custo da assinatura com outras pessoas e economize significativamente todo mês.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Users,
    title: "Grupos de até 6 pessoas",
    description: "Grupos pequenos garantem estabilidade e qualidade de acesso para todos os participantes.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Zap,
    title: "Acesso a todos os recursos",
    description: "Desfrute de GPT-4, DALL·E 3, navegação na web e todos os recursos premium.",
    color: "bg-azure-100 text-azure-600",
  },
  {
    icon: Shield,
    title: "Segurança garantida",
    description: "Seus dados são protegidos e o acesso é gerenciado com segurança para todos os membros.",
    color: "bg-amber-100 text-amber-600",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que compartilhar o ChatGPT Plus?</h2>
          <p className="text-xl text-gray-600">
            Economize em sua assinatura sem perder nenhum dos recursos premium
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", benefit.color)}>
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
