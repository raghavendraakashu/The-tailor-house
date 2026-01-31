'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export default function ChatWidget() {
    type Message = {
        text: string;
        sender: 'user' | 'bot';
    };

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "Welcome to The Tailor House. I am your personal concierge. How may I assist you with your wardrobe today?", sender: 'bot' }
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const toggleChat = () => setIsOpen(!isOpen);

    const getBotResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();

        // Greetings
        if (lowerInput === 'hi' || lowerInput === 'hello' || lowerInput.includes('good morning') || lowerInput.includes('good evening')) {
            return "Good day. Welcome to The Tailor House. It is a pleasure to have you with us. How may I be of service?";
        }
        if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
            return "You are most welcome. It is our privilege to assist you.";
        }
        if (lowerInput.includes('bye') || lowerInput.includes('goodbye')) {
            return "Goodbye. We look forward to welcoming you to our atelier soon.";
        }

        // Suit Types
        if (lowerInput.includes('type') || lowerInput.includes('style') || lowerInput.includes('suit') && (lowerInput.includes('what') || lowerInput.includes('kind'))) {
            return "We specialize in a variety of bespoke cuts: The Classic British (structured, strong shoulders), The Italian (soft, lightweight, unstructured), and The Modern Slim Fit. We also craft Tuxedos, Bandhgalas, and Sherwanis.";
        }
        if (lowerInput.includes('tuxedo') || lowerInput.includes('dinner jacket')) {
            return "Our tuxedos are crafted with satin or grosgrain lapels, offering a timeless Black Tie look. Perfect for galas and evening weddings.";
        }
        if (lowerInput.includes('sherwani') || lowerInput.includes('bandhgala') || lowerInput.includes('ethnic')) {
            return "Our ethnic wear blends traditional royal aesthetics with modern tailoring. Hand-embroidered velvet sherwanis and sharp Bandhgalas are our specialty.";
        }

        // Occasions
        if (lowerInput.includes('wedding') || lowerInput.includes('groom') || lowerInput.includes('marriage')) {
            return "For weddings, we offer comprehensive grooming packages including the Sherwani for the main ceremony, a Tuxedo for the reception, and suits for other functions. We also dress groomsmen.";
        }
        if (lowerInput.includes('business') || lowerInput.includes('work') || lowerInput.includes('office') || lowerInput.includes('corporate')) {
            return "For business, we recommend our Classic British cut in navy or charcoal wool. It commands authority while ensuring comfort for long days.";
        }
        if (lowerInput.includes('party') || lowerInput.includes('reception') || lowerInput.includes('event')) {
            return "For receptions and parties, a velvet blazer or a midnight blue tuxedo is an excellent choice to stand out with elegance.";
        }

        // Basic Info
        if (lowerInput.includes('appointment') || lowerInput.includes('book') || lowerInput.includes('schedule')) {
            return "We recommend booking a private consultation. You can schedule one via the 'Book Appointment' button or contact us on WhatsApp at +91 84315 56694.";
        }
        if (lowerInput.includes('location') || lowerInput.includes('address') || lowerInput.includes('where')) {
            return "Our private atelier is located at 42 Commercial Street, Tasker Town, Bangalore 560001. Valet parking is available.";
        }
        if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('rate')) {
            return "Our pricing reflects the bespoke nature of our work and the premium fabrics used. We invite you to contact us directly for a personalized quote based on your requirements.";
        }

        return "Thank you. I have noted your query. A senior concierge will review your request and get back to you shortly using the contact details provided.";
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        const userMsg = message;
        setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
        setMessage('');
        setIsTyping(true);

        setTimeout(() => {
            const botReply = getBotResponse(userMsg);
            setMessages(prev => [...prev, { text: botReply, sender: 'bot' }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 w-[350px] bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
                            <div>
                                <h3 className="text-foreground font-serif text-lg">Concierge</h3>
                                <p className="text-secondary text-xs uppercase tracking-wider">Online</p>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="text-secondary hover:text-foreground transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="h-[300px] p-4 overflow-y-auto flex flex-col gap-4">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`p-3 rounded-lg max-w-[85%] text-sm leading-relaxed ${msg.sender === 'bot'
                                        ? 'self-start bg-white/10 text-white/90 rounded-tl-none'
                                        : 'self-end bg-accent text-black rounded-tr-none'
                                        }`}
                                >
                                    <p>{msg.text}</p>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="self-start bg-white/10 text-white/90 p-3 rounded-lg rounded-tl-none max-w-[85%]">
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-white/5">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full bg-black/40 border border-white/10 rounded-full py-3 px-4 pr-12 text-sm text-foreground placeholder:text-neutral-500 focus:outline-none focus:border-accent/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-accent hover:text-white transition-colors"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleChat}
                className="h-14 w-14 rounded-full bg-accent text-black flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
}
