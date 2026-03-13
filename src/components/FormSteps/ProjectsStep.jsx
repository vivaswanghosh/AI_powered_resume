export default function ProjectsStep({ data, updateArrayItem, addArrayItem, removeArrayItem }) {
    return (
        <div className="space-y-5">
            <h2 className="text-2xl font-bold text-white mb-2">Projects</h2>
            <p className="text-surface-400 text-sm mb-6">Showcase your notable projects. AI will make them sound impressive.</p>

            {data.projects.map((proj, index) => (
                <div key={index} className="card p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary-400">Project #{index + 1}</span>
                        {data.projects.length > 1 && (
                            <button
                                onClick={() => removeArrayItem('projects', index)}
                                className="text-red-400 hover:text-red-300 text-sm transition-colors"
                            >
                                Remove
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="input-label">Project Name *</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="AI Resume Generator"
                                value={proj.name}
                                onChange={e => updateArrayItem('projects', index, 'name', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="input-label">Tech Stack</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="React, Node.js, MongoDB"
                                value={proj.techStack}
                                onChange={e => updateArrayItem('projects', index, 'techStack', e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="input-label">Description</label>
                        <textarea
                            className="input-field"
                            placeholder="Describe what the project does, your role, and key outcomes..."
                            rows={3}
                            value={proj.description}
                            onChange={e => updateArrayItem('projects', index, 'description', e.target.value)}
                        />
                    </div>
                </div>
            ))}

            <button
                onClick={() => addArrayItem('projects', { name: '', techStack: '', description: '' })}
                className="btn-secondary text-sm px-4 py-2 w-full"
            >
                + Add Project
            </button>
        </div>
    )
}
