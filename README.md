# TodoApp

A cross-platform todo application built with React Native, featuring task management with descriptions, data persistence, and modern navigation.

## Features

- ✅ **Task Management**: Add, edit, delete, and mark tasks as complete
- 📝 **Task Descriptions**: Add detailed descriptions to each task
- 💾 **Data Persistence**: Tasks are automatically saved using AsyncStorage
- 🧭 **Navigation**: Navigate between home and task detail pages
- 📱 **Cross-Platform**: Runs on both iOS and Android
- 🎨 **Linear Gradients**: Beautiful UI with gradient backgrounds
- 🔄 **Auto-linking**: Modern React Native with automatic native dependency linking

## Technologies Used

- **React Native 0.83.1**
- **TypeScript**
- **React Navigation** (Native Stack Navigator)
- **AsyncStorage** for data persistence
- **Linear Gradient** for UI styling
- **Safe Area Context** for proper screen rendering

## Prerequisites

Before you begin, ensure you have the following installed:

### Required for both platforms:
- **Node.js** (version 18 or higher)
- **npm** or **Yarn**
- **React Native CLI**: `npm install -g @react-native-community/cli`

### For iOS development:
- **macOS** (required for iOS development)
- **Xcode** (latest version from App Store)
- **CocoaPods**: `sudo gem install cocoapods`
- **iOS Simulator** (included with Xcode)

### For Android development:
- **Android Studio** with Android SDK
- **Android Virtual Device (AVD)** configured
- **Environment variables** set:
  ```bash
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```

> **Note**: Complete the [React Native environment setup guide](https://reactnative.dev/docs/set-up-your-environment) for detailed instructions.

## Getting Started

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd TodoApp

# Install JavaScript dependencies
npm install

# Install iOS native dependencies (macOS only)
cd ios && pod install && cd ..
```

### 2. Start Metro Bundler

Metro is the JavaScript build tool for React Native. Start it in a terminal window:

```bash
npm start
```

Keep this terminal open while developing.

### 3. Run the Application

Open a **new terminal window** and run one of the following commands:

#### For iOS (macOS only):

```bash
npm run ios
```

**First-time setup:**
If this is your first time running the project, iOS dependencies are automatically installed via CocoaPods.

**Troubleshooting iOS:**
- If you encounter pod-related errors, run: `cd ios && pod install && cd ..`
- Ensure Xcode is installed and updated
- For M1/M2 Macs, use: `sudo arch -x86_64 gem install ffi && cd ios && arch -x86_64 pod install`

#### For Android:

**First, start an Android emulator:**
1. Open Android Studio
2. Go to **Tools → AVD Manager**
3. Start an existing virtual device or create a new one

**Or use command line:**
```bash
# List available emulators
emulator -list-avds

# Start an emulator
emulator -avd <your-device-name>
```

**Then run the app:**
```bash
npm run android
```

**Troubleshooting Android:**
- Ensure Android Studio and SDK are properly installed
- Check that `ANDROID_HOME` environment variable is set
- First Android build may take 15-30 minutes
- If you get "No space left on device", free up disk space and run: `cd android && ./gradlew clean && cd ..`

### 4. Development

- **Hot Reloading**: Save any file to see changes instantly
- **Debug Menu**: 
  - iOS: Press `Cmd + D` in simulator
  - Android: Press `Cmd + M` or shake the device
- **Element Inspector**: Press `Cmd + D` and select "Toggle Element Inspector"

## How to Use the App

1. **Add Tasks**: Type in the input field and press enter or the add button
2. **View Task Details**: Tap on any task to see its detail page
3. **Edit Task Name**: In the task list, tap "Edit" to modify the task title
4. **Add Description**: In the task detail page, tap "Add Description" to add notes
5. **Mark Complete**: Tap the checkbox to mark tasks as done/undone
6. **Delete Tasks**: Tap "Delete" to remove a task permanently
7. **Automatic Save**: All changes are automatically saved to device storage

## Project Structure

```
TodoApp/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # App header with task counter
│   │   ├── ItemWrapper.tsx     # Task list item container with gradients
│   │   ├── TaskItem.tsx        # Individual task component
│   │   ├── TasksList.tsx       # Task list container
│   │   └── TodoInput.tsx       # Task input component
│   └── pages/
│       ├── Details.tsx         # Task details page
│       └── Home.tsx            # Main todo list page
├── App.tsx                     # Main app component with navigation
├── android/                    # Android-specific files
├── ios/                        # iOS-specific files
└── README.md                   # This file
```

## Available Scripts

- `npm start`: Start Metro bundler
- `npm run android`: Build and run Android app
- `npm run ios`: Build and run iOS app

## Resources

- [React Native Documentation](https://reactnative.dev) - Learn more about React Native
- [React Navigation Docs](https://reactnavigation.org/) - Navigation library documentation
- [AsyncStorage Docs](https://react-native-async-storage.github.io/async-storage/) - Local storage documentation
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript documentation
