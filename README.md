# Precision Fabricators Website

A React-based website for **Precision Fabricators**, showcasing professional fabrication services.

## Features

- Modern and responsive design.
- Comprehensive header, footer, and content sections.
- Hosted on GitHub Pages for easy accessibility.

## Folder Structure
precision-fabricators/ </br>
├── public/                </br>
├── src/                   </br>
│   ├── components/        </br>
│   ├── images/            </br>
│   ├── styles.css         </br>
│   ├── App.js             </br>
│   ├── index.js           </br>
├── .github/workflows/     </br>
├── package.json           </br>
├── package-lock.json      </br>
├── README.md              </br>
└── .gitignore             </br>

## Getting Started
Follow these steps to set up and run the project locally:

### Prerequisites

- **Node.js** (v14 or above)
- **npm** (v6 or above)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/precision-fabricators.git
    ```

2. Navigate into the project directory:

    ```bash
    cd precision-fabricators
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the Project

To run the website locally:

```bash
npm start
 ```
This starts a local development server at `http://localhost:3000/.`

### Building the Project
To build the project for production, use the following command:

```bash
npm run build
```
This creates an optimized production build in the `build/` directory.

The build process includes:

- Minifying JavaScript and CSS files
- Optimizing images
- Creating the necessary assets for deployment

Once built, you can serve the production build locally using:

```bash
npm install -g serve
serve -s build
```
This will host your optimized project locally at `http://localhost:5000/`.

### Deployment to GitHub Pages
The project is configured to deploy automatically using GitHub Actions whenever changes are pushed to the `main` branch.

**Triggering the Deployment Workflow**:
  1. Ensure your `package.json` has the correct `homepage` field:

```bash
"homepage": "https://your-username.github.io/precision-fabricators"
 ```
  2. Push changes to the `main` branch to trigger the deployment workflow.

If deployment fails, ensure:

- GitHub Actions has **write permissions**.
- Workflow configuration in `.github/workflows/deploy.yml` is correct.

## Required Configurations
### For Deployment on GitHub Pages
Add the following to your `Router` in `App.js`:

```bash
<Router basename="/precision-fabricators">
```
This ensures proper routing for GitHub Pages. Remove the `basename` when running locally.

## Dependencies
Key dependencies include:

- **React**: Front-end library
- **React Router DOM**: For routing
- **npm**: Package manager
  
To view all dependencies, check `package.json`.

### Continuous Integration (CI)
This project uses GitHub Actions for automated deployment:

  1. Workflow file: `.github/workflows/deploy.yml`
  2. Trigger: Push to `main` branch
  3. CI Tasks:
       - Install dependencies
       - Build the project
       - Deploy to `gh-pages` branch
