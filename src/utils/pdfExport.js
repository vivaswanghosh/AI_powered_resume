export async function exportToPDF(elementId, filename = 'resume.pdf') {
    const html2pdf = (await import('html2pdf.js')).default

    const element = document.getElementById(elementId)
    if (!element) {
        throw new Error('Resume preview element not found')
    }

    const opt = {
        margin: 0,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            letterRendering: true,
            backgroundColor: '#ffffff',
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait',
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    }

    await html2pdf().set(opt).from(element).save()
}
