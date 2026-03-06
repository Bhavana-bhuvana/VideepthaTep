import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeUpVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const pinnedStories = [
        {
            name: "Vidya",
            content: (
                <>
                    <p>Our elders taught us how to live and eat. I realised sooner, hope you do as well.</p>
                    <p>As a food lover, my question was big, but small enough to understand.</p>
                    <p>Why can't a marriage between <strong>tasty & healthy</strong> happen?</p>
                    <p>I grew up eating millets and then from the past two years, I was working hard on how to reach everyone with this <strong>marriage alliance</strong>, which universally can be celebrated.</p>
                    <p>Walk just a step ahead and join hands against <strong>Diabetes, weaker immune system & fat-related problems</strong>, and many more.</p>
                </>
            ),
            signature: "Vidya Shree"
        },
        {
            name: "Pradeep",
            content: (
                <>
                    <p>When initially I refused to incorporate millets in my daily life,</p>
                    <p>My partner shared with me a simple but huge knowledge — <strong>what millets are</strong>.</p>
                    <p>Then now I'm replacing well with our products from the past few years.</p>
                    <p>As the changes must start from <strong>our own house</strong>.</p>
                    <p>My step towards <strong>reality, healthy, fit and gut-friendly life</strong> has started.</p>
                    <p>Do you? Let us know.</p>
                </>
            ),
            signature: "P V Pradeep"
        }
    ];

    const customerStories = [
        { name: "Pradeep", text: "For Deepavali, I wanted sweets my parents could enjoy without worrying about BP and sugar levels. I ordered millet sweets and halwa here, and the taste surprised everyone at home. Healthy, traditional, and truly satisfying." },
        { name: "Selvi", text: "As a mother, I'm always searching for healthier options for my kids. When my daughter’s school, Prarthana Public School, suggested healthier snacks, I tried the health mix and laddu kit from here. Now it has become part of our daily routine." },
        { name: "Nirmala", text: "Being a foodie in my 40s, I wanted food that keeps my taste buds happy without harming my health. A friend introduced me to these millet snacks and breakfast mixes. Now I enjoy my food guilt-free every day." },
        { name: "Shivakumar", text: "After turning 50, my doctor asked me to change my diet. I started looking for healthier alternatives and discovered these millet foods. The taste reminded me of homemade village food while taking care of my health." },
        { name: "Shivaraj", text: "I came across their page on social media while searching for healthy snacks. Later a friend also recommended them, so I decided to try their millet pancakes and sweets. It felt like finding the perfect balance between health and taste." },
        { name: "Karthick", text: "Living in the city made me miss the traditional snacks from my village. When I tried these millet laddus and murukku, it felt nostalgic. Healthy food that brings back childhood memories is truly special." },
        { name: "Nirosha", text: "As someone who monitors sugar levels carefully, I always hesitate to eat sweets. But these millet-based sweets gave me the confidence to enjoy a little sweetness again. Finally, desserts that care for health too." },
        { name: "Suguna", text: "Cooking every day became difficult with my busy schedule. The millet instant mixes here helped me prepare healthy breakfasts quickly. My family now starts the day with something nutritious." },
        { name: "Lakshmi", text: "I was looking for healthy snacks for my children’s evening hunger. The millet cookies and laddus became their favorite instantly. I feel happy giving them snacks that are both tasty and nutritious." },
        { name: "Ramesh", text: "My father has BP issues and loves traditional sweets. These millet sweets allowed him to enjoy his favorite flavors without worry. It made our family celebrations sweeter." },
        { name: "Meena", text: "I always believed healthy food means compromising taste. But after trying these millet chocolates and snacks, my opinion completely changed. Health can actually be delicious." },
        { name: "Suresh", text: "Working long hours means I often depend on instant food. The millet breakfast mixes here are quick to make and surprisingly filling. It feels like homemade food even on busy mornings." },
        { name: "Kavitha", text: "As a mother, my biggest concern is my family’s health. These millet laddus and health mixes gave me a natural way to add nutrition to our meals. Even my picky kids enjoy them." },
        { name: "Rajesh", text: "I was trying to reduce refined sugar and unhealthy snacks. These millet snacks helped me switch to better eating habits without missing taste. It’s a small change that made a big difference." },
        { name: "Anitha", text: "Festival seasons usually mean too many sugary sweets. This time I tried millet sweets for our family gathering. Everyone loved the taste and appreciated the healthy twist." },
        { name: "Dinesh", text: "My grandmother always spoke about the benefits of millets. When I tried these millet foods, it reminded me of her traditional recipes. It feels like bringing back old wisdom into modern life." },
        { name: "Rekha", text: "As someone trying to maintain fitness, snacks were always my weakness. These millet cookies and laddus became my perfect guilt-free treat. Healthy snacking finally feels possible." },
        { name: "Mohan", text: "Traveling for work made it difficult to eat healthy. These millet snacks became my go-to food during long journeys. Nutritious and easy to carry." },
        { name: "Priya", text: "My kids love chocolates, but I worry about sugar. The millet chocolates here gave me a healthier option without taking away their happiness. A win for both kids and parents." },
        { name: "Arun", text: "I was searching for something light yet filling for breakfast. The millet pancake mix here turned out to be perfect. Healthy mornings started becoming a habit." },
        { name: "Gayathri", text: "I wanted to introduce millets to my family but didn’t know how. These ready mixes made the transition easy and tasty. Now millets are part of our daily meals." },
        { name: "Manjunath", text: "My doctor suggested adding more fiber and natural foods to my diet. These millet snacks helped me follow that advice without feeling restricted. Healthier eating became enjoyable." },
        { name: "Shobha", text: "Evenings with tea always needed a good snack. The millet murukku and cookies became our family favorite. Crunchy, tasty, and healthier than usual snacks." },
        { name: "Vijay", text: "I missed the taste of homemade village sweets. When I tried these millet laddus and halwa, the flavors felt authentic and comforting. It’s like tasting tradition again." },
        { name: "Deepa", text: "I always look for foods that nourish both body and mind. These millet foods felt natural, wholesome, and satisfying. Sometimes the healthiest choices are also the most delicious." }
    ];

    const cateringStories = [
        { name: "Karthick", type: "Office Event Catering", text: "For our office wellness event, we wanted food that was both healthy and affordable. We chose their millet-based catering menu with breakfast items, laddus, and snacks. Everyone appreciated the taste and the unique healthy concept." },
        { name: "Nirosha", type: "Birthday Function", text: "For my daughter’s birthday, I wanted something different from regular junk food. Their millet snacks, sweets, and mini pancakes were perfect for kids and elders. It was healthy, tasty, and also budget-friendly for our small celebration." },
        { name: "Suguna", type: "Family Function", text: "During our family gathering, we decided to try millet-based catering instead of the usual oily dishes. The food felt light, nutritious, and still very delicious. Many relatives asked us where we ordered it from." },
        { name: "Manjunath", type: "School Program", text: "For a school health awareness program, we arranged millet snacks and sweets through their catering service. The food was simple, nutritious, and within our budget. It was a great way to introduce children to healthier eating." }
    ];

    const backgroundOrder = ['var(--color-sand)', 'var(--color-wheat)', 'var(--color-olive)', 'var(--color-forest)'];

    return (
        <div className="about-container" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>

            {/* Header Section */}
            <section className="bg-forest" style={{ padding: '6rem 2rem 4rem', textAlign: 'center' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: '4rem', color: 'var(--color-sand)', marginBottom: '1rem' }}
                >
                    Millet Food Stories
                </motion.h1>
                <div style={{ width: '80px', height: '3px', backgroundColor: 'var(--color-terra)', margin: '0 auto 2rem' }}></div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{ color: 'var(--color-sand)', fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto', lineHeight: '1.8', fontStyle: 'italic' }}
                >
                    "Finding tasty & healthy food isn't harder anymore."
                </motion.p>
            </section>

            {/* Pinned Stories (Vidya & Pradeep) */}
            {pinnedStories.map((story, index) => (
                <section key={story.name} style={{ backgroundColor: index % 2 === 0 ? 'var(--color-sand)' : 'var(--color-wheat)', padding: '6rem 2rem' }}>
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUpVariant}
                            style={{ textAlign: 'center' }}
                        >
                            <h2 style={{ fontSize: '3rem', color: 'var(--color-forest)', marginBottom: '2rem' }}>{story.name}</h2>
                            <div style={{ fontSize: '1.3rem', color: 'var(--color-bark)', lineHeight: '1.8', marginBottom: '2rem' }}>
                                {story.content}
                            </div>
                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-terra)' }}>— {story.signature}</p>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* Customer Stories Grid */}
            <section style={{ backgroundColor: 'var(--color-sand)', padding: '6rem 2.5rem' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '4rem', color: 'var(--color-forest)' }}>Voices of Our Family</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {customerStories.map((story, idx) => {
                            const bgColor = backgroundOrder[idx % 4];
                            const isDark = bgColor === 'var(--color-olive)' || bgColor === 'var(--color-forest)';
                            return (
                                <motion.div
                                    key={idx}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.9, y: 30 },
                                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, delay: (idx % 3) * 0.1 } }
                                    }}
                                    style={{
                                        backgroundColor: bgColor,
                                        padding: '2.5rem',
                                        borderRadius: '24px',
                                        color: isDark ? 'var(--color-sand)' : 'var(--color-bark)',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <p style={{ fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2rem', fontStyle: 'italic', opacity: 0.95 }}>
                                        "{story.text}"
                                    </p>
                                    <div>
                                        <div style={{ width: '40px', height: '2px', backgroundColor: isDark ? 'rgba(255,255,255,0.3)' : 'var(--color-terra)', marginBottom: '1rem' }}></div>
                                        <h4 style={{ fontSize: '1.5rem', color: isDark ? 'var(--color-sand)' : 'var(--color-forest)' }}>{story.name}</h4>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Catering Stories Section */}
            <section style={{ backgroundColor: 'var(--color-forest)', padding: '8rem 2.5rem' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3.5rem', textAlign: 'center', color: 'var(--color-wheat)', marginBottom: '1rem' }}>Celebrating Healthy Occasions</h2>
                    <p style={{ color: 'var(--color-sand)', textAlign: 'center', fontSize: '1.2rem', opacity: 0.8, marginBottom: '5rem', maxWidth: '700px', margin: '0 auto 5rem' }}>
                        From office gatherings to family celebrations, our millet-catering brings wholesomeness to every event.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
                        {cateringStories.map((story, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUpVariant}
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(227, 217, 198, 0.2)',
                                    padding: '3rem',
                                    borderRadius: '30px',
                                    color: 'var(--color-sand)'
                                }}
                            >
                                <h3 style={{ color: 'var(--color-wheat)', fontSize: '1.8rem', marginBottom: '1rem' }}>{story.type}</h3>
                                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2.5rem', opacity: 0.9 }}>
                                    "{story.text}"
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-terra)' }}></div>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{story.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Footer Quote */}
            <section className="bg-sand" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontStyle: 'italic', lineHeight: '1.5', marginBottom: '2rem' }}>
                        "Sometimes the healthiest choices are also the most delicious."
                    </p>
                    <div style={{ width: '50px', height: '2px', backgroundColor: 'var(--color-terra)', margin: '0 auto' }}></div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
