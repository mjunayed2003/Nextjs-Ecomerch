"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { 
  ChevronDown, 
  User, 
  Heart, 
  ShoppingBag, 
  LayoutGrid, 
  Search
} from "lucide-react";


export const MainNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <span className="text-2xl font-bold text-green-600 flex items-center">
          <ShoppingBag className="h-7 w-7 mr-2 text-green-600" strokeWidth={2} /> Grabit
        </span>

        <div className="hidden md:flex flex-grow max-w-xl mx-8 relative">
          <Input type="text" placeholder="Search Products..." className="w-full pl-4 pr-10 py-2 rounded-md border focus-visible:ring-0" />
          <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-transparent">
            <Search className="h-5 w-5" />
          </Button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
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
              <DropdownMenuItem><Link href="/login">Login</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/register">Register</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/checkout">Checkout</Link></DropdownMenuItem>
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

        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setMobileMenuOpen(true)}>
            <LayoutGrid className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-72 p-4">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <Input type="text" placeholder="Search Products..." className="mb-4" />

          <div className="flex flex-col space-y-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full text-left">
                  Account <ChevronDown className="h-4 w-4 ml-2 inline" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Link href="/login">Login</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/register">Register</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/checkout">Checkout</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" className="w-full">Wishlist</Button>
            <Button variant="outline" className="w-full">Cart</Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};


