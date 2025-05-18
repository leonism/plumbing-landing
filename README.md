# Manhattan Plumbing Landing Page



A modern, responsive landing page for Manhattan Plumbing built with Vue 3, Vite, and Tailwind CSS. This project is designed to showcase Manhattan Plumbing's services with a bold, professional design and seamless user experience.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
  - [Pull Request Guidelines](#pull-request-guidelines)
- [License](#license)

---

## About the Project

Manhattan Plumbing Landing Page is a responsive, modern website designed to highlight plumbing services in Manhattan, NY. It features a clean design, dark/light mode support, and a modular codebase for easy maintenance and scalability.

---

## Tech Stack

This project uses the following technologies:

- **Vue 3**: Frontend framework with Composition API and `<script setup>`.
- **Vite**: Fast build tool for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vue Router**: For managing routes and navigation.
- **Heroicons**: For beautiful, scalable icons.
- **@vueuse/head**: For managing meta tags and SEO.

---

## Features

- Responsive design for mobile, tablet, and desktop.
- Light and dark mode with proper color contrast.
- Modular and granular codebase for easy maintenance.
- Semantic HTML for accessibility and SEO.
- Dynamic sections for services, news, and promotions.
- Optimized for performance with lazy-loaded images.

---

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v7 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/manhattan-plumbing-landing.git
   ```

2. Navigate to the project directory:

```bash
cd manhattan-plumbing-landing
```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running The Project

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to http://localhost:5173.

3. To build the project for production:

```bash
npm run build
```

4. To preview for production build

```bash
npm run preview
```

## Folder Structure

Here’s an overview of the project structure:

```bash
src/
├── assets/              # Static assets (images, CSS, etc.)
├── components/          # Reusable Vue components
│   ├── common/          # Shared components (buttons, loaders, etc.)
│   ├── layout/          # Layout components (header, footer, etc.)
│   ├── news/            # News-related components
│   ├── sections/        # Page-specific sections
│   ├── ui/              # UI components (theme toggles, etc.)
├── composables/         # Reusable logic (e.g., useTheme)
├── router/              # Vue Router configuration
├── views/               # Page-level components
├── App.vue              # Root Vue component
├── main.js              # Entry point
```

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contributing

Contributions are welcome! Follow the steps below to contribute to this project.

Pull Request Guidelines

1 Fork the repository.
2 Create a new branch for your feature or bugfix:

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes with clear and concise messages:

```bash
git commit -m "Add feature: your-feature-name"
```

4. Push your branch to your forked repository:

```bash
git push origin feature/your-feature-name
```

5. Open a pull request:

Open a pull request to the main branch of this repository.

---

## Contact

For any inquiries or issues, feel free to reach out:

- Email: support@manhattanplumbing.com
- Website: https://manhattanplumbing.com
