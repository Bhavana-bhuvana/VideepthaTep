import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email, message } = formData;
        const subject = encodeURIComponent(`New Enquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:videepthafoods1602@gmail.com?subject=${subject}&body=${body}`;
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <footer id="contact" className="footer-section bg-forest" style={{ padding: '4rem 2rem', borderTop: '1px solid rgba(250, 247, 242, 0.1)' }}>
            <div className="footer-grid">
                {/* Contact Info */}
                <div>
                    <h2 style={{ color: 'var(--color-sand)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Contact Us</h2>
                    <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-terra)', marginBottom: '2rem' }}></div>
                    <p style={{ color: 'var(--color-sand)', opacity: 0.8, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '400px' }}>
                        Have questions about our ancient food processes, bulk orders, or sourcing? We'd love to hear from you.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <a href="tel:+916361087282" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }} className="contact-link">
                            <div style={{ backgroundColor: 'rgba(250, 247, 242, 0.1)', padding: '12px', borderRadius: '50%' }}>
                                <Phone size={24} color="var(--color-sand)" />
                            </div>
                            <div>
                                <p style={{ color: 'var(--color-sand)', opacity: 0.7, fontSize: '0.9rem', marginBottom: '4px' }}>Vidyashree R (Call/Enquiry)</p>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-sand)', fontWeight: 'bold' }}>+91 63610 87282</p>
                            </div>
                        </a>

                        <a href="tel:+919010056902" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }} className="contact-link">
                            <div style={{ backgroundColor: 'rgba(250, 247, 242, 0.1)', padding: '12px', borderRadius: '50%' }}>
                                <Phone size={24} color="var(--color-sand)" />
                            </div>
                            <div>
                                <p style={{ color: 'var(--color-sand)', opacity: 0.7, fontSize: '0.9rem', marginBottom: '4px' }}>PV Pradeep</p>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-sand)', fontWeight: 'bold' }}>+91 90100 56902</p>
                            </div>
                        </a>

                        <a href="mailto:videepthafoods1602@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }} className="contact-link">
                            <div style={{ backgroundColor: 'rgba(250, 247, 242, 0.1)', padding: '12px', borderRadius: '50%' }}>
                                <Mail size={24} color="var(--color-sand)" />
                            </div>
                            <div>
                                <p style={{ color: 'var(--color-sand)', opacity: 0.7, fontSize: '0.9rem', marginBottom: '4px' }}>Email</p>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-sand)', fontWeight: 'bold' }}>videepthafoods1602@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://chat.whatsapp.com/BiR3OzOymP9Lg5YnNEZrCR?mode=gi_t" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }} className="contact-link">
                            <div style={{ backgroundColor: 'rgba(37, 211, 102, 0.15)', padding: '12px', borderRadius: '50%' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-sand)" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </div>
                            <div>
                                <p style={{ color: 'var(--color-sand)', opacity: 0.7, fontSize: '0.9rem', marginBottom: '4px' }}>WhatsApp Group</p>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-sand)', fontWeight: 'bold' }}>Join our Community</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Enquiry Form */}
                <div className="contact-form" style={{ backgroundColor: 'rgba(250, 247, 242, 0.05)', border: '1px solid rgba(250, 247, 242, 0.1)' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--color-sand)', marginBottom: '1.5rem' }}>Send an Enquiry</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                className="form-input form-textarea"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-light" style={{ width: '100%' }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
