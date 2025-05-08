# Payload + Next.js Project

This is a small practice project that integrates **[Payload CMS](https://payloadcms.com/)** with **Next.js**, styled using TailwindCSS. The project also features **GitHub Actions** for CI workflows, including lint checks and build verification.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15
- **CMS**: [Payload](https://payloadcms.com/) (with MongoDB adapter)
- **UI Utilities**:
  - Radix UI
  - TailwindCSS
  - Lucide Icons
- **Tooling**:
  - TypeScript
  - ESLint
  - GitHub Actions

---

## 📁 Project Structure

- `payload/` – Payload CMS config and collections  
- `pages/` – Next.js pages  
- `components/` – Reusable UI components  
- `.github/workflows/` – GitHub Actions for CI  

---

## ⚙️ GitHub Actions

GitHub Actions is set up to:

- ✅ Lint the code using ESLint  
- 🔧 Build the project to verify correctness  
- 🛡️ Ensure PRs don’t break the build

Workflow file is located at `.github/workflows/ci.yml`.

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
