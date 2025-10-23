import React from 'react';
import { Apple, Croissant, Carrot, Milk, Soup, Coffee } from 'lucide-react';


interface Category {
  id: number;
  name: string;
  itemCount: number;
  icon: React.ElementType;
  discount?: number;
  bgColorClass: string;
  hoverBorderClass: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Fruits',
    itemCount: 320,
    icon: Apple,
    discount: 30,
    bgColorClass: 'bg-orange-50',
    hoverBorderClass: 'hover:border-orange-200'
  },
  {
    id: 2,
    name: 'Bakery',
    itemCount: 55,
    icon: Croissant,
    bgColorClass: 'bg-green-50',
    hoverBorderClass: 'hover:border-green-200'
  },
  {
    id: 3,
    name: 'Vegetables',
    itemCount: 549,
    icon: Carrot,
    discount: 15,
    bgColorClass: 'bg-red-50',
    hoverBorderClass: 'hover:border-red-200'
  },
  {
    id: 4,
    name: 'Dairy & Milk',
    itemCount: 49,
    icon: Milk,
    discount: 10,
    bgColorClass: 'bg-purple-50',
    hoverBorderClass: 'hover:border-purple-200'
  },
  {
    id: 5,
    name: 'Snack & Spice',
    itemCount: 60,
    icon: Soup,
    bgColorClass: 'bg-blue-50',
    hoverBorderClass: 'hover:border-blue-200'
  },
  {
    id: 6,
    name: 'Juice & Drinks',
    itemCount: 845,
    icon: Coffee, 
    bgColorClass: 'bg-yellow-50',
    hoverBorderClass: 'hover:border-yellow-200'
  },
];

const CategoryGrid = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative flex flex-col items-center justify-center p-6 rounded-lg shadow-sm border-2 border-transparent 
                        ${category.bgColorClass} ${category.hoverBorderClass} 
                        hover:shadow-md transition-all duration-300 cursor-pointer text-center`}
          >
            {category.discount && (
              <span className="absolute top-0 right-0 mt-3 mr-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {category.discount}%
              </span>
            )}
            <category.icon className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.itemCount} items</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;