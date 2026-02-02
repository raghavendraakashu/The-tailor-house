'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { useState } from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const connectLinks = [
        { label: 'Instagram', href: '#' },
        {
            label: 'WhatsApp',
            subLinks: [
                { label: '+91 84315 56694', href: 'https://wa.me/918431556694?text=I%20would%20like%20to%20inquire%20about%20a%20consultation', target: '_blank' },
                { label: '+91 99025 35408', href: 'https://wa.me/919902535408?text=I%20would%20like%20to%20inquire%20about%20a%20consultation', target: '_blank' }
            ]
        },
        { label: 'Email', href: 'mailto:opuleanceelysian@gmail.com?subject=Bespoke%20Inquiry' }
    ];

    return (
        <footer className="w-full bg-background text-secondary py-16 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                {/* Brand / Left */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-serif text-foreground uppercase tracking-wider">
                        Tailor House
                    </h2>
                    <div className="text-sm font-light space-y-1">
                        <p>The TAILOR House, 42 Commercial Street</p>
                        <p>Tasker Town, Bangalore 560001</p>
                    </div>
                </div>

                {/* Links / Right */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm font-medium tracking-wide">
                    <LinkGroup title="Connect" links={connectLinks} />
                    <div className="flex flex-col gap-4">
                        <span className="text-xs uppercase tracking-widest opacity-50">Discover</span>
                        <Link
                            href="/bespoke-suits-bangalore"
                            className="text-sm text-muted-foreground hover:text-foreground transition"
                        >
                            Bespoke Suits Bangalore
                        </Link>
                        <Link
                            href="/wedding-tailor-bangalore"
                            className="text-sm text-muted-foreground hover:text-foreground transition"
                        >
                            Wedding Tailor Bangalore
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center text-xs opacity-40 font-light border-t border-white/5 pt-8">
                <p>&copy; {currentYear} Tailor House. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Crafted by Fjord.</p>
            </div>
        </footer>
    );
};

type LinkItemProps = {
    label: string;
    href?: string;
    target?: string;
    subLinks?: LinkItemProps[];
};

const LinkGroup = ({ title, links }: { title: string; links: LinkItemProps[] }) => (
    <div className="flex flex-col gap-4">
        <span className="text-xs uppercase tracking-widest opacity-50">{title}</span>
        <ul className="flex flex-col gap-2">
            {links.map((link, index) => (
                <LinkItem key={index} {...link} />
            ))}
        </ul>
    </div>
);

const LinkItem = ({ label, href, target, subLinks }: LinkItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    if (subLinks) {
        return (
            <li>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="hover:text-accent transition-colors duration-300 flex items-center gap-2 group text-left"
                >
                    {label}
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="text-[10px] opacity-60 group-hover:text-accent"
                    >
                        ▼
                    </motion.span>
                </button>
                <motion.ul
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden pl-4 flex flex-col gap-2 border-l border-white/10 ml-1 mt-1"
                >
                    <div className="py-1 flex flex-col gap-2">
                        {subLinks.map((sub, idx) => (
                            <li key={idx}>
                                <motion.a
                                    href={sub.href}
                                    target={sub.target}
                                    rel={sub.target === '_blank' ? 'noopener noreferrer' : undefined}
                                    className="hover:text-accent transition-colors duration-300 block text-xs opacity-80 hover:opacity-100"
                                    whileHover={{ x: 3 }}
                                >
                                    {sub.label}
                                </motion.a>
                            </li>
                        ))}
                    </div>
                </motion.ul>
            </li>
        );
    }

    return (
        <li>
            <motion.a
                href={href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className="hover:text-accent transition-colors duration-300 block"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {label}
            </motion.a>
        </li>
    );
};

export default Footer;
