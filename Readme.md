# Advanced Telegram Chat Bot Template 🤖

Welcome to the Advanced Telegram Chat Bot Template! This project is designed to help you build advanced Telegram bots using Node.js, TypeScript, Telegraf, and Firebase. This template provides a solid foundation with a clean and organized structure, making it easier to extend and customize for your specific needs.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Commands](#commands)
- [Firebase Integration](#firebase-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

✨ **TypeScript**: Strongly-typed codebase for better maintainability and fewer runtime errors.  
📦 **Modular Structure**: Organized file structure for scalability and readability.  
🚀 **Telegraf**: Easy-to-use library for Telegram bot development.  
🔥 **Firebase**: Integration with Firebase Firestore for data storage.  
🔐 **Environment Variables**: Securely manage sensitive information using `.env` files.  
🛠 **Middleware Support**: Custom middleware for logging and other functionalities.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 18 or higher
- **NPM**: Version 9 or higher
- **Firebase Account**: Set up Firebase and create a Firestore database

## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/your-username/telegram-bot-template.git
    cd telegram-bot-template
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Initialize TypeScript**:

    ```bash
    npx tsc --init
    ```

## Configuration

1. **Create a `.env` File**:

    ```bash
    touch .env
    ```

2. **Add Your Configuration**:

    ```dotenv
    BOT_TOKEN=your-telegram-bot-token
    FIREBASE_PROJECT_ID=your-firebase-project-id
    FIREBASE_PRIVATE_KEY=your-firebase-private-key
    FIREBASE_CLIENT_EMAIL=your-firebase-client-email
    ```

## Project Structure

```
telegram-bot/
├── src/
│   ├── commands/
│   │   ├── start.ts
│   │   ├── help.ts
│   │   └── ... (other command files)
│   ├── middlewares/
│   │   └── logging.ts
│   ├── models/
│   │   └── user.ts
│   ├── services/
│   │   └── firebase.ts
│   ├── types/
│   │   └── index.d.ts
│   ├── bot.ts
│   ├── config.ts
│   ├── index.ts
│   └── utils.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## Usage

1. **Compile the TypeScript Code**:

    ```bash
    npm run build
    ```

2. **Start the Bot**:

    ```bash
    npm start
    ```

## Commands

- **/start**: Initialize the bot and save the user data to Firebase.
- **/help**: Provide assistance to the user.
- **Sticker Handling**: Respond to sticker messages.
- **Custom Messages**: Respond to specific text messages like "hi".

## Firebase Integration

This template uses Firebase Firestore to store user data. Make sure to set up your Firebase project and add the necessary credentials to the `.env` file. The Firebase service (`src/services/firebase.ts`) initializes the Firebase Admin SDK and provides a Firestore database instance.

### Example Usage

**Adding a User**:

```typescript
import { addUser } from './models/user';

const user = {
  id: 12345,
  username: 'johndoe',
  first_name: 'John',
  last_name: 'Doe'
};

addUser(user).then(() => {
  console.log('User added successfully');
});
```

**Getting a User**:

```typescript
import { getUser } from './models/user';

getUser(12345).then(user => {
  if (user) {
    console.log(`User found: ${user.username}`);
  } else {
    console.log('User not found');
  }
});
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or improvements.

1. Fork the Repository
2. Create a Feature Branch (`git checkout -b feature/your-feature`)
3. Commit Your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this template to suit your needs. Happy coding! 🎉