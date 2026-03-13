import { useState, useCallback } from 'react'
import { useResumeStore } from '../hooks/useResumeStore'
import { enhanceResumeWithAI } from '../services/geminiService'
import { exportToPDF } from '../utils/pdfExport'

import PersonalInfoStep from '../components/FormSteps/PersonalInfoStep'
import EducationStep from '../components/FormSteps/EducationStep'
import SkillsStep from '../components/FormSteps/SkillsStep'
import ExperienceStep from '../components/FormSteps/ExperienceStep'
import ProjectsStep from '../components/FormSteps/ProjectsStep'
import AchievementsStep from '../components/FormSteps/AchievementsStep'
import TemplateSelector from '../components/TemplateSelector'

import ModernTemplate from '../components/templates/ModernTemplate'
import MinimalTemplate from '../components/templates/MinimalTemplate'
import DeveloperTemplate from '../components/templates/DeveloperTemplate'

const STEPS = [
    { id: 'personal', label: 'Personal', icon: '👤' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'achievements', label: 'Awards', icon: '🏆' },
]

const templateComponents = {
    modern: ModernTemplate,
    minimal: MinimalTemplate,
    developer: DeveloperTemplate,
}

export default function ResumeBuilder() {
    const {
        resumeData, apiKey, setApiKey,
        updateField, updateArrayItem, addArrayItem, removeArrayItem, setFullData, resetData
    } = useResumeStore()

    const [currentStep, setCurrentStep] = useState(0)
    const [selectedTemplate, setSelectedTemplate] = useState('modern')
    const [isGenerating, setIsGenerating] = useState(false)
    const [isExporting, setIsExporting] = useState(false)
    const [showApiKeyInput, setShowApiKeyInput] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPreview, setShowPreview] = useState(false)

    const TemplateComponent = templateComponents[selectedTemplate]

    const handleAIEnhance = useCallback(async () => {
        if (!apiKey) {
            setShowApiKeyInput(true)
            setError('Please enter your Gemini API key first.')
            return
        }

        setIsGenerating(true)
        setError('')
        setSuccess('')

        try {
            const enhanced = await enhanceResumeWithAI(apiKey, resumeData)
            setFullData(enhanced)
            setSuccess('✨ Resume enhanced with AI! Check the preview to see the improvements.')
            setTimeout(() => setSuccess(''), 5000)
        } catch (err) {
            setError(err.message)
        } finally {
            setIsGenerating(false)
        }
    }, [apiKey, resumeData, setFullData])

    const handleExportPDF = useCallback(async () => {
        setIsExporting(true)
        setError('')
        try {
            const filename = `${resumeData.fullName || 'resume'}_resume.pdf`
            await exportToPDF('resume-preview', filename)
            setSuccess('📄 PDF downloaded successfully!')
            setTimeout(() => setSuccess(''), 3000)
        } catch (err) {
            setError(`PDF export failed: ${err.message}`)
        } finally {
            setIsExporting(false)
        }
    }, [resumeData.fullName])

    const renderStep = () => {
        const formProps = { data: resumeData, updateField, updateArrayItem, addArrayItem, removeArrayItem }

        switch (STEPS[currentStep].id) {
            case 'personal': return <PersonalInfoStep {...formProps} />
            case 'education': return <EducationStep {...formProps} />
            case 'skills': return <SkillsStep {...formProps} />
            case 'experience': return <ExperienceStep {...formProps} />
            case 'projects': return <ProjectsStep {...formProps} />
            case 'achievements': return <AchievementsStep {...formProps} />
            default: return null
        }
    }

    return (
        <main className="pt-20 pb-8 px-4 min-h-screen">
            <div className="max-w-[1440px] mx-auto">
                {/* Top Controls */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Resume Builder</h1>
                        <p className="text-sm text-surface-400">Fill in your details, enhance with AI, pick a template, and download.</p>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                        {/* API Key */}
                        <button
                            onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                            className={`btn-secondary text-xs px-3 py-2 ${apiKey ? 'border-green-500/40 text-green-400' : ''}`}
                        >
                            {apiKey ? '🔑 Key Set' : '🔑 API Key'}
                        </button>

                        {/* AI Generate */}
                        <button
                            onClick={handleAIEnhance}
                            disabled={isGenerating}
                            className="btn-primary text-sm px-5 py-2.5 flex items-center gap-2 disabled:opacity-60"
                        >
                            {isGenerating ? (
                                <>
                                    <div className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }} />
                                    Enhancing...
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                                    </svg>
                                    Generate with AI
                                </>
                            )}
                        </button>

                        {/* PDF Export */}
                        <button
                            onClick={handleExportPDF}
                            disabled={isExporting}
                            className="btn-secondary text-sm px-5 py-2.5 flex items-center gap-2 disabled:opacity-60"
                        >
                            {isExporting ? (
                                <>
                                    <div className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }} />
                                    Exporting...
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                    Download PDF
                                </>
                            )}
                        </button>

                        {/* Mobile preview toggle */}
                        <button
                            onClick={() => setShowPreview(!showPreview)}
                            className="btn-secondary text-sm px-3 py-2.5 lg:hidden"
                        >
                            {showPreview ? '📝 Form' : '👁 Preview'}
                        </button>

                        {/* Reset */}
                        <button
                            onClick={() => {
                                if (confirm('Reset all data? This cannot be undone.')) resetData()
                            }}
                            className="text-surface-500 hover:text-red-400 text-xs transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* API Key Input */}
                {showApiKeyInput && (
                    <div className="card p-4 mb-4 bg-surface-900/50">
                        <div className="flex items-center gap-3">
                            <label className="text-sm text-surface-400 whitespace-nowrap">Gemini API Key:</label>
                            <input
                                type="password"
                                className="input-field flex-1 text-sm py-2"
                                placeholder="Paste your Google Gemini API key here..."
                                value={apiKey}
                                onChange={e => setApiKey(e.target.value)}
                            />
                            <button onClick={() => setShowApiKeyInput(false)} className="text-surface-500 hover:text-white text-sm">
                                Done
                            </button>
                        </div>
                        <p className="text-xs text-surface-500 mt-2">
                            Get a free API key at{' '}
                            <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">
                                aistudio.google.com/apikey
                            </a>. Your key is stored locally and never sent to our servers.
                        </p>
                    </div>
                )}

                {/* Notifications */}
                {error && (
                    <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                        <span>⚠️</span> {error}
                        <button onClick={() => setError('')} className="ml-auto text-red-400/60 hover:text-red-400">✕</button>
                    </div>
                )}
                {success && (
                    <div className="mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                        {success}
                    </div>
                )}

                {/* Main Layout */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left: Form */}
                    <div className={`lg:w-[480px] xl:w-[520px] shrink-0 ${showPreview ? 'hidden lg:block' : ''}`}>
                        {/* Step Indicator */}
                        <div className="flex items-center gap-1 mb-6 overflow-x-auto pb-2">
                            {STEPS.map((step, i) => (
                                <button
                                    key={step.id}
                                    onClick={() => setCurrentStep(i)}
                                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${i === currentStep
                                            ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                                            : 'text-surface-500 hover:text-surface-300 hover:bg-white/[0.03]'
                                        }`}
                                >
                                    <span>{step.icon}</span>
                                    <span className="hidden sm:inline">{step.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Form Content */}
                        <div className="card p-6">
                            {renderStep()}

                            {/* Navigation */}
                            <div className="flex justify-between mt-8 pt-4 border-t border-white/[0.06]">
                                <button
                                    onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                                    disabled={currentStep === 0}
                                    className="btn-secondary text-sm px-4 py-2 disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    ← Previous
                                </button>
                                <button
                                    onClick={() => setCurrentStep(prev => Math.min(STEPS.length - 1, prev + 1))}
                                    disabled={currentStep === STEPS.length - 1}
                                    className="btn-primary text-sm px-6 py-2 disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    Next →
                                </button>
                            </div>
                        </div>

                        {/* Template Selector */}
                        <div className="card p-5 mt-4">
                            <TemplateSelector selected={selectedTemplate} onSelect={setSelectedTemplate} />
                        </div>
                    </div>

                    {/* Right: Preview */}
                    <div className={`flex-1 min-w-0 ${!showPreview ? 'hidden lg:block' : ''}`}>
                        <div className="sticky top-24">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-sm font-medium text-surface-400">Live Preview</h3>
                                <span className="text-xs text-surface-600">
                                    Template: <span className="text-primary-400 capitalize">{selectedTemplate}</span>
                                </span>
                            </div>

                            <div className="rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40"
                                style={{ maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}>
                                <TemplateComponent data={resumeData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
