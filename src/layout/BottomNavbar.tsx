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
import { LayoutGrid, ChevronDown, MapPin, Clock } from "lucide-react";

const BottomNavbar = () => {
  const pathname = usePathname();

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCity, setSelectedCity] = useState("New York");

  const categories = ["All Categories", "Technology", "Fashion", "Food"];
  const cities = ["New York", "London", "Paris", "Tokyo"];

  const isActive = (path: string) =>
    pathname === path
      ? "text-green-600 font-semibold border-b-2 border-green-600 pb-1"
      : "text-gray-700 hover:text-green-600 transition-colors";

  return (
    <div className="bg-white border-t border-gray-200 py-3">
      <div className="container mx-auto flex items-center justify-between px-4">

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
              <DropdownMenuItem
                key={cat}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <nav className="flex items-center space-x-6">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={`flex items-center gap-1 ${isActive("/categories")}`}>
                Categories <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuItem>
                <Link href="/categories/a" className={isActive("/categories/a")}>
                  Subcategory A
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/categories/b" className={isActive("/categories/b")}>
                  Subcategory B
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={`flex items-center gap-1 ${isActive("/products")}`}>
                Products <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuItem>
                <Link href="/products/popular" className={isActive("/products/popular")}>
                  Popular Products
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/products/new" className={isActive("/products/new")}>
                  New Arrivals
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={`flex items-center gap-1 ${isActive("/blog")}`}>
                Blog <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuItem>
                <Link href="/blog/latest" className={isActive("/blog/latest")}>
                  Latest Posts
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/blog/archive" className={isActive("/blog/archive")}>
                  Archives
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={`flex items-center gap-1 ${isActive("/others")}`}>
                <Clock className="h-4 w-4 mr-1" /> Others <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuItem>
                <Link href="/about" className={isActive("/about")}>
                  About Us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact" className={isActive("/contact")}>
                  Contact
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center px-4 py-2 rounded-md">
              <MapPin className="h-5 w-5 mr-2" /> {selectedCity}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            {cities.map((city) => (
              <DropdownMenuItem
                key={city}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  );
};

export default BottomNavbar;
