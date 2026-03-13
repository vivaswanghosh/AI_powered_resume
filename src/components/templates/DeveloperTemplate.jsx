export default function DeveloperTemplate({ data }) {
    const hasContent = (arr) => arr && arr.length > 0 && arr.some(item =>
        typeof item === 'string' ? item.trim() : Object.values(item).some(v => v && v.trim())
    )

    return (
        <div id="resume-preview" style={{
            fontFamily: "'Consolas', 'Fira Code', 'Courier New', monospace",
            color: '#e2e8f0',
            background: '#0f172a',
            padding: '36px',
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '12.5px',
            lineHeight: '1.6',
        }}>
            {/* Header - Terminal style */}
            <div style={{
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '24px',
            }}>
                {/* Terminal bar */}
                <div style={{
                    background: '#1e293b',
                    padding: '8px 12px',
                    borderBottom: '1px solid #334155',
                    display: 'flex',
                    gap: '6px',
                }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                    <span style={{ marginLeft: '8px', fontSize: '11px', color: '#64748b' }}>resume.dev</span>
                </div>
                <div style={{ padding: '20px' }}>
                    <div style={{ color: '#22c55e', marginBottom: '4px' }}>$ whoami</div>
                    <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#f8fafc', margin: '0 0 8px 0' }}>
                        {data.fullName || 'Your Name'}
                    </h1>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '11.5px', color: '#94a3b8' }}>
                        {data.email && <span style={{ color: '#38bdf8' }}>{data.email}</span>}
                        {data.phone && <span>{data.phone}</span>}
                        {data.location && <span>{data.location}</span>}
                        {data.linkedin && <span style={{ color: '#38bdf8' }}>{data.linkedin}</span>}
                        {data.github && <span style={{ color: '#38bdf8' }}>{data.github}</span>}
                    </div>
                </div>
            </div>

            {/* Summary */}
            {data.summary && (
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ color: '#22c55e', fontSize: '14px', marginBottom: '8px' }}>
                        <span style={{ color: '#64748b' }}>// </span>about.md
                    </h2>
                    <p style={{ color: '#cbd5e1', paddingLeft: '16px', borderLeft: '2px solid #334155' }}>{data.summary}</p>
                </div>
            )}

            {/* Skills - as tech tags */}
            {data.skills && data.skills.length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ color: '#22c55e', fontSize: '14px', marginBottom: '8px' }}>
                        <span style={{ color: '#64748b' }}>// </span>tech_stack
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {data.skills.map((skill, i) => (
                            <span key={i} style={{
                                padding: '3px 10px',
                                background: '#1e293b',
                                border: '1px solid #334155',
                                borderRadius: '4px',
                                fontSize: '11.5px',
                                color: '#38bdf8',
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Experience */}
            {hasContent(data.experience) && (
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ color: '#22c55e', fontSize: '14px', marginBottom: '12px' }}>
                        <span style={{ color: '#64748b' }}>// </span>work_experience
                    </h2>
                    {data.experience.filter(e => e.title || e.company).map((exp, i) => (
                        <div key={i} style={{
                            marginBottom: '14px',
                            paddingLeft: '16px',
                            borderLeft: '2px solid #334155',
                        }}>
                            <div>
                                <strong style={{ color: '#f8fafc' }}>{exp.title}</strong>
                                {exp.company && <span style={{ color: '#a78bfa' }}> @ {exp.company}</span>}
                                {exp.duration && <span style={{ color: '#64748b', fontSize: '11px', marginLeft: '8px' }}>[{exp.duration}]</span>}
                            </div>
                            {exp.description && (
                                <p style={{ color: '#94a3b8', marginTop: '4px', whiteSpace: 'pre-line' }}>{exp.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Education */}
            {hasContent(data.education) && (
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ color: '#22c55e', fontSize: '14px', marginBottom: '12px' }}>
                        <span style={{ color: '#64748b' }}>// </span>education
                    </h2>
                    {data.education.filter(e => e.degree || e.institution).map((edu, i) => (
                        <div key={i} style={{ marginBottom: '8px', paddingLeft: '16px', borderLeft: '2px solid #334155' }}>
                            <strong style={{ color: '#f8fafc' }}>{edu.degree}</strong>
                            {edu.institution && <span style={{ color: '#94a3b8' }}> — {edu.institution}</span>}
                            <span style={{ color: '#64748b', fontSize: '11px', marginLeft: '8px' }}>
                                {[edu.year, edu.gpa && `GPA: ${edu.gpa}`].filter(Boolean).join(' | ')}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Projects */}
            {hasContent(data.projects) && (
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ color: '#22c55e', fontSize: '14px', marginBottom: '12px' }}>
                        <span style={{ color: '#64748b' }}>// </span>projects
                    </h2>
                    {data.projects.filter(p => p.name).map((proj, i) => (
                        <div key={i} style={{
                            marginBottom: '12px',
                            padding: '12px',
                            background: '#1e293b',
                            border: '1px solid #334155',
                            borderRadius: '6px',
                        }}>
                            <div>
                                <strong style={{ color: '#38bdf8' }}>📁 {proj.name}</strong>
                                {proj.techStack && (
                                    <span style={{ color: '#64748b', fontSize: '11px', marginLeft: '8px' }}>
                                        [{proj.techStack}]
                                    </span>
                                )}
                            </div>
                            {proj.description && <p style={{ color: '#94a3b8', marginTop: '4px' }}>{proj.description}</p>}
                        </div>
                    ))}
                </div>
            )}

            {/* Achievements */}
            {hasContent(data.achievements) && (
                <div>
                    <h2 style={{ color: '#22c55e', fontSize: '14px', marginBottom: '8px' }}>
                        <span style={{ color: '#64748b' }}>// </span>achievements
                    </h2>
                    <ul style={{ paddingLeft: '16px', listStyleType: '"→ "', color: '#cbd5e1' }}>
                        {data.achievements.filter(a => a.trim()).map((ach, i) => (
                            <li key={i} style={{ marginBottom: '4px', paddingLeft: '4px' }}>{ach}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
