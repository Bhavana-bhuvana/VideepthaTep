import React, { useState, useEffect, useMemo } from 'react';
import { Search, Sprout, Droplet, Pizza, Zap, Shield, Flame, ChefHat, Layers, Wheat, Waves, Cookie, Clock, Coffee, Sparkles, Smile, Utensils, Candy, Grid, List as ListIcon } from 'lucide-react';
import productsData from '../data/products_full.json';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORY_MAP = {
    'Rice': 'Arisi',
    'Traditional Rice': 'Arisi',
    'Oil': 'Cold Pressed Oils',
    'Roasted Flour': 'Flours',
    'Roasted Flours': 'Flours',
    'PODI ITEM': 'gandharasa-(Masala Powders)',
    'Signature Masala': 'gandharasa-(Masala Powders)',
    'NOODLES': 'millet Pasta',
    'Pasta': 'millet Pasta',
    'Pasta & Noodles': 'millet Pasta',
    'PANCAKE': 'Waffle & Pancake Mixes',
    'Waffle & Pancake Mixes': 'Waffle & Pancake Mixes',
    'Millet Instant Mixes': 'ready to cook Utsaha-(Breakfast)',
    'MIX': 'ready to cook Utsaha-(Breakfast)',
    'VERMICELLI': 'Millet Semiya',
    'Sweet': 'Dopamishtine-(sweets)',
    'Healthy Sweets': 'Dopamishtine-(sweets)',
    'Grains': 'Grains',
    'Millet Grains': 'Grains'
};

const CATEGORY_CONFIG = {
    'Arisi': { icon: <Waves className="w-5 h-5" />, label: 'Heritage Rice' },
    'ready to eat Chutney': { icon: <Flame className="w-5 h-5" />, label: 'Ready Chutney' },
    'Cold Pressed Oils': { icon: <Droplet className="w-5 h-5" />, label: 'Cold Pressed Oils' },
    'Lentils': { icon: <Layers className="w-5 h-5" />, label: 'Lentils' },
    'jhol-(Soup)': { icon: <Coffee className="w-5 h-5" />, label: 'Soups (Jhol)' },
    'Flours': { icon: <Wheat className="w-5 h-5" />, label: 'Roasted Flours' },
    'Fryums': { icon: <Zap className="w-5 h-5" />, label: 'Fryums' },
    'Grains': { icon: <Sprout className="w-5 h-5" />, label: 'Millet Grains' },
    'kanjika-(Health Mix)': { icon: <Shield className="w-5 h-5" />, label: 'Health Mix' },
    'MUESLI': { icon: <Smile className="w-5 h-5" />, label: 'Muesli' },
    'gandharasa-(Masala Powders)': { icon: <Flame className="w-5 h-5" />, label: 'Signature Masalas' },
    'hasitu-(Millet Flours)': { icon: <ChefHat className="w-5 h-5" />, label: 'Millet Flours' },
    'ready to cook Utsaha-(Breakfast)': { icon: <Clock className="w-5 h-5" />, label: 'Breakfast' },
    'Millet Semiya': { icon: <Waves className="w-5 h-5" />, label: 'Semiya' },
    'millet Pasta': { icon: <Pizza className="w-5 h-5" />, label: 'Pasta/Noodles' },
    'Prakritik mish-(Natural Sweeteners)': { icon: <Sparkles className="w-5 h-5" />, label: 'Sweeteners' },
    'Snacks': { icon: <Smile className="w-5 h-5" />, label: 'Healthy Snacks' },
    'Dopamishtine-(sweets)': { icon: <Candy className="w-5 h-5" />, label: 'Healthy Sweets' },
    'sushtocin-Cookies': { icon: <Cookie className="w-5 h-5" />, label: 'Cookies' },
    'Vathal': { icon: <Zap className="w-5 h-5" />, label: 'Vathal' },
    'Millet Catering': { icon: <Utensils className="w-5 h-5" />, label: 'Catering' },
    'Nutrition Mix & Milk Powders': { icon: <Droplet className="w-5 h-5" />, label: 'Milk Powders' },
    'Waffle & Pancake Mixes': { icon: <Pizza className="w-5 h-5" />, label: 'Waffles & Pancakes' }
};

const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const processedProducts = useMemo(() => {
        const items = Array.isArray(productsData) ? productsData : [];
        const uniqueSeen = new Set();

        return items.map(p => {
            let title = p.Title || p.ItemName || '';
            if (!title) return null;

            // Simple cleaning: keep the most meaningful part of the name
            let cleanTitle = title.replace(/\d+\s*(?:kg|g|ml|l|grams|packets|pcs|packs|nos|no|units|lb)\b/gi, '')
                .replace(/\b\d+X\d+\b/gi, '')
                .replace(/\(\d+.*?\)/gi, '')
                .replace(/\d+%/g, '')
                .replace(/\s*-\s*$/, '') // Remove trailing hyphen
                .replace(/\s*-\s*$/, '') // Dual pass for double hyphens
                .trim();

            if (uniqueSeen.has(cleanTitle.toLowerCase())) return null;
            uniqueSeen.add(cleanTitle.toLowerCase());

            let category = p.Category || 'Uncategorized';
            if (CATEGORY_MAP[category]) {
                category = CATEGORY_MAP[category];
            }

            return {
                ...p,
                DisplayTitle: cleanTitle,
                Category: category
            };
        }).filter(Boolean);
    }, []);

    const filteredProducts = useMemo(() => {
        return processedProducts.filter(p => {
            const matchesSearch = p.DisplayTitle.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = !selectedCategory || p.Category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [processedProducts, searchQuery, selectedCategory]);

    return (
        <div className="products-page-wrapper bg-sand/30 pt-24 pb-20 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-end">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-serif text-forest mb-2">Our Collection</h1>
                                <p className="text-bark opacity-60 italic text-sm md:text-lg">Exploring {processedProducts.length}+ traditional foods for modern lifestyle.</p>
                            </div>
                            <div className="flex items-center gap-2 bg-white/40 p-1.5 rounded-xl border border-forest/10 shadow-sm hide-mobile">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-forest text-sand shadow-lg' : 'text-forest/60 hover:bg-forest/5'}`}
                                >
                                    <Grid size={22} />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-forest text-sand shadow-lg' : 'text-forest/60 hover:bg-forest/5'}`}
                                >
                                    <ListIcon size={22} />
                                </button>
                            </div>
                        </div>

                        {/* Search Area */}
                        <div className="relative group w-full">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-forest/40 group-focus-within:text-forest transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-14 pr-6 py-4 bg-white border border-forest/20 rounded-2xl focus:outline-none focus:ring-4 focus:ring-forest/5 shadow-md text-lg text-forest placeholder:text-forest/30"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Smart Category chips - horizontally scrollable */}
                        <div className="category-chips-scroll-container">
                            <div className="category-chips-inner">
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={`cat-chip ${!selectedCategory ? 'active' : ''}`}
                                >
                                    All Items
                                </button>
                                {Object.entries(CATEGORY_CONFIG).map(([key, config]) => (
                                    <button
                                        key={key}
                                        onClick={() => setSelectedCategory(key)}
                                        className={`cat-chip ${selectedCategory === key ? 'active' : ''}`}
                                    >
                                        <span className="cat-chip-icon">{config.icon}</span>
                                        {config.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Area */}
                <motion.div
                    layout
                    className={`product-display-area ${viewMode === 'list' ? 'view-list' : 'view-grid'}`}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={`${product.ID}-${product.DisplayTitle}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.15 }}
                                layout
                                className="product-item-card"
                            >
                                <div className="card-content">
                                    <div className="item-icon-wrapper">
                                        {CATEGORY_CONFIG[product.Category]?.icon || <Sprout size={28} strokeWidth={1.5} />}
                                    </div>
                                    <h3 className="item-name-text">
                                        {product.DisplayTitle}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-32 bg-white/40 rounded-3xl border border-dashed border-forest/20">
                        <Sprout size={64} className="mx-auto text-forest/10 mb-6" />
                        <h3 className="text-xl font-serif text-forest/40">No Treasures Found</h3>
                        <p className="text-bark opacity-40">Try searching for something else or explore a different category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;
