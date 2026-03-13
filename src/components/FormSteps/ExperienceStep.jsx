export default function ExperienceStep({ data, updateArrayItem, addArrayItem, removeArrayItem }) {
    return (
        <div className="space-y-5">
            <h2 className="text-2xl font-bold text-white mb-2">Work Experience</h2>
            <p className="text-surface-400 text-sm mb-6">Describe your work experience. AI will transform these into professional bullet points.</p>

            {data.experience.map((exp, index) => (
                <div key={index} className="card p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary-400">Experience #{index + 1}</span>
                        {data.experience.length > 1 && (
                            <button
                                onClick={() => removeArrayItem('experience', index)}
                                className="text-red-400 hover:text-red-300 text-sm transition-colors"
                            >
                                Remove
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="input-label">Job Title *</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Software Engineer"
                                value={exp.title}
                                onChange={e => updateArrayItem('experience', index, 'title', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="input-label">Company *</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Google"
                                value={exp.company}
                                onChange={e => updateArrayItem('experience', index, 'company', e.target.value)}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="input-label">Duration</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="June 2022 - Present"
                                value={exp.duration}
                                onChange={e => updateArrayItem('experience', index, 'duration', e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="input-label">Description</label>
                        <textarea
                            className="input-field"
                            placeholder="Describe your responsibilities and achievements. Be specific — AI will enhance this into professional bullet points..."
                            rows={4}
                            value={exp.description}
                            onChange={e => updateArrayItem('experience', index, 'description', e.target.value)}
                        />
                        <p className="text-xs text-surface-500 mt-1">Tip: Include metrics and outcomes for best AI enhancement results.</p>
                    </div>
                </div>
            ))}

            <button
                onClick={() => addArrayItem('experience', { title: '', company: '', duration: '', description: '' })}
                className="btn-secondary text-sm px-4 py-2 w-full"
            >
                + Add Experience
            </button>
        </div>
    )
}
