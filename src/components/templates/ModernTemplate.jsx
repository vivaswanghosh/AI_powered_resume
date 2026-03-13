export default function ModernTemplate({ data }) {
    const hasContent = (arr) => arr && arr.length > 0 && arr.some(item =>
        typeof item === 'string' ? item.trim() : Object.values(item).some(v => v && v.trim())
    )

    return (
        <div id="resume-preview" style={{
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            color: '#1a1a2e',
            background: '#ffffff',
            padding: '40px',
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '13px',
            lineHeight: '1.5',
        }}>
            {/* Header */}
            <div style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: 'white',
                padding: '32px',
                borderRadius: '12px',
                marginBottom: '24px',
            }}>
                <h1 style={{ fontSize: '28px', fontWeight: '800', margin: '0 0 4px 0', letterSpacing: '-0.5px' }}>
                    {data.fullName || 'Your Name'}
                </h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '12px', opacity: 0.9, marginTop: '8px' }}>
                    {data.email && <span>📧 {data.email}</span>}
                    {data.phone && <span>📱 {data.phone}</span>}
                    {data.location && <span>📍 {data.location}</span>}
                    {data.linkedin && <span>💼 {data.linkedin}</span>}
                    {data.github && <span>💻 {data.github}</span>}
                </div>
            </div>

            {/* Summary */}
            {data.summary && (
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#6366f1', borderBottom: '2px solid #6366f1', paddingBottom: '4px', marginBottom: '8px' }}>
                        Professional Summary
                    </h2>
                    <p style={{ color: '#374151', lineHeight: '1.6' }}>{data.summary}</p>
                </div>
            )}

            {/* Experience */}
            {hasContent(data.experience) && (
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#6366f1', borderBottom: '2px solid #6366f1', paddingBottom: '4px', marginBottom: '12px' }}>
                        Work Experience
                    </h2>
                    {data.experience.filter(e => e.title || e.company).map((exp, i) => (
                        <div key={i} style={{ marginBottom: '14px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                <div>
                                    <strong style={{ fontSize: '14px' }}>{exp.title}</strong>
                                    {exp.company && <span style={{ color: '#6366f1' }}> at {exp.company}</span>}
                                </div>
                                {exp.duration && <span style={{ fontSize: '12px', color: '#6b7280', whiteSpace: 'nowrap' }}>{exp.duration}</span>}
                            </div>
                            {exp.description && (
                                <p style={{ color: '#4b5563', marginTop: '4px', whiteSpace: 'pre-line' }}>{exp.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Education */}
            {hasContent(data.education) && (
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#6366f1', borderBottom: '2px solid #6366f1', paddingBottom: '4px', marginBottom: '12px' }}>
                        Education
                    </h2>
                    {data.education.filter(e => e.degree || e.institution).map((edu, i) => (
                        <div key={i} style={{ marginBottom: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                <div>
                                    <strong>{edu.degree}</strong>
                                    {edu.institution && <span> — {edu.institution}</span>}
                                </div>
                                <span style={{ fontSize: '12px', color: '#6b7280', whiteSpace: 'nowrap' }}>
                                    {[edu.year, edu.gpa && `GPA: ${edu.gpa}`].filter(Boolean).join(' | ')}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#6366f1', borderBottom: '2px solid #6366f1', paddingBottom: '4px', marginBottom: '8px' }}>
                        Skills
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {data.skills.map((skill, i) => (
                            <span key={i} style={{
                                padding: '4px 12px',
                                background: '#eef2ff',
                                color: '#4338ca',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '500',
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Projects */}
            {hasContent(data.projects) && (
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#6366f1', borderBottom: '2px solid #6366f1', paddingBottom: '4px', marginBottom: '12px' }}>
                        Projects
                    </h2>
                    {data.projects.filter(p => p.name).map((proj, i) => (
                        <div key={i} style={{ marginBottom: '12px' }}>
                            <div>
                                <strong>{proj.name}</strong>
                                {proj.techStack && <span style={{ color: '#6b7280', fontSize: '12px' }}> | {proj.techStack}</span>}
                            </div>
                            {proj.description && <p style={{ color: '#4b5563', marginTop: '2px' }}>{proj.description}</p>}
                        </div>
                    ))}
                </div>
            )}

            {/* Achievements */}
            {hasContent(data.achievements) && (
                <div>
                    <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#6366f1', borderBottom: '2px solid #6366f1', paddingBottom: '4px', marginBottom: '8px' }}>
                        Achievements
                    </h2>
                    <ul style={{ paddingLeft: '18px', color: '#4b5563' }}>
                        {data.achievements.filter(a => a.trim()).map((ach, i) => (
                            <li key={i} style={{ marginBottom: '4px' }}>{ach}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
