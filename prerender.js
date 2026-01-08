import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');

const routes = [
    '/',
    '/about',
    '/expertise',
    '/resume',
    '/contact'
];

async function prerender() {
    console.log('🏗️  Starting pre-rendering...');

    // Start vite preview server
    const server = spawn('npm', ['run', 'preview', '--', '--port', '4173'], {
        stdio: 'inherit',
        shell: true
    });

    // Give the server a moment to start
    await new Promise(resolve => setTimeout(resolve, 3000));

    const browser = await puppeteer.launch({
        headless: "new"
        // args: ['--no-sandbox', '--disable-setuid-sandbox'] // if needing root
    });

    const page = await browser.newPage();

    for (const route of routes) {
        try {
            console.log(`📄 Prerendering: ${route}`);

            await page.goto(`http://localhost:4173${route}`, {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            // Ensure Helmet has updated the title/meta
            await new Promise(resolve => setTimeout(resolve, 500));

            const content = await page.content();

            // Determine output path
            // if route is '/', write to dist/index.html
            // if route is '/about', write to dist/about/index.html
            const fileName = route === '/' ? 'index.html' : path.join(route.slice(1), 'index.html');
            const filePath = path.join(distDir, fileName);
            const dirPath = path.dirname(filePath);

            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }

            fs.writeFileSync(filePath, content);
            console.log(`✅ Saved: ${fileName}`);

        } catch (err) {
            console.error(`❌ Error pre-rendering ${route}:`, err);
        }
    }

    await browser.close();
    server.kill(); // Stop the preview server -- might need stronger kill if shell=true
    process.exit(0);
}

prerender();
