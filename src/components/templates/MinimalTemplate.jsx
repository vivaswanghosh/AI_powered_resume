export default function MinimalTemplate({ data }) {
    const hasContent = (arr) => arr && arr.length > 0 && arr.some(item =>
        typeof item === 'string' ? item.trim() : Object.values(item).some(v => v && v.trim())
    )

    const sectionStyle = {
        marginBottom: '18px',
    }

    const headingStyle = {
        fontSize: '11px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        color: '#6b7280',
        borderBottom: '1px solid #e5e7eb',
        paddingBottom: '4px',
        marginBottom: '10px',
    }

    return (
        <div id="resume-preview" style={{
            fontFamily: "'Inter', 'Georgia', serif",
            color: '#111827',
            background: '#ffffff',
            padding: '48px',
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '13px',
            lineHeight: '1.55',
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <h1 style={{ fontSize: '30px', fontWeight: '300', letterSpacing: '3px', margin: '0 0 8px 0', textTransform: 'uppercase', color: '#111827' }}>
                    {data.fullName || 'Your Name'}
                </h1>
                <div style={{
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px',
                    fontSize: '12px', color: '#6b7280',
                }}>
                    {[data.email, data.phone, data.location, data.linkedin, data.github]
                        .filter(Boolean)
                        .map((item, i, arr) => (
                            <span key={i}>
                                {item}{i < arr.length - 1 && <span style={{ margin: '0 4px', color: '#d1d5db' }}>•</span>}
                            </span>
                        ))
                    }
                </div>
            </div>

            {/* Line separator */}
            <div style={{ borderTop: '2px solid #111827', marginBottom: '24px' }} />

            {/* Summary */}
            {data.summary && (
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>Summary</h2>
                    <p style={{ color: '#374151', fontStyle: 'italic' }}>{data.summary}</p>
                </div>
            )}

            {/* Experience */}
            {hasContent(data.experience) && (
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>Experience</h2>
                    {data.experience.filter(e => e.title || e.company).map((exp, i) => (
                        <div key={i} style={{ marginBottom: '14px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <strong>{exp.title}{exp.company && `, ${exp.company}`}</strong>
                                {exp.duration && <span style={{ color: '#9ca3af', fontSize: '12px' }}>{exp.duration}</span>}
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
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>Education</h2>
                    {data.education.filter(e => e.degree || e.institution).map((edu, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                            <span>
                                <strong>{edu.degree}</strong>
                                {edu.institution && ` — ${edu.institution}`}
                            </span>
                            <span style={{ color: '#9ca3af', fontSize: '12px' }}>
                                {[edu.year, edu.gpa && `GPA: ${edu.gpa}`].filter(Boolean).join(' | ')}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>Skills</h2>
                    <p style={{ color: '#374151' }}>{data.skills.join('  •  ')}</p>
                </div>
            )}

            {/* Projects */}
            {hasContent(data.projects) && (
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>Projects</h2>
                    {data.projects.filter(p => p.name).map((proj, i) => (
                        <div key={i} style={{ marginBottom: '10px' }}>
                            <strong>{proj.name}</strong>
                            {proj.techStack && <span style={{ color: '#9ca3af', fontSize: '12px' }}> — {proj.techStack}</span>}
                            {proj.description && <p style={{ color: '#4b5563', marginTop: '2px' }}>{proj.description}</p>}
                        </div>
                    ))}
                </div>
            )}

            {/* Achievements */}
            {hasContent(data.achievements) && (
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>Achievements</h2>
                    <ul style={{ paddingLeft: '16px', color: '#4b5563' }}>
                        {data.achievements.filter(a => a.trim()).map((ach, i) => (
                            <li key={i} style={{ marginBottom: '3px' }}>{ach}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
