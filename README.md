# 📚 Brand Book Library (2025 Edition)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

A curated, responsive digital library featuring **20 modern brand guidelines and corporate identity manuals** from 2024 and 2025. This project serves as a resource for designers and developers looking for contemporary examples of visual identity systems.

Built with **Vanillla JavaScript** and a **JSON-driven architecture** for easy maintenance.

---

## ✨ Key Features

- **⚡ JSON-Driven Content:** All data is stored in a separate `data.json` file, making updates instant without touching HTML.
- **📱 Fully Responsive:** Adaptive table layout with horizontal scrolling support for mobile devices.
- **🎨 Modern UI/UX:** Clean aesthetics using the *Inter* typeface, CSS variables, and hover effects.
- **🔒 Secure External Links:** All PDF links open in new tabs with `rel="noopener noreferrer"` for security.

## 🛠️ Tech Stack

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic structure and accessible table markup |
| **CSS3** | Custom variables, Flexbox, and modern styling |
| **JavaScript (ES6+)** | `fetch()` API for asynchronous data loading and DOM manipulation |
| **JSON** | Lightweight data storage for the brand book entries |

## 🚀 Quick Start

**⚠️ Important Note:** This project uses the `fetch()` API. Due to browser security policies (CORS), **you cannot open `index.html` directly** from your file folder. You must run a local server.

### Option A: VS Code (Easiest)
1. Open the folder in **VS Code**.
2. Install the **Live Server** extension.
3. Click "Go Live" in the bottom right corner.

### Option B: Python
Run this command in your terminal inside the project folder:
```bash
# Python 3
python -m http.server 8000
Then visit http://localhost:8000.

Option C: Node.js
bash
npx http-server .
📂 Project Structure

/brand-books-library
├── 📄 index.html      # Main application entry point
├── 🎨 style.css       # Global styles and responsive rules
├── ⚙️ script.js       # Data fetching and rendering logic
├── 📦 data.json       # Database of brand books
└── 📝 README.md       # Documentation
📝 Configuration
To add or remove brand books, simply edit data.json. The application will automatically render whatever is in this file.

JSON Format:

json
{
    "title": "Brand Name",
    "description": "Brief description of the visual identity.",
    "link": "https://example.com/brand-guidelines.pdf"
}
🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
Distributed under the MIT License. See LICENSE for more information.