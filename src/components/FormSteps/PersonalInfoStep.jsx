export default function PersonalInfoStep({ data, updateField }) {
    return (
        <div className="space-y-5">
            <h2 className="text-2xl font-bold text-white mb-2">Personal Information</h2>
            <p className="text-surface-400 text-sm mb-6">Start with your basic contact details and professional summary.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="input-label">Full Name *</label>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="John Doe"
                        value={data.fullName}
                        onChange={e => updateField('fullName', e.target.value)}
                    />
                </div>
                <div>
                    <label className="input-label">Email *</label>
                    <input
                        type="email"
                        className="input-field"
                        placeholder="john@example.com"
                        value={data.email}
                        onChange={e => updateField('email', e.target.value)}
                    />
                </div>
                <div>
                    <label className="input-label">Phone</label>
                    <input
                        type="tel"
                        className="input-field"
                        placeholder="+1 (555) 123-4567"
                        value={data.phone}
                        onChange={e => updateField('phone', e.target.value)}
                    />
                </div>
                <div>
                    <label className="input-label">Location</label>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="San Francisco, CA"
                        value={data.location}
                        onChange={e => updateField('location', e.target.value)}
                    />
                </div>
                <div>
                    <label className="input-label">LinkedIn URL</label>
                    <input
                        type="url"
                        className="input-field"
                        placeholder="https://linkedin.com/in/johndoe"
                        value={data.linkedin}
                        onChange={e => updateField('linkedin', e.target.value)}
                    />
                </div>
                <div>
                    <label className="input-label">GitHub URL</label>
                    <input
                        type="url"
                        className="input-field"
                        placeholder="https://github.com/johndoe"
                        value={data.github}
                        onChange={e => updateField('github', e.target.value)}
                    />
                </div>
            </div>

            <div>
                <label className="input-label">Professional Summary</label>
                <textarea
                    className="input-field"
                    placeholder="Brief summary of your professional background, key skills, and career goals..."
                    rows={4}
                    value={data.summary}
                    onChange={e => updateField('summary', e.target.value)}
                />
                <p className="text-xs text-surface-500 mt-1">AI will enhance this into a compelling professional summary.</p>
            </div>
        </div>
    )
}
