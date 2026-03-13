export default function AchievementsStep({ data, updateField }) {
    const achievements = data.achievements || ['']

    const updateAchievement = (index, value) => {
        const updated = [...achievements]
        updated[index] = value
        updateField('achievements', updated)
    }

    const addAchievement = () => {
        updateField('achievements', [...achievements, ''])
    }

    const removeAchievement = (index) => {
        if (achievements.length > 1) {
            updateField('achievements', achievements.filter((_, i) => i !== index))
        }
    }

    return (
        <div className="space-y-5">
            <h2 className="text-2xl font-bold text-white mb-2">Achievements & Certifications</h2>
            <p className="text-surface-400 text-sm mb-6">Add awards, certifications, or notable achievements.</p>

            {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-3 items-start">
                    <div className="flex-1">
                        <label className="input-label">Achievement #{index + 1}</label>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="e.g., AWS Certified Solutions Architect, Won hackathon at XYZ..."
                            value={achievement}
                            onChange={e => updateAchievement(index, e.target.value)}
                        />
                    </div>
                    {achievements.length > 1 && (
                        <button
                            onClick={() => removeAchievement(index)}
                            className="mt-7 text-red-400 hover:text-red-300 text-sm transition-colors shrink-0"
                        >
                            Remove
                        </button>
                    )}
                </div>
            ))}

            <button
                onClick={addAchievement}
                className="btn-secondary text-sm px-4 py-2 w-full"
            >
                + Add Achievement
            </button>
        </div>
    )
}
