# GitHub Setup Guide

Follow these steps to push your Progress Completion Visualizer to GitHub.

## Step 1: Get Your Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key
5. Add it to your `.env` file:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

## Step 2: Initialize Git Repository

Run these commands in your project directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: Progress Completion Visualizer"
```

## Step 3: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Choose a repository name (e.g., `progress-visualizer`)
5. Add a description: "A modern web app to visualize progress with AI-powered insights"
6. Choose "Public" or "Private"
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click "Create repository"

## Step 4: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add GitHub as remote origin (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push your code
git branch -M main
git push -u origin main
```

## Step 5: Configure GitHub Repository Settings

### Enable GitHub Pages (Optional)
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. Your site will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO`

### Add Topics
Add these topics to help others find your project:
- `react`
- `typescript`
- `vite`
- `tailwindcss`
- `gemini-api`
- `progress-tracker`
- `ai-powered`

### Add Repository Description
Update your repository with:
- Description: "A modern web app to visualize progress with AI-powered motivational insights"
- Website: Your deployed URL (if using GitHub Pages or other hosting)

## Step 6: Set Up GitHub Actions for Deployment (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build
      env:
        VITE_GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

Then add your Gemini API key as a secret:
1. Go to repository Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `GEMINI_API_KEY`
4. Value: Your actual Gemini API key
5. Click "Add secret"

## Important Security Notes

- **NEVER** commit your `.env` file (it's already in `.gitignore`)
- **NEVER** share your API keys publicly
- The `.env.example` file is safe to commit (it contains no real keys)
- For production deployments, use environment variables or secrets management

## Updating Your Repository

When you make changes:

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Add new feature or fix bug"

# Push to GitHub
git push
```

## Example Repository Structure on GitHub

```
progress-visualizer/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
├── public/
├── .env.example
├── .gitignore
├── README.md
├── SETUP.md
├── package.json
└── ... (other files)
```

## Troubleshooting

### If git push is rejected
```bash
git pull origin main --rebase
git push origin main
```

### If you need to change remote URL
```bash
git remote set-url origin https://github.com/aminmguidich/YOUR_REPO.git
```

### If you accidentally committed .env
```bash
git rm --cached .env
git commit -m "Remove .env from tracking"
git push
```
Then immediately regenerate your API keys!

## Next Steps

1. Add a screenshot to your README
2. Create issues for future enhancements
3. Set up branch protection rules
4. Add a LICENSE file if you haven't already
5. Share your project with the community!

---

Need help? Check the [GitHub Documentation](https://docs.github.com) or create an issue in your repository.
