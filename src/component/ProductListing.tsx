'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LayoutGrid, SquareStack, ChevronDown, X, Star } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    category: string;
    weight: string;
    color: string;
    price: number;
    oldPrice?: number;
    tags: string[];
    imageUrl: string;
    badge?: 'SALE' | 'NEW';
    rating: number // 1-5
}

  const PRODUCTS_PER_PAGE = 6;

// products
const dummyProducts: Product[] = [
    { id: 1, name: 'Dates Value Pack Pouch', category: 'Fruits & Vegetable', weight: '500gm Pack', color: '#FF0000', price: 78.00, oldPrice: 99.00, tags: ['Fruits', 'Dried Fruits'], imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyvrRydJnMEPanuIYa6L3xSnqQPvlhJiU7cw&s', badge: 'SALE', rating: 4 },
    { id: 2, name: 'Crunchy Triangle Chips Snacks', category: 'Snack & Spice', weight: '500gm Pack', color: '#00FF00', price: 58.00, oldPrice: 69.00, tags: ['Snacks', 'Chips'], imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMQaeyuSO35bMxUykPmXiv7TfbOqitaXyPQ&s', rating: 5 },
    { id: 3, name: 'California Almonds Value Pack', category: 'Fruits & Vegetable', weight: '500gm Pack', color: '#FFFFFF', price: 58.00, oldPrice: 69.00, tags: ['Fruits', 'Dried Fruits'], imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMTfbOO_xYYEtZK8ynde2J0aXCCvAfJgTwg&s', badge: 'SALE', rating: 4 },
    { id: 4, name: 'Banana Chips Snacks & Spices', category: 'Snack & Spice', weight: '500gm Pack', color: '#00FF00', price: 45.00, oldPrice: 59.99, tags: ['Snacks', 'Chips'], imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfkH9l4ZQVLZjanFhlOi1toVN04BaTNCpuw&s', badge: 'NEW', rating: 5 },
    { id: 5, name: 'Berry & Grape Mix Snack', category: 'Fruits & Vegetable', weight: '500gm Pack', color: '#FF0000', price: 25.00, oldPrice: 45.00, tags: ['Fruits', 'Snacks'], imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6p9T04eyazn49Ro1cTuWdQ3_bSftLecLlWw&s', badge: 'NEW', rating: 4 },
    { id: 6, name: 'Mixed Nuts Seeds & Berries Pack', category: 'Fruits & Vegetable', weight: '500gm Pack', color: '#FFFFFF', price: 45.00, oldPrice: 59.99, tags: ['Fruits', 'Dried Fruits', 'Snacks'], imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2Y9QKrRpXcfTl3pbqf95VnHh2qDn8yZSAQ&s', badge: 'SALE', rating: 3 },
    { id: 7, name: 'Organic Dried Mango Slices', category: 'Fruits & Vegetable', weight: '500gm Pack', color: '#FFFF00', price: 35.00, oldPrice: 49.99, tags: ['Fruits', 'Dried Fruits'], imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQYtQcabvRFQphfYstXuvIQJhuvbYAgO56g&s', rating: 5 },
];

const categories = [
    { id: 'Fruits & Vegetable', label: 'Fruits & Vegetable' },
    { id: 'Snack & Spice', label: 'Snack & Spice' },
    { id: 'Dairy & Bakery', label: 'Dairy & Bakery' },
    { id: 'Juice & Drinks', label: 'Juice & Drinks' },
];

const weights = [
    { id: '500gm', label: '500gm Pack' },
    { id: '1kg', label: '1kg Pack' },
    { id: '2kg', label: '2kg Pack' },
];

const colors = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#A52A2A', '#D3D3D3'
];

const initialActiveTags = ['Clothes', 'Fruits', 'Snacks', 'Dairy', 'Perfume', 'Jewelry'];
const availableTags = ['Clothes', 'Fruits', 'Snacks', 'Dairy', 'Fastfood', 'Toy', 'Perfume', 'Jewelry', 'Beverage'];

const ProductListing = () => {
    const [activeFilters, setActiveFilters] = useState<string[]>(initialActiveTags);
    const [priceRange, setPriceRange] = useState<number[]>([0, 250]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedWeights, setSelectedWeights] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [isGrid, setIsGrid] = useState<boolean>(true);

    const handleTagRemove = (tagToRemove: string) => {
        setActiveFilters(activeFilters.filter(tag => tag !== tagToRemove));
    };

    const handleClearAll = () => {
        setActiveFilters([]);
        setSelectedCategories([]);
        setSelectedWeights([]);
        setSelectedColors([]);
        setPriceRange([0, 250]);
    };

    const getFilteredProducts = () => {
        let filtered = dummyProducts;

        if (selectedCategories.length > 0) {
            filtered = filtered.filter(product => selectedCategories.includes(product.category));
        }

        if (selectedWeights.length > 0) {
            filtered = filtered.filter(product => selectedWeights.includes(product.weight.split(' ')[0]));
        }

        if (selectedColors.length > 0) {
            filtered = filtered.filter(product => selectedColors.includes(product.color));
        }

        filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

        if (activeFilters.length > 0) {
            filtered = filtered.filter(product => product.tags.some(tag => activeFilters.includes(tag)));
        }

        return filtered;
    };


    // State
    const [sortOption, setSortOption] = useState<string>('featured');
    // Sorting function
    const getSortedProducts = (products: Product[]) => {
        const sorted = [...products];
        switch (sortOption) {
            case 'price-asc':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return sorted.sort((a, b) => b.price - a.price);
            case 'name-asc':
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            default:
                return sorted; // featured / default order
        }
    }

    // Apply sorting

    const filteredProducts = getSortedProducts(getFilteredProducts());

      const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    // const currentProducts = filteredProducts.slice(
    //     (currentPage - 1) * PRODUCTS_PER_PAGE,
    //     currentPage * PRODUCTS_PER_PAGE
    // );

    return (
        <section className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-8">
                    {/* Category Filter */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-between">
                            Category <ChevronDown className="h-4 w-4 text-gray-500" />
                        </h3>
                        <div className="space-y-3">
                            {categories.map(cat => (
                                <div key={cat.id} className="flex items-center">
                                    <Checkbox
                                        id={cat.id}
                                        checked={selectedCategories.includes(cat.id)}
                                        onCheckedChange={checked => {
                                            if (checked) setSelectedCategories([...selectedCategories, cat.id]);
                                            else setSelectedCategories(selectedCategories.filter(c => c !== cat.id));
                                        }}
                                        className="mr-2 rounded-sm"
                                    />
                                    <label htmlFor={cat.id} className="text-sm font-medium text-gray-700">{cat.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Weight Filter */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-between">
                            Weight <ChevronDown className="h-4 w-4 text-gray-500" />
                        </h3>
                        <div className="space-y-3">
                            {weights.map(w => (
                                <div key={w.id} className="flex items-center">
                                    <Checkbox
                                        id={w.id}
                                        checked={selectedWeights.includes(w.id)}
                                        onCheckedChange={checked => {
                                            if (checked) setSelectedWeights([...selectedWeights, w.id]);
                                            else setSelectedWeights(selectedWeights.filter(c => c !== w.id));
                                        }}
                                        className="mr-2 rounded-sm"
                                    />
                                    <label htmlFor={w.id} className="text-sm font-medium text-gray-700">{w.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Color Filter */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-between">
                            Color <ChevronDown className="h-4 w-4 text-gray-500" />
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {colors.map((color, index) => (
                                <div
                                    key={index}
                                    className={`h-6 w-6 rounded-full cursor-pointer border-2 ${selectedColors.includes(color) ? 'border-gray-900' : 'border-gray-200'}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => {
                                        if (selectedColors.includes(color)) setSelectedColors(selectedColors.filter(c => c !== color));
                                        else setSelectedColors([...selectedColors, color]);
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Price Filter */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-between">
                            Price <ChevronDown className="h-4 w-4 text-gray-500" />
                        </h3>
                        <Slider
                            value={priceRange}
                            max={500}
                            step={1}
                            onValueChange={setPriceRange}
                            className="w-[90%] mx-auto"
                        />
                        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                            <Input
                                type="number"
                                value={priceRange[0]}
                                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                                className="w-20 text-center"
                            />
                            <Input
                                type="number"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                className="w-20 text-center"
                            />
                        </div>
                    </div>

                    {/* Tags Filter */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-between">
                            Tags <ChevronDown className="h-4 w-4 text-gray-500" />
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {availableTags.map(tag => (
                                <Button
                                    key={tag}
                                    variant={activeFilters.includes(tag) ? 'default' : 'outline'}
                                    size="sm"
                                    className={`text-xs px-3 py-1 rounded-full ${activeFilters.includes(tag)
                                        ? 'bg-green-600 hover:bg-green-700 text-white'
                                        : 'border-gray-300 bg-white hover:bg-gray-100 text-gray-700'
                                        }`}
                                    onClick={() => {
                                        if (activeFilters.includes(tag)) {
                                            handleTagRemove(tag);
                                        } else {
                                            setActiveFilters([...activeFilters, tag]);
                                        }
                                    }}
                                >
                                    {tag}
                                </Button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Right Section - Product Listing */}
                <main className="w-full lg:w-3/4">
                    {/* Active Filters and Sort Bar */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6 flex flex-wrap justify-between items-center gap-3">
                        <div className="flex items-center flex-wrap gap-2">
                            {activeFilters.length > 0 && <span className="text-sm font-medium text-gray-700 mr-2">Filters:</span>}
                            {activeFilters.map((tag) => (
                                <span key={tag} className="flex items-center bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-300">
                                    {tag}
                                    <X className="h-3 w-3 ml-2 cursor-pointer hover:text-red-500" onClick={() => handleTagRemove(tag)} />
                                </span>
                            ))}
                            {activeFilters.length > 0 && (
                                <Button variant="ghost" className="text-sm text-red-500 hover:bg-red-50 hover:text-red-600 px-2 py-1" onClick={handleClearAll}>
                                    Clear All
                                </Button>
                            )}
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Sort */}
                            <div className="flex items-center text-gray-700 text-sm">
                                <span className="mr-2">Sort by</span>
                                <Select onValueChange={(value) => setSortOption(value)}>
                                    <SelectTrigger className="w-[120px] h-9">
                                        <SelectValue placeholder="Featured" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="featured">Featured</SelectItem>
                                        <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                        <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                        <SelectItem value="name-asc">Name: A to Z</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* View Toggle */}
                            <Button variant="outline" size="icon" className="h-9 w-9 border-gray-300 text-gray-600 hover:bg-gray-100" onClick={() => setIsGrid(true)}>
                                <LayoutGrid className="h-5 w-5" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-9 w-9 border-gray-300 text-gray-600 hover:bg-gray-100" onClick={() => setIsGrid(false)}>
                                <SquareStack className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Product Grid/List */}
                    <div className={isGrid ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
                        {filteredProducts.length > 0 ? filteredProducts.map((product) => (
                            <div key={product.id} className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow duration-300 ${!isGrid ? 'flex' : ''}`}>
                                <div className={`relative w-full ${!isGrid ? 'sm:w-1/3 h-48' : 'h-48'}`}>
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 group-hover:scale-105"
                                    />
                                    {product.badge && (
                                        <span className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-full ${product.badge === 'SALE' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                                            {product.badge}
                                        </span>
                                    )}
                                </div>
                                <div className={`p-4 ${!isGrid ? 'sm:w-2/3 flex flex-col justify-between' : ''}`}>
                                    <h4 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">{product.name}</h4>
                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                        ))}
                                        <span className="ml-1">({product.rating})</span>
                                    </div>
                                    <div className="flex items-baseline mb-3">
                                        <span className="text-lg font-bold text-green-600 mr-2">${product.price.toFixed(2)}</span>
                                        {product.oldPrice && <span className="text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>}
                                    </div>
                                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2">Add to Cart</Button>
                                </div>
                            </div>
                        )) : (
                            <div className="col-span-full text-center py-10 text-gray-500">
                                No products found matching your filters.
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <Button
                                key={i}
                                variant={currentPage === i + 1 ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </Button>
                        ))}
                    </div>

                </main>
            </div>
        </section>
    );
};

export default ProductListing;

