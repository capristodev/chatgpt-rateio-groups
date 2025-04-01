
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como funciona o compartilhamento do ChatGPT Plus?",
    answer: "Criamos grupos de até 6 pessoas que compartilham uma assinatura premium do ChatGPT Plus. Cada membro recebe suas próprias credenciais de acesso e pode utilizar todos os recursos premium por uma fração do preço original."
  },
  {
    question: "É permitido compartilhar a conta do ChatGPT Plus?",
    answer: "Nosso serviço funciona de forma que cada membro do grupo tenha sua própria sessão independente, e gerenciamos o acesso de modo que esteja de acordo com os termos de uso."
  },
  {
    question: "Quanto vou economizar com o compartilhamento?",
    answer: "Em um grupo de 6 pessoas, você paga apenas R$16 por mês, em vez dos R$97 da assinatura individual. Isso representa uma economia de aproximadamente 83%."
  },
  {
    question: "Como é feito o pagamento?",
    answer: "Aceitamos pagamentos via PIX, cartão de crédito e boleto bancário. Os pagamentos são processados mensalmente e você receberá notificações antes da próxima cobrança."
  },
  {
    question: "O que acontece se alguém do grupo deixar de pagar?",
    answer: "Mantemos uma lista de espera de usuários para substituir rapidamente qualquer membro que deixe o grupo, garantindo a continuidade do serviço para todos os outros participantes."
  },
  {
    question: "Como posso cancelar minha participação?",
    answer: "Você pode cancelar a qualquer momento através da sua área de membro. O cancelamento será efetivado ao final do período já pago, sem cobranças adicionais."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o compartilhamento do ChatGPT Plus
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas? Entre em contato conosco</p>
          <div className="flex justify-center">
            <a href="mailto:contato@chatgptrateio.com.br" className="text-purple-600 hover:text-purple-700 font-medium">
              contato@chatgptrateio.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
