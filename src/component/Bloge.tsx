'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { ChevronRight, Search } from 'lucide-react';

interface Article {
  title: string;
  date: string;
  category: string;
  image: string;
  description?: string;
}

export default function BlogPage() {
  const allArticles: Article[] = [
    { title: 'The Best Fashion Influencers', date: 'Feb 10, 2021', category: 'Organic', image: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/blog/1.jpg' },
    { title: 'Vogue Shopping Weekend', date: 'Mar 14, 2021', category: 'Fruits', image: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/blog/2.jpg' },
    { title: 'Fashion Market Reveals Her Jacket', date: 'Apr 02, 2021', category: 'Vegetables', image: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/blog/3.jpg' },
    { title: 'Summer Trending Fashion Market', date: 'Jul 17, 2021', category: 'Fastfood', image: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/blog/5.jpg' },
    { title: 'Winter 2021 Trending Fashion Market', date: 'Aug 03, 2021', category: 'Vegetables', image: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/blog/6.jpg' },
  ];

  const categories = [
    { name: 'Dairy & Milk', count: 98 },
    { name: 'Seafood', count: 54 },
    { name: 'Bakery', count: 64 },
    { name: 'Cosmetics', count: 92 },
    { name: 'Electrics', count: 76 },
    { name: 'Clothes', count: 29 },
    { name: 'Watch', count: 56 },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const filteredArticles = allArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-sm py-4 px-6 md:px-10 lg:px-16 flex justify-center">
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <h1 className="text-2xl font-bold text-gray-800">Our Blog</h1>
          <div className="relative w-full md:w-1/3">
            <Input
              type="text"
              placeholder="Search Our Blog"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto py-8 px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md flex-shrink-0">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Articles</h2>
          <ul className="space-y-4">
            {filteredArticles.map((article, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image src={article.image} alt={article.title} layout="fill" objectFit="cover" className="rounded-md" />
                </div>
                <div>
                  <h3 className="text-md font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500">{article.date}</p>
                  <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{article.category}</span>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index} className="flex justify-between items-center text-gray-700 hover:text-blue-600 cursor-pointer group">
                <span>{category.name}</span>
                <span className="text-sm text-gray-500 group-hover:text-blue-600">{category.count}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="w-full lg:w-3/4 space-y-6">
          {filteredArticles.length === 0 ? (
            <p className="text-gray-500">No articles found.</p>
          ) : (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="text-blue-600 mr-2">{post.date}</span>
                      <span>- {post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer">{post.title}</h3>
                    {post.description && <p className="text-gray-600 mb-4">{post.description}</p>}
                    <a href="#" className="text-blue-600 font-medium flex items-center">
                      Read More <ChevronRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
