# Walkthrough - Paul Granger Portfolio

## Overview
This portfolio is a single-page responsive website designed to showcase Paul Granger's skills, projects, and CV for internship hunting. It uses a modern dark-themed aesthetic with teal accents (`#64ffda`) commonly found in developer portfolios.

## Key Features
- **Hero Section**: Introduces Paul with a photo, clear objective (Internship search), and social links.
- **CV & Video**: Embeds the YouTube video providing a personal introduction and a clickable preview of the CV.
- **Skills & Projects**: Displays projects extracted from the CV (Real Estate App, Football App, No-Code Internship) as cards.
- **Contact Form**: Integrated with EmailJS (requires configuration) for direct contact without a backend.
- **Responsive Design**: Adapts to mobile and desktop screens.

## File Structure
- `index.html`: Main entry point containing all content.
- `style.css`: Contains all styles, variables for colors, and responsive media queries.
- `script.js`: Handles AOS initialization and EmailJS form submission logic.
- `assets/`: 
    - `cv.png`: The CV image.
    - `profile.png`: The profile placeholder (should be replaced by real photo).

## Next Steps for User
1. **Replace Profile Photo**: Overwrite `assets/profile.png` with a real photo (keep it square/circle friendly).
2. **Configure EmailJS**:
   - Register at [emailjs.com](https://www.emailjs.com/).
   - Get your Public Key, Service ID, and Template ID.
   - Update `script.js` lines 12, 28, and 29.
3. **Deploy**:
   - Push to GitHub.
   - Import to Vercel for free hosting.
