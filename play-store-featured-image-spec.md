# Cibil Fixer Play Store Featured Image - Design Specification

## Image Specifications
- **Dimensions:** 1024 x 512 pixels (exactly)
- **Format:** PNG (recommended) or JPEG
- **File size:** Under 1MB
- **DPI:** 72 (web standard)

## Layout Grid System
```
|-- 50px --|-- 924px (content area) --|-- 50px --|
|  Margin  |                          |  Margin  |
```

**Vertical sections:**
- Top margin: 40px
- Content area: 432px
- Bottom margin: 40px

## Color Palette
```css
Primary Blue: #3B82F6
Success Green: #10B981
Background: Linear gradient from #FFFFFF to #F0F9FF
Text Dark: #1F2937
Text Light: #6B7280
Accent Orange: #F59E0B
Border Gray: #E5E7EB
```

## Typography Specifications

### Main Headline
- **Font:** Inter or Roboto (Bold/900 weight)
- **Size:** 42px
- **Color:** #1F2937
- **Position:** Top-left area
- **Text:** "Cibil Fixer"

### Tagline
- **Font:** Inter or Roboto (Medium/600 weight)
- **Size:** 24px
- **Color:** #3B82F6
- **Position:** Below main headline
- **Text:** "Transform Your Credit Score"

### Score Display
- **Font:** Inter or Roboto (Bold/900 weight)
- **Size:** 48px
- **Color:** #10B981
- **Position:** Center of phone mockup
- **Text:** "750+"

### Benefits Text
- **Font:** Inter or Roboto (Medium/500 weight)
- **Size:** 16px
- **Color:** #1F2937
- **Line height:** 1.5

## Layout Components

### 1. Header Section (Top 80px)
**Left side (0-400px):**
- Logo + "Cibil Fixer" text
- Position: 60px from left, 30px from top

**Right side (624-1024px):**
- Trust badge: "4.9★ Rating"
- "1000+ Users" badge
- Position: 60px from right, 30px from top

### 2. Main Content Area (80px-432px)

**Left Section (60px-450px):**
- Phone mockup illustration
- Dimensions: 200px width x 350px height
- Position: Centered in left section
- Shows dashboard with score meter

**Right Section (470px-964px):**
- Transformation arrow: "580 → 750+"
- Key benefits list
- Call-to-action elements

### 3. Benefits List
```
✓ 99% Success Rate
✓ 150+ Point Average Improvement
✓ Results in 30-90 Days
✓ Expert Financial Guidance
```

## Visual Elements Specifications

### Phone Mockup
- **Style:** Modern smartphone silhouette
- **Color:** #F9FAFB (light gray)
- **Border:** 2px solid #E5E7EB
- **Corner radius:** 24px
- **Shadow:** 0 10px 25px rgba(0,0,0,0.1)

### Dashboard Content (inside phone)
- Credit score meter showing 750+
- Green progress arc (75% filled)
- Small icons for features
- Simplified UI elements

### Score Transformation Arrow
- **Style:** Curved arrow from left to right
- **Color:** Gradient from #F59E0B to #10B981
- **Width:** 4px
- **Length:** ~200px

### Checkmark Icons
- **Style:** Circular background with checkmark
- **Size:** 20px diameter
- **Background:** #10B981
- **Checkmark:** White
- **Position:** 8px left margin from text

### Trust Badges
- **Star rating:** 5 stars, #F59E0B color
- **Background:** White with subtle border
- **Padding:** 8px horizontal, 4px vertical
- **Border radius:** 12px

## Background Design
- **Base:** Linear gradient from #FFFFFF (top) to #F0F9FF (bottom)
- **Pattern:** Subtle dot grid overlay at 10% opacity
- **Additional:** 3 floating blur circles:
  - Circle 1: 120px diameter, #3B82F6 at 20% opacity, top-right
  - Circle 2: 80px diameter, #10B981 at 15% opacity, bottom-left
  - Circle 3: 100px diameter, #F59E0B at 10% opacity, center-right

## Content Hierarchy

### Primary Message
"Cibil Fixer - Transform Your Credit Score"

### Secondary Message
"From 580 to 750+ in Just 90 Days"

### Supporting Elements
- Phone mockup with dashboard
- Benefits checklist
- Trust indicators
- Transformation visualization

## Safe Zones
- **Critical content:** Keep within 900x400px centered area
- **Text:** Minimum 40px from edges
- **Important elements:** Minimum 60px from edges

## Export Settings
- **Resolution:** 1024x512px at 72 DPI
- **Color profile:** sRGB
- **Format:** PNG-24 with transparency support
- **Compression:** Optimize for web (under 1MB)

## Design Tools Setup

### Figma/Sketch Setup
1. Create artboard: 1024x512px
2. Set up grid: 12 columns with 20px gutters
3. Import color palette as styles
4. Set up text styles for consistency

### Photoshop Setup
1. New document: 1024x512px, 72 DPI, RGB
2. Create guides at safe zones
3. Set up color swatches
4. Use smart objects for phone mockup

## Quality Checklist
- [ ] Exact dimensions (1024x512px)
- [ ] Text readable at 50% zoom
- [ ] High contrast ratios (4.5:1 minimum)
- [ ] No pixelated elements
- [ ] File size under 1MB
- [ ] Colors match brand guidelines
- [ ] All text properly aligned
- [ ] Visual hierarchy clear
- [ ] Mobile-friendly design principles