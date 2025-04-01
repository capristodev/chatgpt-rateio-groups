
import React from 'react';
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 px-4 md:px-8 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold gradient-text">ChatGPT Rateio</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className="text-gray-700 hover:text-purple-600 transition-colors">Benefícios</a>
          <a href="#como-funciona" className="text-gray-700 hover:text-purple-600 transition-colors">Como Funciona</a>
          <a href="#precos" className="text-gray-700 hover:text-purple-600 transition-colors">Preços</a>
          <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors">FAQ</a>
          <Button className="bg-gradient-to-r from-purple-600 to-azure-500 hover:from-purple-700 hover:to-azure-600">
            Participar Agora
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#beneficios" 
              className="text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#como-funciona" 
              className="text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#precos" 
              className="text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="bg-gradient-to-r from-purple-600 to-azure-500 hover:from-purple-700 hover:to-azure-600 w-full">
              Participar Agora
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
