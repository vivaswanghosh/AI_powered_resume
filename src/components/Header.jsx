import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    const isBuilder = location.pathname === '/builder'

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold gradient-text">ResumeAI</span>
                </Link>

                <nav className="flex items-center gap-4">
                    {!isBuilder && (
                        <Link
                            to="/builder"
                            className="btn-primary text-sm px-5 py-2.5"
                        >
                            Get Started
                        </Link>
                    )}
                    {isBuilder && (
                        <Link
                            to="/"
                            className="btn-secondary text-sm px-5 py-2.5"
                        >
                            ← Home
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    )
}
