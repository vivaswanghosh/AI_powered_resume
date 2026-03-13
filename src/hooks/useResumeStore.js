import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'resumeai_data'
const API_KEY_STORAGE = 'resumeai_apikey'

const defaultResumeData = {
    // Personal Info
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    location: '',
    summary: '',

    // Education
    education: [
        { degree: '', institution: '', year: '', gpa: '' }
    ],

    // Skills
    skills: [],

    // Experience
    experience: [
        { title: '', company: '', duration: '', description: '' }
    ],

    // Projects
    projects: [
        { name: '', techStack: '', description: '' }
    ],

    // Achievements
    achievements: [''],
}

export function useResumeStore() {
    const [resumeData, setResumeData] = useState(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY)
            if (stored) {
                return { ...defaultResumeData, ...JSON.parse(stored) }
            }
        } catch (e) {
            console.warn('Failed to load saved resume data:', e)
        }
        return defaultResumeData
    })

    const [apiKey, setApiKey] = useState(() => {
        try {
            return localStorage.getItem(API_KEY_STORAGE) || ''
        } catch {
            return ''
        }
    })

    // Auto-save to localStorage
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData))
        } catch (e) {
            console.warn('Failed to save resume data:', e)
        }
    }, [resumeData])

    // Save API key
    useEffect(() => {
        try {
            if (apiKey) {
                localStorage.setItem(API_KEY_STORAGE, apiKey)
            }
        } catch (e) {
            console.warn('Failed to save API key:', e)
        }
    }, [apiKey])

    const updateField = useCallback((field, value) => {
        setResumeData(prev => ({ ...prev, [field]: value }))
    }, [])

    const updateArrayItem = useCallback((field, index, key, value) => {
        setResumeData(prev => {
            const arr = [...prev[field]]
            arr[index] = { ...arr[index], [key]: value }
            return { ...prev, [field]: arr }
        })
    }, [])

    const addArrayItem = useCallback((field, template) => {
        setResumeData(prev => ({
            ...prev,
            [field]: [...prev[field], template]
        }))
    }, [])

    const removeArrayItem = useCallback((field, index) => {
        setResumeData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }))
    }, [])

    const resetData = useCallback(() => {
        setResumeData(defaultResumeData)
        localStorage.removeItem(STORAGE_KEY)
    }, [])

    const setFullData = useCallback((data) => {
        setResumeData(prev => ({ ...prev, ...data }))
    }, [])

    return {
        resumeData,
        apiKey,
        setApiKey,
        updateField,
        updateArrayItem,
        addArrayItem,
        removeArrayItem,
        resetData,
        setFullData,
    }
}
