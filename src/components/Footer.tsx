
import { Mail, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-white text-lg mb-4">ChatGPT Rateio</h3>
            <p className="mb-4">
              Economize até 83% na sua assinatura do ChatGPT Plus compartilhando com outras pessoas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="mailto:contato@chatgptrateio.com.br" className="hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="hover:text-white">Benefícios</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white">Como Funciona</a>
              </li>
              <li>
                <a href="#precos" className="hover:text-white">Preços</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Política de Reembolso</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} ChatGPT Rateio. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-500 text-xs">
            ChatGPT é uma marca registrada da OpenAI. Este é um serviço de compartilhamento não afiliado à OpenAI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
