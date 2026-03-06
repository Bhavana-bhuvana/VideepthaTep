import React, { useState, useEffect, useMemo } from 'react';
import { Search, Sprout, LayoutGrid, List, Star, ArrowRight, Wheat, Droplet, Shield, Clock, Smile, Flame, Pizza, Cookie, Candy, Zap, Leaf, Milk } from 'lucide-react';
import productsData from '../data/products_full.json';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORY_CONFIG = {
    'Traditional Rice': { label: 'Traditional Rice', icon: <Wheat size={18} /> },
    'Cold Pressed Oils': { label: 'Pure Oils', icon: <Droplet size={18} /> },
    'Millet Health Mix': { label: 'Health Mix', icon: <Shield size={18} /> },
    'Ready-to-Make Mixes': { label: 'Ready Mixes', icon: <Clock size={18} /> },
    'Healthy Snacks': { label: 'Snacks', icon: <Smile size={18} /> },
    'Spicy Podi & Masala': { label: 'Podi & Masala', icon: <Flame size={18} /> },
    'Noodles & Pasta': { label: 'Noodles & Pasta', icon: <Pizza size={18} /> },
    'Millet Cookies': { label: 'Cookies', icon: <Cookie size={18} /> },
    'Healthy Sweets': { label: 'Sweets', icon: <Candy size={18} /> },
    'Vathal & Papad': { label: 'Vathal & Papad', icon: <Zap size={18} /> },
    'Vegan & Spreads': { label: 'Vegan & Spreads', icon: <Leaf size={18} /> },
    'Millet Grains & Flours': { label: 'Grains & Flours', icon: <Wheat size={18} /> },
    'Healthy Drinks': { label: 'Healthy Drinks', icon: <Milk size={18} /> }
};

const UPCOMING_CATEGORIES = [
    'Women friendly', 'Fat builder', 'Fat burner', 'Diabetic friendly', 'Protein bars'
];

const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const processedProducts = useMemo(() => {
        const items = Array.isArray(productsData) ? productsData : [];
        return items.filter(p => p.Title && p.Category);
    }, []);

    const filteredProducts = useMemo(() => {
        return processedProducts.filter(p => {
            const matchesSearch = p.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.Category.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = !selectedCategory || p.Category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [processedProducts, searchQuery, selectedCategory]);

    return (
        <div className="products-page-wrapper pt-40 pb-32 min-h-screen" style={{ backgroundColor: 'var(--p-sand)' }}>
            <div className="container mx-auto px-8">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 bg-gold-light text-terra text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-6"
                    >
                        Pure Village Goodness
                    </motion.div>
                    <h1 className="text-7xl font-serif text-forest mb-6 tracking-tight leading-none uppercase">VILLAGE TREASURES</h1>
                    <p className="text-forest/40 uppercase tracking-[0.2em] text-xs font-bold max-w-xl mx-auto">
                        Nature-first products meticulously prepared for your healthy lifestyle, following our grandma's traditional recipes.
                    </p>
                </div>

                {/* Main Filter Section */}
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                        <div className="flex-1 search-container-premium py-2">
                            <Search className="search-icon-premium ml-2" size={24} strokeWidth={3} />
                            <input
                                type="text"
                                placeholder="Search our authentic collection..."
                                className="search-input-premium pl-4"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="layout-toggle-premium">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${viewMode === 'grid' ? 'bg-forest text-sand shadow-lg scale-105' : 'text-forest/40 hover:bg-forest/5'}`}
                            >
                                <LayoutGrid size={18} /> Grid
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${viewMode === 'list' ? 'bg-forest text-sand shadow-lg scale-105' : 'text-forest/40 hover:bg-forest/5'}`}
                            >
                                <List size={18} /> List
                            </button>
                        </div>
                    </div>
                </div>

                {/* Category Slider */}
                <div className="mb-20">
                    <div className="flex items-center justify-between mb-8 px-2">
                        <div className="flex items-center gap-4">
                            <h3 className="text-lg font-serif text-forest">Categories</h3>
                            <div className="h-[2px] w-8 bg-gold rounded-full" />
                        </div>
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="reset-filter-btn"
                        >
                            Reset Selection
                        </button>
                    </div>

                    <div className="category-chips-scroll-container pb-8">
                        <div className="category-chips-inner flex gap-4">
                            {Object.entries(CATEGORY_CONFIG).map(([key, config]) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedCategory(key)}
                                    className={`cat-chip-premium flex items-center gap-3 ${selectedCategory === key ? 'active' : ''}`}
                                >
                                    <span className="opacity-60">{config.icon}</span>
                                    {config.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className={`product-display-area ${viewMode === 'list' ? 'view-list' : 'view-grid'} gap-8`}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={`${product.ID}-${product.Title}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, cubicBezier: [0.19, 1, 0.22, 1] }}
                                layout
                                className={`product-item-card-premium group ${index % 2 === 0 ? 'bg-vibrant-green' : 'bg-vibrant-brown'}`}
                            >
                                <div className="card-content flex flex-col h-full">
                                    <div className={`mb-6 h-40 rounded-2xl flex items-center justify-center transition-colors duration-500 ${index % 2 === 0 ? 'bg-white/40 group-hover:bg-vibrant-green/50' : 'bg-white/40 group-hover:bg-vibrant-brown/50'}`}>
                                        {CATEGORY_CONFIG[product.Category]?.icon ?
                                            React.cloneElement(CATEGORY_CONFIG[product.Category].icon, { size: 48, strokeWidth: 1.5, className: index % 2 === 0 ? 'text-vibrant-green' : 'text-vibrant-brown' }) :
                                            <Sprout size={48} strokeWidth={1.5} className={index % 2 === 0 ? 'text-vibrant-green' : 'text-vibrant-brown'} />
                                        }
                                    </div>
                                    <div className="item-info flex-1">
                                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 block ${index % 2 === 0 ? 'text-vibrant-green/60' : 'text-vibrant-brown/60'}`}>
                                            {CATEGORY_CONFIG[product.Category]?.label || product.Category}
                                        </span>
                                        <h3 className="text-xl font-serif leading-tight transition-colors">
                                            {product.Title}
                                        </h3>
                                    </div>
                                    <div className="mt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                        <span className={`text-[9px] font-black uppercase tracking-widest ${index % 2 === 0 ? 'text-vibrant-green' : 'text-vibrant-brown'}`}>Learn More</span>
                                        <ArrowRight size={14} className={index % 2 === 0 ? 'text-vibrant-green' : 'text-vibrant-brown'} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Upcoming Section */}
                <div className="upcoming-section-modern">
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="text-center lg:text-left">
                            <h4 className="text-2xl font-serif text-forest mb-2 flex items-center justify-center lg:justify-start gap-3">
                                <Star size={24} className="text-gold fill-gold" /> UPCOMING
                            </h4>
                            <p className="text-forest/40 text-xs font-bold uppercase tracking-widest leading-relaxed">Exciting new village treasures <br /> arriving soon in our collection.</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                            {UPCOMING_CATEGORIES.map((label, idx) => (
                                <div key={idx} className="upcoming-item-chip shadow-sm">
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-48 border-2 border-dashed border-forest/10 rounded-[3rem]">
                        <Sprout size={64} className="mx-auto text-forest/10 mb-6" />
                        <h3 className="text-3xl font-serif text-forest opacity-20">Hidden Treasures...</h3>
                        <p className="text-forest/20 mt-2 font-bold uppercase tracking-widest text-xs">Try a different search term or category</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;

