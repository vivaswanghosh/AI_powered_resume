import { GoogleGenerativeAI } from '@google/generative-ai'

const ENHANCEMENT_PROMPT = `You are a professional resume writer. Enhance the following resume data to be more professional, impactful, and ATS-friendly.

Rules:
- Convert experience descriptions into strong, action-oriented bullet points
- Use quantifiable achievements where possible (add realistic estimates if none given)
- Make project descriptions concise but impressive
- Keep the summary professional and compelling (2-3 sentences max)
- Enhance skill descriptions if needed
- Keep education and personal info factual, don't embellish
- Return ONLY valid JSON in exactly the same structure as the input
- Do NOT add any markdown formatting, code blocks, or extra text

Here is the resume data to enhance:
`

export async function enhanceResumeWithAI(apiKey, resumeData) {
    if (!apiKey) {
        throw new Error('Please enter your Gemini API key to use AI enhancement.')
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey)
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

        const dataToEnhance = {
            summary: resumeData.summary || '',
            experience: resumeData.experience || [],
            projects: resumeData.projects || [],
            achievements: resumeData.achievements || [],
        }

        const prompt = ENHANCEMENT_PROMPT + JSON.stringify(dataToEnhance, null, 2)

        const result = await model.generateContent(prompt)
        const response = await result.response
        let text = response.text()

        // Clean up response - remove code blocks if present
        text = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim()

        const enhanced = JSON.parse(text)

        return {
            ...resumeData,
            summary: enhanced.summary || resumeData.summary,
            experience: enhanced.experience || resumeData.experience,
            projects: enhanced.projects || resumeData.projects,
            achievements: enhanced.achievements || resumeData.achievements,
        }
    } catch (error) {
        if (error.message?.includes('API key')) {
            throw new Error('Invalid API key. Please check your Gemini API key.')
        }
        if (error instanceof SyntaxError) {
            throw new Error('AI returned invalid data. Please try again.')
        }
        throw new Error(`AI enhancement failed: ${error.message}`)
    }
}
