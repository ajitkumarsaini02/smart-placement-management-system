import React, { useState } from 'react';
import Item from './Item';
import './item.css';
import { Search, Sparkles } from 'lucide-react';

const ItemStore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTier, setFilterTier] = useState('All');

  const itemData = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iAlq8sUCYrF044d-ct5Sy0QDcObhNEb7NvJr3jy-1g&s=10",
      title: "Google India",
      role: "Software Development Engineer (SDE-1)",
      category: "Super Dream",
      price: "42.5",
      cgpa: "8.0",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6PtUTRLEiREYMxy14PqKFakkoBFk5SzpSzZf93lEWg&s=10",
      title: "Microsoft IDC",
      role: "Cloud Solution Architect (Azure)",
      category: "Super Dream",
      price: "44.5",
      cgpa: "7.5",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5lIINe0_t3F56gtwWCH4had0jJUACb5P7C7UsBN1Rg&s",
      title: "Amazon Web Services",
      role: "Software Development Intern",
      category: "Super Dream",
      price: "36.0",
      cgpa: "7.0",
    },
    {
      image: "https://m.media-amazon.com/images/I/71A7t9Ze-jL._AC_UF1000,1000_QL80_.jpg",
      title: "Goldman Sachs",
      role: "Analyst - Engineering & Quant",
      category: "Fintech Dream",
      price: "38.0",
      cgpa: "7.5",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslMeGoVmJeF8P5qrnJ8XXJAlyawkfIRv60G5A6cbmYg&s=10",
      title: "Adobe Systems",
      role: "Member of Technical Staff",
      category: "Super Dream",
      price: "41.0",
      cgpa: "8.2",
    },
    {
      image: "https://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325975484.jpg",
      title: "Infosys Limited",
      role: "Specialist Programmer",
      category: "Core IT",
      price: "9.5",
      cgpa: "6.5",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUGw1NNFdUWZostWlXLF_5bTm04xOo4XYtb-VdA0XCjiFwdr7jX0lt1Q&s=10",
      title: "Tata Consultancy Services",
      role: "TCS Digital - System Engineer",
      category: "Core IT",
      price: "8.5",
      cgpa: "6.5",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3Q-jJoSbfGoSvedSgfuxCaEBG18NJbPjFLgqg0fA0KB2XvzLG9ObskI&s=10",
      title: "Accenture",
      role: "Advance App Engineering Associate",
      category: "Consulting",
      price: "11.2",
      cgpa: "6.8",
    }
  ];

  const filteredItems = itemData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = filterTier === 'All' || item.category === filterTier;
    return matchesSearch && matchesTier;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-6">
      
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-1 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Active Placement Opportunities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Campus Placement Drives & Roles
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Showing verified corporate drives open for 2026 Batch registration
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search drives, companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-blue-600 shadow-2xs"
            />
          </div>

          <div className="flex gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            {['All', 'Super Dream', 'Core IT', 'Fintech Dream'].map((tier) => (
              <button
                key={tier}
                onClick={() => setFilterTier(tier)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  filterTier === tier
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="item-grid">
        {filteredItems.map((item, index) => (
          <Item key={index} props={item} />
        ))}
      </div>

    </div>
  );
};

export default ItemStore;
