'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Truck, LifeBuoy, RefreshCw, ShieldCheck, Quote } from 'lucide-react';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Statistic {
  value: string;
  label: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const services: Service[] = [
  { icon: 'Truck', title: 'Free Shipping', description: 'On all orders over $100' },
  { icon: 'LifeBuoy', title: '24x7 Support', description: 'Contact us anytime' },
  { icon: 'RefreshCw', title: '30 Days Return', description: 'Return within 30 days' },
  { icon: 'ShieldCheck', title: 'Payment Secure', description: 'Safe and secure payments' },
];

const statistics: Statistic[] = [
  { value: '65K+', label: 'Vendors' },
  { value: '$45B+', label: 'Earnings' },
  { value: '25M+', label: 'Sold' },
  { value: '70K+', label: 'Products' },
];

const teamMembers: TeamMember[] = [
  { id: 't1', name: 'William Dalim', role: 'CEO', image: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/2.jpg' },
  { id: 't2', name: 'Emma Watson', role: 'Manager', image: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/5.jpg' },
  { id: 't3', name: 'Benjamin Martin', role: 'Employee', image: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/1.jpg' },
  { id: 't4', name: 'Amelia Martin', role: 'Lead Designer', image: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/4.jpg' },
  { id: 't5', name: 'Olivia Smith', role: 'Marketing Head', image: 'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/2.jpg' },
];


const iconMap: Record<string, React.ElementType> = {
  Truck,
  LifeBuoy,
  RefreshCw,
  ShieldCheck,
};

export default function AboutPage() {
  const [counters, setCounters] = useState(statistics.map(() => 0));


useEffect(() => {
  const intervals: number[] = [];

  statistics.forEach((stat, idx) => {
    const target = parseInt(stat.value.replace(/\D/g, '')) || 0;
    const increment = Math.ceil(target / 100);

    const intervalId = window.setInterval(() => {
      setCounters(prev => {
        const newCounters = [...prev];
        if (newCounters[idx] < target) newCounters[idx] += increment;
        else {
          newCounters[idx] = target;
          clearInterval(intervalId);
        }
        return newCounters;
      });
    }, 20);

    intervals.push(intervalId);
  });

  return () => intervals.forEach(i => clearInterval(i));
}, []);



  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <main>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative col-span-2 h-96 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <Image src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/common/about.png" alt="Store interior" layout="fill" objectFit="cover" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <Image src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/common/about-2.png" alt="Farmer" layout="fill" objectFit="cover" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <Image src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/common/about-3.png" alt="Plants" layout="fill" objectFit="cover" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6 text-gray-700">
              <h2 className="text-4xl font-bold text-gray-800">Who We Are?</h2>
              <p className="text-blue-600 font-semibold text-lg">
                OUR MISSION TO SERVE ONLY THE BEST PRODUCTS FOR YOU.
              </p>
              <p>
                Lorem ipsum is dummy text of the printing and typesetting industry. It has survived five centuries and electronic typesetting.
              </p>
              <p>
                Lorem ipsum is dummy text of the printing and typesetting industry. It has been standard dummy text since the 1500s.
              </p>
            </div>
          </div>
        </section>


        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto">
              Customer service is the entire company, not just a department.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon];
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    {Icon && <Icon className="w-12 h-12 text-blue-600 mb-4" />}
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

   
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 text-center">
            <div className="relative p-8 md:p-12 bg-gray-50 rounded-lg shadow-md">
              <Quote className="absolute top-4 left-4 w-12 h-12 text-gray-300 transform -scale-x-100" />
              <Quote className="absolute bottom-4 right-4 w-12 h-12 text-gray-300" />
              <p className="text-lg md:text-xl italic text-gray-700 mb-6">
                Lorem ipsum is dummy text of the printing and typesetting industry.
              </p>
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden shadow-lg">
                  <Image src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/3.jpg" alt="Mariya Klinton" layout="fill" objectFit="cover" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Mariya Klinton</h3>
                <p className="text-blue-600">CEO</p>
                <div className="flex space-x-1 mt-2 text-yellow-400">{'★'.repeat(5).split('').map((s, i) => <span key={i}>{s}</span>)}</div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{counters[index]}{stat.value.includes('+') ? '+' : ''}</h3>
                <p className="text-gray-700 text-lg font-medium mb-1">{stat.label}</p>
                <p className="text-gray-500 text-sm">Contrary to popular belief, Lorem is not random text.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Team</h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto">Meet our expert team members</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {teamMembers.map(member => (
                <div key={member.id} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                    <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
