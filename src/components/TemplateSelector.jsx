const templates = [
    {
        id: 'modern',
        name: 'Modern',
        description: 'Bold colors, gradient header, clean sections',
        colors: ['#6366f1', '#8b5cf6'],
        preview: (
            <div className="space-y-1.5">
                <div className="h-6 rounded bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div className="h-1.5 w-3/4 rounded bg-gray-300" />
                <div className="h-1.5 w-1/2 rounded bg-gray-300" />
                <div className="h-1 w-full rounded bg-indigo-200 mt-2" />
                <div className="h-1.5 w-full rounded bg-gray-200" />
                <div className="h-1.5 w-2/3 rounded bg-gray-200" />
            </div>
        )
    },
    {
        id: 'minimal',
        name: 'Minimal',
        description: 'Elegant typography, clean and professional',
        colors: ['#374151', '#6b7280'],
        preview: (
            <div className="space-y-1.5">
                <div className="h-4 w-2/3 mx-auto rounded bg-gray-800" />
                <div className="h-1 w-1/2 mx-auto rounded bg-gray-400" />
                <div className="h-px w-full bg-gray-800 mt-2" />
                <div className="h-1 w-1/4 rounded bg-gray-400 mt-1" />
                <div className="h-1.5 w-full rounded bg-gray-200" />
                <div className="h-1.5 w-3/4 rounded bg-gray-200" />
            </div>
        )
    },
    {
        id: 'developer',
        name: 'Developer',
        description: 'Terminal-inspired, dark theme, code aesthetic',
        colors: ['#0f172a', '#22c55e'],
        preview: (
            <div className="space-y-1.5 bg-slate-900 p-2 rounded">
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
                <div className="h-1.5 w-1/3 rounded bg-green-500" />
                <div className="h-4 w-2/3 rounded bg-slate-700" />
                <div className="h-1.5 w-full rounded bg-slate-700" />
                <div className="h-1.5 w-3/4 rounded bg-slate-700" />
            </div>
        )
    }
]

export default function TemplateSelector({ selected, onSelect }) {
    return (
        <div className="space-y-4">
            <div>
                <h3 className="text-lg font-semibold text-white mb-1">Choose Template</h3>
                <p className="text-sm text-surface-400">Select a design that fits your style.</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
                {templates.map(t => (
                    <button
                        key={t.id}
                        onClick={() => onSelect(t.id)}
                        className={`template-card rounded-xl p-3 text-left ${selected === t.id
                                ? 'selected bg-white/10'
                                : 'bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06]'
                            }`}
                    >
                        <div className="rounded-lg overflow-hidden bg-white p-2 mb-2">
                            {t.preview}
                        </div>
                        <div className="text-sm font-medium text-white">{t.name}</div>
                        <div className="text-xs text-surface-400 mt-0.5">{t.description}</div>
                    </button>
                ))}
            </div>
        </div>
    )
}
