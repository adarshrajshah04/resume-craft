

# Resume Craft — Resume Builder

A modern, interactive Resume Builder built with React and Vite that allows users to create, edit, format, and manage their resumes directly in the browser. It provides a document-style editing experience with rich text formatting and PDF export.

## 🚀 Features

- **Resume Templates** — Start creating a resume from available templates.
- **Rich Text Editor** — Edit resume content directly using a document-style editor.
- **Text Formatting** — Bold, italic, underline, font size, font family, text color, and alignment.
- **Resume Management** — Create, open, and delete multiple resumes.
- **Auto Save** — Automatically saves resume content in browser LocalStorage.
- **Multi-page Support** — Designed for A4 resume layouts.
- **PDF Export** — Download your resume as a PDF.
- **Undo & Redo** — Easily reverse or restore editing changes.
- **List Formatting** — Add bullet points and numbered lists.
- **Responsive UI** — Clean interface designed for a smooth editing experience.

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- React Router DOM

**Rich Text Editor**
- Tiptap
- ProseMirror

**Storage**
- LocalStorage

**PDF Export**
- html2pdf.js

## 📂 Project Structure

```text
resume-craft/
├── public/
├── src/
│   ├── components/
│   │   ├── Edit/
│   │   │   ├── EditMain.jsx
│   │   │   ├── ResumeEditor.jsx
││   │   │   ├── EditorToolbar.jsx
││   │   │   ├── extensions/
││   │   │   └── utils/
│   │   ├── Templates.jsx
││   │   ├── TemplateCard.jsx
││   │   └── SavedResumes.jsx
││   ├── utils/
││   │   └── resumeStorage.js
││   ├── App.jsx
││   ├── main.jsx
││   └── index.css
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/resume-craft.git
```

### 2. Navigate to the project directory

```bash
cd resume-craft
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the application.

## 📖 How to Use

1. Open the application.
2. Choose a resume template.
3. Create a new resume.
4. Edit your content directly inside the editor.
5. Format text using the toolbar.
6. Your changes are automatically saved in LocalStorage.
7. Download your resume as a PDF.

## 💾 Data Storage

This project currently uses browser **LocalStorage** to store resume data.

- No backend or database is required.
- Resumes remain saved in the same browser.
- Clearing browser storage may delete saved resumes.
- Data is not automatically synchronized between devices.

## 🔮 Future Improvements

- More resume templates.
- Custom layout and design options.
- Profile image support.
- Drag-and-drop section management.
- Cloud storage and user authentication.
- Import existing resumes.
- Improved PDF export and pagination.

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Submit a pull request.

## 📄 License

This project is open-source and available under the MIT License.

---

**Built with ❤️ using React, Vite, and Tiptap.**
