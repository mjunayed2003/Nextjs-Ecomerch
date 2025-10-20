import React from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import { BsWhatsapp } from 'react-icons/bs'

export const Header = () => {
  return (
    <div>
      <header className="bg-gray-100 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-700 text-sm">
              <Phone className="h-4 w-4 mr-1" />
              <span>+88 019 39 10 4157</span>
            </div>
            <div className="flex items-center text-gray-700 text-sm">
              <BsWhatsapp className="h-4 w-4 mr-1" />
              <span>+88 019 39 10 4157</span>
            </div>
          </div>

          <div className="hidden md:block text-gray-800 font-medium text-sm">
            World is Fastest Online Shopping Destination
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 text-sm hover:text-gray-900">
              Help
            </a>
            <a href="#" className="text-gray-700 text-sm hover:text-gray-900">
              Track Order
            </a>

            <div className="relative">
              <select className="appearance-none bg-transparent border-none text-gray-700 text-sm pr-6 focus:outline-none">
                <option value="english">English</option>
                <option value="bengali">বাংলা</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>

            <div className="relative">
              <select className="appearance-none bg-transparent border-none text-gray-700 text-sm pr-6 focus:outline-none">
                <option value="dollar">Taka</option>
                <option value="taka">Doler</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

