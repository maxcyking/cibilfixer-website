// Node.js script to convert HTML mockup to PNG image
// Run: npm install puppeteer
// Then: node create-featured-image.js

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function createFeaturedImage() {
    console.log('🚀 Starting featured image generation...');
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set viewport to exact dimensions
    await page.setViewport({
        width: 1024,
        height: 512,
        deviceScaleFactor: 2 // For high DPI
    });
    
    // Read the HTML file
    const htmlPath = path.join(__dirname, 'featured-image-html-mockup.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Set the HTML content
    await page.setContent(htmlContent, {
        waitUntil: 'networkidle0'
    });
    
    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');
    
    // Take screenshot
    const screenshot = await page.screenshot({
        type: 'png',
        clip: {
            x: 0,
            y: 0,
            width: 1024,
            height: 512
        },
        omitBackground: false
    });
    
    // Save the image
    const outputPath = path.join(__dirname, 'Cibil Fixer-featured-image.png');
    fs.writeFileSync(outputPath, screenshot);
    
    console.log('✅ Featured image created successfully!');
    console.log(`📁 Saved as: ${outputPath}`);
    
    // Get file size
    const stats = fs.statSync(outputPath);
    const fileSizeInBytes = stats.size;
    const fileSizeInKB = fileSizeInBytes / 1024;
    
    console.log(`📊 File size: ${fileSizeInKB.toFixed(2)} KB`);
    
    if (fileSizeInKB > 1024) {
        console.log('⚠️  Warning: File size exceeds 1MB limit for Play Store');
    } else {
        console.log('✅ File size is within Play Store limits');
    }
    
    await browser.close();
}

// Error handling
createFeaturedImage().catch(error => {
    console.error('❌ Error creating featured image:', error);
    process.exit(1);
});