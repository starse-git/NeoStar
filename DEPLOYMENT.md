# Digital Ocean Deployment Guide

## Changes Made to Fix 404 Error

### 1. Updated `next.config.ts`
Added `output: 'standalone'` to enable proper production builds for Digital Ocean.

### 2. Created `.do/app.yaml`
Digital Ocean App Platform configuration file with correct build and run commands.

## Digital Ocean App Platform Settings

Make sure your Digital Ocean app has these settings:

### Build Settings
- **Build Command**: `npm run build`
- **Run Command**: `npm start`
- **Environment**: Node.js
- **HTTP Port**: 3000

### Environment Variables
Add these in Digital Ocean dashboard:
- `NODE_ENV` = `production`

## Deployment Steps

### Option 1: Using the .do/app.yaml file (Recommended)
1. Commit and push changes to your repository:
   ```bash
   git add .
   git commit -m "Add Digital Ocean configuration"
   git push origin main
   ```

2. In Digital Ocean App Platform dashboard:
   - Go to your app settings
   - The `.do/app.yaml` file will be automatically detected
   - Trigger a new deployment

### Option 2: Manual Configuration
If the app.yaml isn't detected, manually configure in Digital Ocean:

1. **App Settings** → **Components** → **web**
2. Set these values:
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
   - **HTTP Port**: 3000
   - **Environment Variables**: Add `NODE_ENV=production`

3. Click "Save" and trigger a new deployment

## Troubleshooting

### Still getting 404?
1. Check build logs in Digital Ocean dashboard
2. Verify `package.json` has correct scripts:
   - `"build": "next build"`
   - `"start": "next start"`
3. Make sure Node.js version is compatible (18.x or higher recommended)

### Build fails?
- Check if all dependencies are in `package.json`
- Verify there are no TypeScript errors locally: `npm run build`
- Check Digital Ocean logs for specific error messages

### Images not loading?
- Ensure images in `/public` folder are committed to git
- Check that external image domains are configured in `next.config.ts`

## Verification

After deployment, your app should be accessible at:
https://lobster-app-c9hao.ondigitalocean.app/

The home page should load with all sections:
- Hero section with navigation
- About section
- Service section
- News section
- Contact section
- Footer
- KIZUNA panel (right side button)

## Next Steps

1. Set up custom domain (optional)
2. Configure SSL/HTTPS (usually automatic on Digital Ocean)
3. Set up environment variables for any API keys
4. Monitor application logs and performance
