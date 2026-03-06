import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, VolumeX, Sprout, Sun, Droplet, ShieldCheck, Leaf, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const [isVideoMuted, setIsVideoMuted] = useState(true);
    const heroVideoRef = useRef(null);
    const philosophyVideoRef = useRef(null);
    const toggleAudio = () => {
        if (heroVideoRef.current) {
            heroVideoRef.current.muted = !heroVideoRef.current.muted;
            setIsVideoMuted(heroVideoRef.current.muted);
        }
    };

    const handlePhilosophyVideoHover = (isHovering) => {
        if (philosophyVideoRef.current) {
            philosophyVideoRef.current.muted = !isHovering;
        }
    };



    const fadeUpVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };
    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };
    const flyInLeftVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const flyInRightVariant = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const scaleVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="home-container">
            {/* Main Hero */}
            <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* Background Video using user uploaded video5.mp4 */}
                <video
                    ref={heroVideoRef}
                    autoPlay
                    muted={isVideoMuted}
                    loop
                    playsInline
                    className="hero-bg-video"
                    poster="/assets/bg-village.png"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2, filter: 'brightness(0.7) contrast(1.1) sepia(0.1)' }}
                >
                    <source src="/assets/video5.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(27, 40, 27, 0.3) 0%, rgba(248, 243, 236, 0.2) 70%, rgba(248, 243, 236, 1) 100%)', zIndex: -1 }} />
                {/* Flying Birds Animation Background */}
                <div className="birds-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0, pointerEvents: 'none', opacity: 0.6 }}>
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: '-10%', y: `${20 + i * 15}%` }}
                            animate={{ x: '110%', y: `${10 + i * 10}%` }}
                            transition={{
                                duration: 15 + i * 5,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 2,
                            }}
                            style={{
                                position: 'absolute',
                                fontSize: '2rem',
                                color: 'var(--color-bark)'
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.87277 13.9114C4.30159 13.0645 6.00936 12.5 7.82843 12.5C9.64749 12.5 11.3553 13.0645 12.7841 13.9114C14.2129 13.0645 15.9207 12.5 17.7398 12.5C19.5588 12.5 21.2666 13.0645 22.6954 13.9114" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={staggerVariants}
                    style={{ zIndex: 1, textAlign: 'center' }}
                >
                    <motion.div variants={fadeUpVariant} style={{ marginBottom: '2.5rem', position: 'relative', display: 'inline-block' }}>
                        {/* Sweeping Leaf Animation Wrapper */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }}>
                            <div className="animate-sweep green-leaf-sweep" style={{ width: '40px', height: '40px' }}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                                </svg>
                            </div>
                        </div>

                        <h2 className="brand-highlight" style={{ fontSize: '5rem', color: 'var(--color-sand)', fontWeight: 'bold', letterSpacing: '6px', textTransform: 'uppercase', marginBottom: '0.8rem', position: 'relative', filter: 'drop-shadow(0 4px 15px rgba(0,0,0,0.5))' }}>
                            VIDEEPTHA FOO<span style={{ position: 'relative' }}>D<div style={{ position: 'absolute', top: '-40px', left: '-5px', width: '50px', height: '50px', zIndex: 10 }}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="green-leaf-static">
                                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" fill="currentColor" />
                                </svg>
                            </div></span>S
                        </h2>
                        <div style={{ fontSize: '1.4rem', color: 'var(--color-sand)', opacity: 1, letterSpacing: '2px', textTransform: 'uppercase', textShadow: '0 2px 4px rgba(0,0,0,0.6)', whiteSpace: 'nowrap' }}>
                            svastam prakrtham - snehitam
                        </div>
                    </motion.div>

                    <motion.p variants={fadeUpVariant} className="hero-description text-center" style={{ fontSize: '1.4rem', color: 'var(--color-sand)', maxWidth: '850px', margin: '0 auto 3rem', lineHeight: '1.6', fontWeight: '500', textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
                        Grow stronger - live healthier.<br />
                        We do bring you a powerhouse in small packets for a better today tomorrow...
                    </motion.p>

                    <motion.div variants={fadeUpVariant} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Link to="/products" className="btn btn-light" style={{ textDecoration: 'none' }}>
                            The Taste of Truth
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Floating Mute/Unmute Icon for Hero Video */}
                <button
                    onClick={toggleAudio}
                    style={{ position: 'absolute', bottom: '30px', right: '30px', zIndex: 50, background: 'rgba(49, 68, 48, 0.9)', border: '1px solid var(--color-sand)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', color: 'var(--color-sand)', backdropFilter: 'blur(5px)' }}
                    aria-label={isVideoMuted ? 'Unmute Video' : 'Mute Video'}
                >
                    {isVideoMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
            </section>

            {/* Philosophy Section */}
            <section id="philosophy" className="philosophy-section bg-olive-textured py-20">
                <div className="philosophy-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={flyInLeftVariant}
                        className="philosophy-content"
                    >
                        <h3 className="philosophy-subtitle" style={{ color: 'var(--color-sand)' }}>Our Promise</h3>
                        <h2 style={{ color: 'var(--color-sand)' }}>Food Made With <span style={{ color: 'var(--color-earth-brown)' }}>Love & Purity</span></h2>
                        <br />
                        <p className="philosophy-text" style={{ fontSize: '1.1rem', color: 'var(--color-sand)', lineHeight: '1.8', opacity: 0.9 }}>
                            Ancient Indian culture views food (Anna) not just as physical fuel, but as a divine manifestation (Brahman) directly linked to the health of the body, mind, and the spirit. The lifestyle was based on Sattva (purity), moderation, and living in harmony with nature.
                        </p>
                        <br />
                        <p className="philosophy-text" style={{ fontSize: '1.1rem', color: 'var(--color-sand)', lineHeight: '1.8', opacity: 0.9 }}>
                            At Videeptha , we look backwards to move forward. Our approach is grounded in Ayurvedic principles and ancient village wisdom. We meticulously research every raw material, working directly with soil-conscious farmers, and have worked meticulously on each and every recipe to bring better health and authentic taste to you and your family.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="philosophy-image-wrapper"
                        style={{ backgroundColor: 'var(--color-sand)', borderRadius: '16px', border: '1px solid var(--color-forest)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', overflow: 'hidden' }}
                    >
                        <div style={{ padding: '2rem 2rem 1.5rem 2rem' }}>
                            <h3 className="sanskrit-text text-center text-forest" style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                                अन्नं ब्रह्म रसो विष्णुः, भोक्ता देवो महेश्वरः।<br />
                                एवम् ज्ञात्वा तु यो भुङ्क्ते, अन्नदोषो न लिप्यते॥
                            </h3>
                            <p className="text-center" style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--color-forest)', opacity: 0.8 }}>
                                "Food is Brahma, its taste is Vishnu, and the consumer is Shiva. Knowing this, the one who eats is not tainted by any impurities of the food."
                            </p>
                            <div style={{ width: '50px', height: '2px', backgroundColor: 'var(--color-terra)', margin: '0 auto 1rem' }}></div>
                            <p className="text-center" style={{ fontSize: '0.9rem', color: 'var(--color-forest)' }}>— Bhojan Mantra (Common Mealtime Prayer)</p>
                        </div>
                        {/* Video 4 (Chanting/Mantra) - Muted by default, unmuting on hover */}
                        <div style={{ width: '100%', borderTop: '2px solid var(--color-forest)' }}>
                            <video
                                ref={philosophyVideoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                onMouseEnter={() => handlePhilosophyVideoHover(true)}
                                onMouseLeave={() => handlePhilosophyVideoHover(false)}
                                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '400px', objectFit: 'cover' }}
                            >
                                <source src="/assets/video4.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Us Section - REFINED & MOVED */}
            <section id="about-us" className="about-section" style={{ backgroundColor: '#FDF5E6', padding: '6rem 2rem' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerVariants}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', textAlign: 'center' }}
                    >
                        <motion.div variants={fadeUpVariant}>
                            <h2 style={{ fontSize: '3rem', color: 'var(--color-forest)', marginBottom: '2rem', fontFamily: 'serif' }}>About Us</h2>

                            <p style={{ fontSize: '1.5rem', color: 'var(--color-forest)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                We, <strong style={{ color: 'var(--color-terra)', fontSize: '1.7rem' }}>Vidya – Pradeep</strong>, want to bring a unique blend of foods & a small healthy revolution in every kitchen.
                            </p>

                            <p style={{ fontSize: '1.8rem', color: 'var(--color-terra)', fontStyle: 'italic', fontWeight: '600', marginBottom: '3rem' }}>
                                "Finding tasty & healthy food isn’t harder anymore."
                            </p>

                            <div style={{ backgroundColor: 'white', padding: '3.5rem 2rem', borderRadius: '32px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', border: '1px solid rgba(139, 69, 19, 0.05)', marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--color-terra)', marginBottom: '1.5rem', fontFamily: 'serif' }}>Food!!!!!</h3>
                                <p style={{ fontSize: '1.25rem', color: 'var(--color-bark)', lineHeight: '1.9', marginBottom: '2rem' }}>
                                    A beautiful unsaid, unspoken, unsung expression.<br />
                                    But valued, celebrated, cherished, loved – enjoyed emotion.<br />
                                    My karma questioned me to a journey of finding the essence of my life.<br />
                                    And service is the only thing I can do to satisfy my soul.<br />
                                    And food is one such positive karma towards society.
                                </p>

                                <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--color-forest)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                                    "Fasten, speed up, get indulged in love of real food."
                                </p>

                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-forest)' }}>— Love Vidya</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Sanskrit Quote Break - NOW FOREST */}
            <section className="quote-section bg-forest-textured" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerVariants}
                    className="quote-content"
                    style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}
                >
                    <motion.div variants={scaleVariant} className="quote-sloka" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-sand)' }}>
                        अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः।
                    </motion.div>
                    <motion.div variants={scaleVariant} className="quote-translation" style={{ fontSize: '1.3rem', color: 'var(--color-wheat)' }}>
                        "The Divine digests food in four ways within living beings." <br /> — Bhagavad Gita (15.14)
                    </motion.div>
                    <motion.p variants={flyInRightVariant} style={{ marginTop: '2rem', fontSize: '1rem', color: 'var(--color-sand)', opacity: 0.8, maxWidth: '600px', margin: '2rem auto 0' }}>
                        Ancient Indian medicine emphasizes that the body is nourished by the "fire" of digestion. At Videeptha Foods, we honor this fire by preparing foods that are easy to digest, unpolished, and naturally potent.
                    </motion.p>
                </motion.div>
            </section>

            {/* Our Nature - Scrolling Marquee Section - NOW BROWN */}
            <section id="our-nature" className="pillars-section bg-brown-textured" style={{ padding: '6rem 0', overflow: 'hidden' }}>
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    style={{ color: 'var(--color-sand)', fontSize: '3.5rem', marginBottom: '4rem', textAlign: 'center', position: 'relative', zIndex: 1 }}
                >
                    Our Nature
                </motion.h2>

                <div className="marquee-wrapper" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="marquee-content">
                        {[1, 2].map((set) => (
                            <React.Fragment key={set}>
                                <div className="marquee-card" style={{ backgroundColor: 'var(--color-olive)', border: '1px solid var(--color-sand)' }}>
                                    <Sprout size={40} style={{ color: 'var(--color-sand)', marginBottom: '1.5rem' }} />
                                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--color-sand)' }}>Unpolished Grains</h3>
                                    <p style={{ color: 'var(--color-sand)', opacity: 0.9, lineHeight: '1.6' }}>Polishing strips away vital nutrients. Our millets retain their bran layer, providing maximum dietary fiber and slow-release energy.</p>
                                </div>
                                <div className="marquee-card" style={{ backgroundColor: 'var(--color-wheat)', border: '1px solid var(--color-olive)' }}>
                                    <Sun size={40} style={{ color: 'var(--color-forest)', marginBottom: '1.5rem' }} />
                                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--color-forest)' }}>Zero Refined Sugar</h3>
                                    <p style={{ color: 'var(--color-forest)', opacity: 0.9, lineHeight: '1.6' }}>We believe sweetness should come from nature, not factories. We use only pure, unrefined jaggery and raw honey.</p>
                                </div>
                                <div className="marquee-card" style={{ backgroundColor: 'var(--color-olive)', border: '1px solid var(--color-sand)' }}>
                                    <ShieldCheck size={40} style={{ color: 'var(--color-sand)', marginBottom: '1.5rem' }} />
                                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--color-sand)' }}>Direct Sourcing</h3>
                                    <p style={{ color: 'var(--color-sand)', opacity: 0.9, lineHeight: '1.6' }}>We trace every ingredient back to the earth. By working directly with village farmers, we ensure fair trade and untampered crop quality.</p>
                                </div>
                                <div className="marquee-card" style={{ backgroundColor: 'var(--color-wheat)', border: '1px solid var(--color-olive)' }}>
                                    <Droplet size={40} style={{ color: 'var(--color-forest)', marginBottom: '1.5rem' }} />
                                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--color-forest)' }}>Honest Processing</h3>
                                    <p style={{ color: 'var(--color-forest)', opacity: 0.9, lineHeight: '1.6' }}>From wooden-churned (Chekku) cold-pressed oils to stone-ground flours, we preserve delicate antioxidants heat would destroy.</p>
                                </div>
                                <div className="marquee-card" style={{ backgroundColor: 'var(--color-olive)', border: '1px solid var(--color-sand)' }}>
                                    <Leaf size={40} style={{ color: 'var(--color-sand)', marginBottom: '1.5rem' }} />
                                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--color-sand)' }}>Sattvic Mindset</h3>
                                    <p style={{ color: 'var(--color-sand)', opacity: 0.9, lineHeight: '1.6' }}>Food is spiritual fuel. Every recipe is meticulously tested to ensure it brings balance, health, and clean energy to your family.</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* Explore All Products Banner - NOW OLIVE */}
            <section className="explore-banner-section bg-olive-textured" style={{ overflow: 'hidden' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.5fr) 1fr', gap: '0', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px', display: 'flex' }}
                    >
                        <img
                            src="/assets/background.png"
                            alt="Videeptha Foods Products Range"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, transparent, rgba(250, 247, 242, 0.4))' }}></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}
                    >
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--color-sand)', marginBottom: '1rem', lineHeight: '1.2' }}>Discover Our Entire Range</h3>
                        <p style={{ color: 'var(--color-forest)', opacity: 0.8, fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>Explore over 600+ authentic, untouched products from the heart of our villages.</p>
                        <Link to="/products" className="btn btn-forest" style={{ alignSelf: 'flex-start' }}>
                            WAY TO YOUR GRANDMA KITCHEN
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
