
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-azure-500 text-white px-4">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para economizar no ChatGPT Plus?
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Junte-se a mais de 1.000 pessoas que já estão economizando com nosso serviço de compartilhamento.
        </p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg">
          Quero Economizar Agora!
        </Button>
      </div>
    </section>
  );
};

export default CTA;
