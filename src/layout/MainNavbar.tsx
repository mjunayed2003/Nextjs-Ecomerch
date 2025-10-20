import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const MainNavbar = () => {
  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-green-600 flex items-center">
            <ShoppingBag className="h-7 w-7 mr-2 text-green-600" strokeWidth={2} />
            Grabit
          </span>
        </div>

        <div className="flex-grow max-w-xl mx-8 relative">
          <Input 
            type="text" 
            placeholder="Search Products..." 
            className="w-full pl-4 pr-10 py-6 border rounded-md focus-visible:ring-offset-0 focus-visible:ring-transparent" 
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-transparent"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex flex-col items-center text-gray-700 text-sm cursor-pointer hover:text-gray-900 transition-colors hover:bg-gray-300 p-2 rounded">
                <User className="h-5 w-5 mb-1" />
                <span>Account</span>
                <span>LOGIN</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
                <a href="/login" className="block w-full">Login</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
                <a href="/register" className="block w-full">Register</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
                <a href="/checkout" className="block w-full">Checkout</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex flex-col items-center text-gray-700 text-sm cursor-pointer hover:text-gray-900 transition-colors hover:bg-gray-300 p-2 rounded">
            <Heart className="h-5 w-5 mb-1" />
            <span>Wishlist</span>
            <span>0 ITEMS</span>
          </div>
          <div className="flex flex-col items-center text-gray-700 text-sm cursor-pointer hover:text-gray-900 transition-colors hover:bg-gray-300 p-2 rounded">
            <ShoppingBag className="h-5 w-5 mb-1" />
            <span>Cart</span>
            <span>0 ITEMS</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;