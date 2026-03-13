import { Link } from 'react-router-dom'

const features = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
        ),
        title: 'AI-Powered Content',
        desc: 'Transform your raw input into professional, ATS-friendly bullet points with Google Gemini AI.'
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
            </svg>
        ),
        title: 'Beautiful Templates',
        desc: 'Choose from Modern, Minimal, or Developer templates — each designed to make an impression.'
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Live Preview',
        desc: 'See your resume update in real-time as you type. What you see is what you get.'
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
        ),
        title: 'PDF Export',
        desc: 'Download your polished resume as a high-quality PDF, ready to submit anywhere.'
    },
]

const steps = [
    { num: '01', title: 'Enter Your Details', desc: 'Fill in your personal info, education, skills, and experience.' },
    { num: '02', title: 'AI Enhancement', desc: 'Let AI transform your content into professional, impactful descriptions.' },
    { num: '03', title: 'Choose Template', desc: 'Pick a template that matches your style and industry.' },
    { num: '04', title: 'Download PDF', desc: 'Export your polished resume and start applying!' },
]

export default function LandingPage() {
    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
                {/* Floating orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-300 mb-8 animate-fade-in">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                        </svg>
                        Powered by Google Gemini AI
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 animate-slide-up">
                        Create Your Perfect
                        <br />
                        <span className="gradient-text">Resume with AI</span>
                    </h1>

                    <p className="text-lg md:text-xl text-surface-400 max-w-2xl mx-auto mb-10 animate-slide-up stagger-2" style={{ opacity: 0 }}>
                        Transform your career details into a professional, ATS-friendly resume in seconds.
                        Let AI craft compelling content while you choose from stunning templates.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-3" style={{ opacity: 0 }}>
                        <Link to="/builder" className="btn-primary text-lg px-8 py-4 rounded-2xl flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Build Your Resume
                        </Link>
                        <a href="#features" className="btn-secondary text-lg px-8 py-4 rounded-2xl">
                            Learn More ↓
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-center gap-8 md:gap-16 mt-16 animate-fade-in stagger-4" style={{ opacity: 0 }}>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text">3</div>
                            <div className="text-sm text-surface-500">Templates</div>
                        </div>
                        <div className="w-px h-10 bg-surface-700" />
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text">AI</div>
                            <div className="text-sm text-surface-500">Powered</div>
                        </div>
                        <div className="w-px h-10 bg-surface-700" />
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text">PDF</div>
                            <div className="text-sm text-surface-500">Export</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Everything You Need to
                            <span className="gradient-text"> Stand Out</span>
                        </h2>
                        <p className="text-surface-400 max-w-xl mx-auto">
                            Our AI-powered platform handles the hard work so you can focus on landing your dream job.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((feat, i) => (
                            <div key={i} className="card group p-6">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                                    {feat.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{feat.title}</h3>
                                <p className="text-surface-400 leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            How It
                            <span className="gradient-text"> Works</span>
                        </h2>
                        <p className="text-surface-400 max-w-xl mx-auto">
                            Four simple steps to create your professional resume.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {steps.map((step, i) => (
                            <div key={i} className="relative card text-center p-6">
                                <div className="text-4xl font-black gradient-text mb-4">{step.num}</div>
                                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                                <p className="text-sm text-surface-400">{step.desc}</p>
                                {i < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 text-surface-600 text-2xl">→</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="card p-12 border-primary-500/20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Build Your
                            <span className="gradient-text"> Dream Resume?</span>
                        </h2>
                        <p className="text-surface-400 mb-8 max-w-lg mx-auto">
                            Join thousands of professionals who've transformed their careers with AI-powered resumes.
                        </p>
                        <Link to="/builder" className="btn-primary text-lg px-10 py-4 rounded-2xl inline-flex items-center gap-2">
                            Start Building Now
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-surface-800 py-8 px-6">
                <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-surface-500">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold gradient-text">ResumeAI</span>
                        <span>© 2026</span>
                    </div>
                    <div>Built with React & Gemini AI</div>
                </div>
            </footer>
        </main>
    )
}
