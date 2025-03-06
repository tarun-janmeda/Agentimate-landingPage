const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
}

// Files to copy to public directory
const filesToCopy = [
    'index.html',
    'lib/anime.min.js',
    'lib/anime.js'
];

// Copy each file to public directory
filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        const destPath = path.join('public', path.basename(file));
        fs.copyFileSync(file, destPath);
        console.log(`Copied ${file} to public/${path.basename(file)}`);
    } else {
        console.warn(`Warning: ${file} not found`);
    }
}); 