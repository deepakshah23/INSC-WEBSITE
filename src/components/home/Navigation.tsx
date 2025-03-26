import React from 'react';
import { GraduationCap } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap size={32} />
            <span className="text-xl font-bold">Indian School Consortium</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-200">Home</a>
            <a href="#" className="hover:text-blue-200">About</a>
            <a href="#" className="hover:text-blue-200">Schools</a>
            <a href="#" className="hover:text-blue-200">Admissions</a>
            <a href="#" className="hover:text-blue-200">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
