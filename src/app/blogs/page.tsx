"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import electricalImage from '../../../public/images/electrical1.jpg';
import electricalImage2 from '../../../public/images/electrical2.jpg';
import ElectricalImage3 from '../../../public/images/electrical3.jpg';
import ElectricalImage4 from '../../../public/images/electrical4.jpg';
import ElectricalImage5 from '../../../public/images/electrical5.jpg';
import ElectricalImage6 from '../../../public/images/electrical6.jpg';
import ElectricalImage7 from '../../../public/images/electrical7.jpg';
import ElectricalImage8 from '../../../public/images/electrical8.jpg';
import ElectricalImage9 from '../../../public/images/electrical9.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'How to Save on Electrical Bills in Singapore',
    image: electricalImage,
    description: 'Discover expert tips to reduce your monthly electrical bills in Singapore. Learn about energy-efficient appliances, government rebates, and smart usage habits for HDBs and condos.',
    buttonText: 'Show Tips',
  },
  {
    id: 2,
    title: 'Smart Home Trends for Singapore 2025',
    image: electricalImage2,
    description: 'Explore the latest smart home technologies popular in Singapore, including voice assistants, energy monitoring, and security systems tailored for local homes.',
    buttonText: 'Show Trends',
  },
  {
    id: 3,
    title: 'Electrical Safety Checklist for Singapore Homes',
    image: ElectricalImage3,
    description: 'A must-have checklist for Singapore homeowners to ensure electrical safety. Includes tips for HDBs, landed properties, and condos, plus local emergency contacts.',
    buttonText: 'Show Checklist',
  },
  {
    id: 4,
    title: 'Choosing a Licensed Electrician in Singapore',
    image: ElectricalImage4,
    description: 'Learn how to select a licensed electrician in Singapore. Understand EMA regulations, what to look for in a contractor, and how to verify credentials.',
    buttonText: 'Find Out More',
  },
  {
    id: 5,
    title: 'Top Electrical Upgrades for Singapore Businesses',
    image: ElectricalImage5,
    description: 'Upgrade your office or shop with the latest electrical solutions. Discover energy-saving lighting, smart controls, and safety upgrades for Singapore businesses.',
    buttonText: 'See Upgrades',
  },
  {
    id: 6,
    title: 'Emergency Electrical Services in Singapore',
    image: ElectricalImage6,
    description: 'What to do during a power outage or electrical emergency in Singapore. 24/7 hotline numbers, safety steps, and how to get fast help from local experts.',
    buttonText: 'Get Help',
  },
  {
    id: 7,
    title: 'Energy-Efficient Lighting for Singapore Homes',
    image: ElectricalImage7,
    description: 'Switch to LED and smart lighting to save on your electricity bill. See the best options for Singapore HDBs and landed homes, plus installation tips.',
    buttonText: 'See Lighting Tips',
  },
  {
    id: 8,
    title: 'Common Electrical Problems in Singapore',
    image: ElectricalImage8,
    description: 'Identify and solve frequent electrical issues in Singapore homes, from tripping circuits to faulty switches. Learn when to DIY and when to call a pro.',
    buttonText: 'Learn More',
  },
  {
    id: 9,
    title: 'Government Rebates for Energy Efficiency',
    image: ElectricalImage9,
    description: 'Find out about Singapore government rebates and grants for energy-efficient appliances and renovations. Save money while going green!',
    buttonText: 'See Rebates',
  },
];

export default function BlogsPage() {
  const [toast, setToast] = useState<{ open: boolean; message: string } | null>(null);

  const handleButtonClick = (description: string) => {
    setToast({ open: true, message: description });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 flex-1">{post.description}</p>
              <button
                className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200"
                onClick={() => handleButtonClick(post.description)}
              >
                {post.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      {toast?.open && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded shadow-lg z-50 transition-all duration-300">
          {toast.message}
        </div>
      )}
    </div>
  );
}
