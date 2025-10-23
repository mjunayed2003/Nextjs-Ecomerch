"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
  LayoutGrid, 
  MapPin, 
  Clock, 
} from "lucide-react";



export const BottomNavbar = () => {
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCity, setSelectedCity] = useState("New York");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = ["All Categories", "Technology", "Fashion", "Food"];
  const cities = ["New York", "London", "Paris", "Tokyo"];

  const isActive = (path: string) =>
    pathname === path
      ? "text-green-600 font-semibold border-b-2 border-green-600 pb-1"
      : "text-gray-700 hover:text-green-600 transition-colors";

  return (
    <div className="bg-white border-t border-gray-200 py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="hidden md:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center px-4 py-2 rounded-md">
                <LayoutGrid className="h-5 w-5 mr-2" />
                {selectedCategory}
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              {categories.map((cat) => (
                <DropdownMenuItem key={cat} onClick={() => setSelectedCategory(cat)}>
                  {cat}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setMobileMenuOpen(true)}>
            <LayoutGrid className="h-5 w-5" />
          </Button>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/categories" className={isActive("/categories")}>Categories</Link>
          <Link href="/products" className={isActive("/products")}>Products</Link>
          <Link href="/blog" className={isActive("/blog")}>Blog</Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={`flex items-center gap-1 ${isActive("/others")}`}>
                <Clock className="h-4 w-4 mr-1" /> Others <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuItem><Link href="/about" className={isActive("/about")}>About Us</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/contact" className={isActive("/contact")}>Contact</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden md:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center px-4 py-2 rounded-md">
                <MapPin className="h-5 w-5 mr-2" /> {selectedCity}
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              {cities.map((city) => (
                <DropdownMenuItem key={city} onClick={() => setSelectedCity(city)}>
                  {city}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-72 p-4">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col space-y-3">
            <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link href="/categories" className="text-gray-700 hover:text-green-600">Categories</Link>
            <Link href="/products" className="text-gray-700 hover:text-green-600">Products</Link>
            <Link href="/blog" className="text-gray-700 hover:text-green-600">Blog</Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600">About Us</Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
