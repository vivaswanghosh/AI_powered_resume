export default function EducationStep({ data, updateArrayItem, addArrayItem, removeArrayItem }) {
    return (
        <div className="space-y-5">
            <h2 className="text-2xl font-bold text-white mb-2">Education</h2>
            <p className="text-surface-400 text-sm mb-6">Add your educational background, starting with the most recent.</p>

            {data.education.map((edu, index) => (
                <div key={index} className="card p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary-400">Education #{index + 1}</span>
                        {data.education.length > 1 && (
                            <button
                                onClick={() => removeArrayItem('education', index)}
                                className="text-red-400 hover:text-red-300 text-sm transition-colors"
                            >
                                Remove
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="input-label">Degree / Program *</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="B.Tech in Computer Science"
                                value={edu.degree}
                                onChange={e => updateArrayItem('education', index, 'degree', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="input-label">Institution *</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="MIT"
                                value={edu.institution}
                                onChange={e => updateArrayItem('education', index, 'institution', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="input-label">Year</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="2020 - 2024"
                                value={edu.year}
                                onChange={e => updateArrayItem('education', index, 'year', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="input-label">GPA / Score</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="3.8 / 4.0"
                                value={edu.gpa}
                                onChange={e => updateArrayItem('education', index, 'gpa', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={() => addArrayItem('education', { degree: '', institution: '', year: '', gpa: '' })}
                className="btn-secondary text-sm px-4 py-2 w-full"
            >
                + Add Education
            </button>
        </div>
    )
}
