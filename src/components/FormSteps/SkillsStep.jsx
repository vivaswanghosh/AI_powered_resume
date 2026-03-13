import { useState } from 'react'

export default function SkillsStep({ data, updateField }) {
    const [inputValue, setInputValue] = useState('')

    const addSkill = () => {
        const skill = inputValue.trim()
        if (skill && !data.skills.includes(skill)) {
            updateField('skills', [...data.skills, skill])
            setInputValue('')
        }
    }

    const removeSkill = (index) => {
        updateField('skills', data.skills.filter((_, i) => i !== index))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            addSkill()
        }
    }

    const suggestedSkills = [
        'JavaScript', 'Python', 'React', 'Node.js', 'TypeScript', 'Java',
        'SQL', 'Git', 'AWS', 'Docker', 'MongoDB', 'CSS', 'HTML',
        'C++', 'REST APIs', 'GraphQL', 'Figma', 'Agile', 'Machine Learning'
    ].filter(s => !data.skills.includes(s))

    return (
        <div className="space-y-5">
            <h2 className="text-2xl font-bold text-white mb-2">Skills</h2>
            <p className="text-surface-400 text-sm mb-6">Add your technical and professional skills.</p>

            <div>
                <label className="input-label">Add Skill</label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        className="input-field flex-1"
                        placeholder="Type a skill and press Enter..."
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        onClick={addSkill}
                        disabled={!inputValue.trim()}
                        className="btn-primary px-5 py-2 text-sm disabled:opacity-40"
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Current skills */}
            {data.skills.length > 0 && (
                <div>
                    <label className="input-label">Your Skills ({data.skills.length})</label>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill, index) => (
                            <span key={index} className="tag">
                                {skill}
                                <button onClick={() => removeSkill(index)}>×</button>
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Suggestions */}
            {suggestedSkills.length > 0 && (
                <div>
                    <label className="input-label">Quick Add</label>
                    <div className="flex flex-wrap gap-2">
                        {suggestedSkills.slice(0, 12).map((skill, i) => (
                            <button
                                key={i}
                                onClick={() => updateField('skills', [...data.skills, skill])}
                                className="text-xs px-3 py-1.5 rounded-full border border-surface-700 text-surface-400 hover:border-primary-500 hover:text-primary-400 transition-all"
                            >
                                + {skill}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
