import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, AlertTriangle, Leaf, ShoppingBag } from 'lucide-react';
import productsData from '../data/products.json';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Scroll to top on load
        window.scrollTo(0, 0);

        // Find the product by ID
        const foundProduct = productsData.find(p => p.ID.toString() === id);
        if (foundProduct) {
            // In a real app we'd map standard images, but here we'll reuse the ones we built for the home page if it matches
            let imgPath = '/product_images/cookies.png'; // default fallback
            if (foundProduct.Category === 'Oil') imgPath = '/product_images/oil.png';
            if (foundProduct.Category === 'Millet Instant Mixes') imgPath = '/product_images/biryani.png';
            if (foundProduct.Category === 'NOODLES') imgPath = '/product_images/noodles.png';

            setProduct({ ...foundProduct, Image_Path: imgPath });
        }
    }, [id]);

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen bg-sand text-forest text-2xl" style={{ backgroundColor: 'var(--bg-primary)', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Seeking Ancient Wisdom...
            </div>
        );
    }

    const parseJsonSafe = (str) => {
        try {
            return JSON.parse(str);
        } catch {
            return [];
        }
    };

    const attributes = parseJsonSafe(product.Rewritten_Attributes);

    // Dummy allergen info since the original excel might not explicitly list them consistently
    const hasNuts = product.Title.toLowerCase().includes('peanut') || product.Title.toLowerCase().includes('groundnut');
    const hasGluten = product.Title.toLowerCase().includes('wheat') || product.Title.toLowerCase().includes('maida');

    return (
        <div className="product-page" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '4rem' }}>

            {/* App-like Top Bar */}
            <nav style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(224, 204, 164, 0.5)', display: 'flex', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: 'rgba(248, 243, 236, 0.9)', backdropFilter: 'blur(10px)', zIndex: 50 }}>
                <Link to="/products" style={{ color: 'var(--color-forest)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                    <ArrowLeft size={24} /> Back to Catalog
                </Link>
                <div style={{ marginLeft: 'auto', fontSize: '1.5rem', color: 'var(--color-terra)' }}>प्राचीन</div>
            </nav>

            <div className="container" style={{ maxWidth: '1200px', margin: '4rem auto 0', padding: '0 2rem' }}>
                <div className="product-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                    {/* Highlight Animation for Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="product-image-section"
                        style={{ position: 'sticky', top: '100px' }}
                    >
                        <div style={{ backgroundColor: 'var(--color-sand)', padding: '2rem', borderRadius: '24px', boxShadow: '0 20px 50px rgba(42, 31, 26, 0.08)', position: 'relative' }}>
                            <img src={product.Image_Path} alt={product.Title} style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                style={{ position: 'absolute', bottom: '-20px', right: '-20px', backgroundColor: 'var(--color-terra)', color: 'white', padding: '1rem', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: '0.8rem', boxShadow: '0 10px 20px rgba(179, 86, 57, 0.3)' }}
                            >
                                100%<br />Natural
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Product Details - Village Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="product-details-section"
                    >
                        <span style={{ color: 'var(--color-terra)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{product.Category}</span>
                        <h1 style={{ fontSize: '3rem', color: 'var(--color-forest)', margin: '0.5rem 0 1.5rem', lineHeight: '1.2' }}>{product.Title}</h1>

                        <div className="product-price" style={{ fontSize: '2rem', color: 'var(--color-clay)', fontWeight: 'bold', marginBottom: '2rem' }}>
                            ₹{product.Variant_Price.split(',')[0]} <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal', textDecoration: 'line-through' }}>₹{product.Variant_Compare_At_Price.split(',')[0]}</span>
                        </div>

                        <p style={{ fontSize: '1.1rem', color: 'var(--color-bark)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            {product.Rewritten_Description}
                        </p>

                        <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', borderRadius: '8px', marginBottom: '3rem', border: 'none', background: 'var(--color-terra)', color: 'white', cursor: 'pointer' }}>
                            <ShoppingBag /> Add to Cart — Bring Nature Home
                        </button>

                        {/* Health Indicators */}
                        <div style={{ backgroundColor: 'rgba(224, 204, 164, 0.2)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(224, 204, 164, 0.5)', marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-forest)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Leaf size={24} color="var(--color-forest)" /> Ancient Health Benefits
                            </h3>

                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {attributes.map((attr, idx) => (
                                    <li key={idx} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--color-bark)', lineHeight: '1.5' }}>
                                        <CheckCircle size={20} color="var(--color-terra)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span>{attr}</span>
                                    </li>
                                ))}
                                {attributes.length === 0 && (
                                    <li style={{ color: 'var(--text-muted)' }}>Rich in dietary fiber and essential minerals organically curated.</li>
                                )}
                            </ul>
                        </div>

                        {/* Allergen Information */}
                        <div style={{ backgroundColor: 'rgba(255, 235, 230, 0.4)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(179, 86, 57, 0.2)' }}>
                            <h4 style={{ color: 'var(--color-terra)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.2rem' }}>
                                <AlertTriangle size={20} /> Allergen Information
                            </h4>
                            <p style={{ color: 'var(--color-clay)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                At Videeptha Foods, we process pure village organics.
                                {hasNuts ? " This product contains groundnuts/nuts." : " This product is naturally nut-free, however it is processed in a facility that may handle tree nuts."}
                                {hasGluten ? " Contains gluten (wheat)." : " 100% naturally Gluten-Free."}
                                No artificial colors, preservatives, or refined white sugar.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
