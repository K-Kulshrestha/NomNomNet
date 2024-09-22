# NomNomNet

NomNomNet is a minimalistic pantry tracking app made with love and care, designed to help you keep track of your pantry items effortlessly. Whether you’re managing a small pantry or a larger inventory, NomNomNet provides a simple and effective way to ensure you never run out of your essentials.

[Live Demo](https://nomnomnet.vercel.app/)

![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Key Features

- **Firebase Integration**: Store your pantry list securely in the cloud using Firebase's real-time database. Access your data from anywhere, ensuring that your pantry list is always up-to-date.
  
- **User Authentication**: Keep your data private and secure with Firebase authentication. Only you can access your pantry list by logging in with your account.

- **Pre-defined Recipes**: Access hard-coded recipes directly within the app. Find inspiration for your next meal using items you already have in your pantry.

## Future Plans

- **Community Forum**: A space for users to share and discover new recipes, tips, and tricks. Engage with a community of like-minded home cooks.

- **Nom Button**: Save your favorite recipes with a single click for easy access later.

- **Gourmet Guide Integration**: Plan your meals with AI-powered recipe suggestions and meal ideas based on your pantry's contents.

## Important Notice

I am currently using Firebase's free tier for storage and authentication. As this is a test deployment, the Firebase integration may expire soon unless we receive significant interest and support from users. If you find NomNomNet helpful, please let us know!

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/pantry-tracker.git

2. **Navigate to the project directory:**

   ```bash
   cd pantry-tracker

3. **Install dependencies**

   ```bash
   npm install

4. **Setup Firebase:**
   Go to the Firebase Console and create a new project.

    In your project settings, locate your Firebase configuration details, which should look like     this:
   ```bash
     const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_PROJECT_ID.appspot.com",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID",
        measurementId: "YOUR_MEASUREMENT_ID"
      };

5. **Make sure the .env.local file is ignored in .gitignore to avoid exposing sensitive information.**
   ```bash
   # .gitignore
   .env.local

6. **Run the development server:**

   ```bash
   npm run dev

7. **Open [http://localhost:3000](http://localhost:3000) to view the app.**


## Learn More

To learn more about Next.js and deployment, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Explore Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment) - Detailed guidance on deploying Next.js applications using Vercel.
- [Deploy Your Next.js App on Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) - Easily deploy your Next.js app with Vercel.
- [Firebase Documentation](https://firebase.google.com/docs/firestore/manage-databases) - Understand how Firebase handles authentication and real-time database integration.

