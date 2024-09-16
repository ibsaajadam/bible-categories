Bible Verses App
A React-based application that allows users to browse different Bible categories and view corresponding Bible verses. The app is built using TypeScript for type safety and maintainability. Bible verses are stored in a JSON file and displayed dynamically when a category is selected.

Table of Contents
Features
Technologies Used
Project Structure
Setup Instructions
How It Works
Contribution
License
Features
Bible Verse Categories: Displays categories like Faith, Love, and Understanding.
Bible Verses: Displays Bible verses with references and versions when a category is selected.
Interactive Cards: Category cards highlight when selected and reset when clicked again.
Responsive Design: Layout adjusts for different screen sizes using Bootstrap.
Type Safety: The app uses TypeScript to enforce types and ensure type safety.
Technologies Used
React: JavaScript library for building user interfaces.
TypeScript: Superset of JavaScript that adds static typing.
Bootstrap: For responsive design and UI components.
JSON: Used to store Bible verses and categories.
React Functional Components: Using hooks like useState for state management.
ESLint: For enforcing coding standards and improving code quality.
Project Structure
bash
Copy code
src/
├── components/
│   ├── BibleCategory.tsx        # Displays Bible categories as clickable cards
│   ├── VerseList.tsx            # Displays Bible verses for the selected category
├── pages/
│   └── HomePage.tsx             # Main page that displays categories and verses
├── data/
│   └── bibleVerses.json         # Stores Bible verses and their categories
├── types/
│   └── types.ts                 # Defines shared types, e.g., Verse interface
├── App.tsx                      # Entry point for the app
└── index.tsx                    # Renders the app into the DOM
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/bible-verses-app.git
Navigate to the project directory:

bash
Copy code
cd bible-verses-app
Install dependencies:

Make sure you have Node.js installed, then run:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The app will now be running at http://localhost:3000.

How It Works
Home Page
The home page displays clickable category cards.
Clicking on a category displays the corresponding Bible verses with their references and versions.
Components
BibleCategory.tsx: Displays clickable category cards, with visual feedback for selected/deselected categories.
VerseList.tsx: Renders the Bible verses for the selected category, including the reference and version (e.g., NIV, KJV).
TypeScript Integration
TypeScript is used to define types for props and data structures.

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
Data Source
Bible verses are stored in bibleVerses.json in a format that includes the verse text, reference (e.g., John 3:16), and version (e.g., NIV, KJV).
Responsive Design
The app uses Bootstrap's grid system for a responsive layout.
Cards adapt to screen sizes, displaying 5 across on desktop, 3 on tablets, and 2 on mobile.
Contribution
Contributions are welcome! Feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License.