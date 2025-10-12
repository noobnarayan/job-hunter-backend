# JobHunter Backend

A Node.js Express backend application for the JobHunter platform.

## Features

- User authentication and authorization
- Job management
- Company profiles
- File uploads with Cloudinary
- AI integration with OpenAI
- MongoDB database integration

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
MONGODB_URL=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key

# Server Configuration
PORT=3000
NODE_ENV=production
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (see above)

3. Start the development server:
```bash
npm run dev
```

## Deployment on Vercel

This application is configured for deployment on Vercel as a serverless function.

### Prerequisites

1. Vercel CLI installed globally:
```bash
npm install -g vercel
```

2. MongoDB Atlas account and database
3. Cloudinary account for file uploads
4. OpenAI API key

### Deployment Steps

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy the application**:
```bash
vercel
```

4. **Set Environment Variables** in Vercel Dashboard:
   - Go to your project dashboard on Vercel
   - Navigate to Settings > Environment Variables
   - Add all the environment variables listed above

5. **Redeploy** after setting environment variables:
```bash
vercel --prod
```

### Project Structure for Vercel

- `api/index.js` - Main serverless function entry point
- `vercel.json` - Vercel configuration
- `.vercelignore` - Files to ignore during deployment

### API Endpoints

- `/api/v1/users` - User management
- `/api/v1/` - Job management
- `/api/v1/company/` - Company management

The application will be available at your Vercel domain (e.g., `https://your-app-name.vercel.app`)
