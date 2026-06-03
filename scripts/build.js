const fs = require('fs-extra');
const Handlebars = require('handlebars');
const juice = require('juice');
const path = require('path');

// Register Handlebars helpers
Handlebars.registerHelper('eq', (a, b) => a === b);
Handlebars.registerHelper('gt', (a, b) => a > b);

async function build() {
  // Ensure dist directory exists
  await fs.ensureDir(path.join(__dirname, '..', 'dist'));
  
  // Load data
  const data = await fs.readJson(path.join(__dirname, '..', 'data', 'agenda.json'));
  
  // Build poster
  const posterTemplate = await fs.readFile(path.join(__dirname, '..', 'poster.html'), 'utf8');
  const posterCompiled = Handlebars.compile(posterTemplate);
  const posterHtml = posterCompiled(data);
  await fs.writeFile(path.join(__dirname, '..', 'dist', 'poster.html'), posterHtml);
  
  // Copy poster CSS to dist for standalone serving
  await fs.copy(path.join(__dirname, '..', 'styles', 'poster.css'), path.join(__dirname, '..', 'dist', 'styles', 'poster.css'));
  console.log('✓ dist/poster.html built');
  
  // Build email
  const emailTemplate = await fs.readFile(path.join(__dirname, '..', 'email.html'), 'utf8');
  const emailCompiled = Handlebars.compile(emailTemplate);
  let emailHtml = emailCompiled(data);
  
  // Inline CSS for email
  const emailCss = await fs.readFile(path.join(__dirname, '..', 'styles', 'email.css'), 'utf8');
  emailHtml = juice.inlineContent(emailHtml, emailCss, { inlinePseudoElements: true });
  
  await fs.writeFile(path.join(__dirname, '..', 'dist', 'email.html'), emailHtml);
  console.log('✓ dist/email.html built (CSS inlined)');
  
  console.log('\nBuild complete! Files in dist/');
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
