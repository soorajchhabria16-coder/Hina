"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            // Formspree endpoint
            const response = await fetch("https://formspree.io/f/xeelnokg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                const result = await response.json();
                setErrorMessage(result.error || "Something went wrong. Please try again.");
                setStatus("error");
            }
        } catch (error) {
            setErrorMessage("Network error. Please check your connection and try again.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-10 md:p-14 border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-white/10 text-white rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20"></div>
                    <CheckCircle2 className="w-12 h-12 text-white relative z-10" />
                </div>
                <div className="space-y-3">
                    <h3 className="text-4xl font-serif font-bold text-white">Message Sent!</h3>
                    <p className="text-xl text-white/70 font-light leading-relaxed max-w-sm">
                        Thank you for reaching out, Hina. I&apos;ll review your message and get back to you shortly.
                    </p>
                </div>
                <button
                    onClick={() => setStatus("idle")}
                    className="px-10 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-8 md:p-14 border border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Decorative background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 ml-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            disabled={status === "loading"}
                            className="w-full bg-white/10 border border-white/5 rounded-2xl p-5 text-white placeholder-white/20 focus:ring-2 focus:ring-white/30 focus:bg-white/20 outline-none transition-all disabled:opacity-50"
                            placeholder="Jane Doe"
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 ml-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            disabled={status === "loading"}
                            className="w-full bg-white/10 border border-white/5 rounded-2xl p-5 text-white placeholder-white/20 focus:ring-2 focus:ring-white/30 focus:bg-white/20 outline-none transition-all disabled:opacity-50"
                            placeholder="jane@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 ml-1">Subject</label>
                    <div className="relative">
                        <select
                            id="subject"
                            name="subject"
                            required
                            disabled={status === "loading"}
                            aria-label="Select inquiry subject"
                            className="w-full bg-white/10 border border-white/5 rounded-2xl p-5 text-white focus:ring-2 focus:ring-white/30 focus:bg-white/20 outline-none transition-all appearance-none cursor-pointer disabled:opacity-50"
                        >
                            <option value="" disabled selected className="bg-primary text-white/40">Select a subject...</option>
                            <option value="Clinical Inquiry" className="bg-[#135c58] text-white">Clinical Inquiry</option>
                            <option value="Academic Collaboration" className="bg-[#135c58] text-white">Academic Collaboration</option>
                            <option value="Research Opportunity" className="bg-[#135c58] text-white">Research Opportunity</option>
                            <option value="Other" className="bg-[#135c58] text-white">Other</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 ml-1">Your Message</label>
                    <textarea
                        name="message"
                        required
                        rows={4}
                        disabled={status === "loading"}
                        className="w-full bg-white/10 border border-white/5 rounded-2xl p-5 text-white placeholder-white/20 focus:ring-2 focus:ring-white/30 focus:bg-white/20 outline-none transition-all resize-none font-light disabled:opacity-50"
                        placeholder="Describe how I can support you..."
                    ></textarea>
                </div>

                {status === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-200 text-sm animate-in slide-in-from-top-2 duration-300">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p>{errorMessage}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-6 bg-white text-primary font-bold rounded-2xl hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-2xl shadow-black/20 text-lg uppercase tracking-widest flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed group/btn"
                >
                    {status === "loading" ? (
                        <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <span>Send Message</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
