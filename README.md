Bible Verses App
This is a simple React-based application that allows users to select different Bible categories and view corresponding Bible verses. The app is built using TypeScript, and all verses are stored in a JSON file, where each verse has a reference, version, and text.

Table of Contents
Features
Technologies Used
Project Structure
Setup Instructions
How It Works
Features
Bible Verse Categories: Displays categories like Faith, Love, and Understanding.
Bible Verses: When a user clicks on a category, the related Bible verses appear, along with their reference and version (e.g., NIV, KJV).
Interactive UI: Cards for categories change color when selected and reset when clicked again.
Responsive Design: The app adjusts for different screen sizes.
Type Safety: The app is built with TypeScript, ensuring strong type checking for props and state.
Technologies Used
React: A JavaScript library for building user interfaces.
TypeScript: A statically typed superset of JavaScript, adding types and safety to the code.
Bootstrap: Used for styling and creating a responsive layout.
JSON: Used to store Bible verses and their categories.
React Functional Components: Built using modern React practices like functional components and hooks (useState).
ESLint: Linter to ensure code quality.
Project Structure
bash
Copy code
src/
│
├── components/
│   ├── BibleCategory.tsx        # Displays Bible categories as clickable cards
│   ├── VerseList.tsx            # Displays the Bible verses for the selected category
│
├── pages/
│   └── HomePage.tsx             # Main page of the app, displays the categories and verses
│
├── data/
│   └── bibleVerses.json         # Stores the Bible verses and their categories
│
├── types/
│   └── types.ts                 # Defines shared types (e.g., Verse interface)
│
├── App.tsx                      # Entry point of the app
└── index.tsx                    # Renders the app
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/bible-verses-app.git
Navigate to the project directory:

bash
Copy code
cd bible-verses-app
Install dependencies: Make sure you have Node.js installed, then run:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The app will now be running on http://localhost:3000.

How It Works
1. Home Page
The home page displays Bible categories as cards.
Clicking on a card displays Bible verses related to that category.
2. Components
BibleCategory.tsx: Displays clickable category cards. When a card is clicked, it changes color to indicate selection.
VerseList.tsx: Shows the Bible verses for the selected category, including the reference and version.
3. TypeScript Integration
Types are defined using interface, ensuring that props passed between components are correctly typed.
Example:
typescript
Copy code
interface Verse {
  verse: string;
  reference: string;
  version: string;
}

interface VerseListProps {
  verses: Verse[];
}
4. Data Source
Bible verses and their categories are stored in a JSON file (bibleVerses.json).
Each verse contains the text, reference, and version (e.g., NIV, KJV).
5. Responsive Design
Using Bootstrap classes and CSS, the app is designed to be responsive across different device sizes.
Contribution
Feel free to contribute to this project by submitting issues or pull requests.

License
This project is licensed under the MIT License.
