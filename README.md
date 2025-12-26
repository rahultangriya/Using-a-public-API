Below are the steps I used to initialize this repository and push the code to GitHub.

---

## 🚀 Commands Used

### 1. `git init`
This is the first command you run. It creates a new sub-directory named `.git` in your project folder, which houses all the necessary repository files—turning a regular folder into a **Git Repository**.

[Image of git init repository structure]

### 2. `git add .`
Before a snapshot can be saved, files must be moved to the **Staging Area**. 
* Using `git add .` adds all new and changed files to be tracked.
* Think of this as "preparing the package" before shipping it.

[Image of git staging area diagram]

### 3. `git commit -m "Initial Commit"`
This command saves the snapshot of your staged changes. The `-m` flag allows you to add a descriptive message.
* **Pro Tip:** Always write messages in the imperative mood (e.g., "Add feature" instead of "Added feature").

### 4. `git remote add origin <URL>`
This connects your local repository to a remote server (like GitHub). 
* `origin` is just a shorthand name for the remote URL.
* This tells Git exactly where your code should live on the internet.

### 5. `git push -u origin master`
This uploads your local commits to the remote repository.
* The `-u` flag (upstream) remembers your preferences, so next time you can just type `git push`.
* This syncs your local `master` branch with the `master` branch on GitHub.

[Image of git push local to remote workflow]

---

## 🛠 Summary of the Workflow

| Command | Purpose |
| :--- | :--- |
| `git init` | Initializes a local Git repo. |
| `git add` | Stages files for a commit. |
| `git commit` | Saves the staged snapshot. |
| `git remote` | Links local repo to GitHub. |
| `git push` | Uploads code to the cloud. |

---
## 🍴 How to Fork this Repository

If you want to use this project as a base for your own work or contribute to the source code, follow these steps:

### 1. Click the "Fork" Button
Navigate to the top-right corner of this repository's page on GitHub and click the **Fork** button. This creates a complete copy of this project under your own GitHub account.



### 2. Clone Your Fork
Once the fork is created, copy the URL of **your** new repository and run the following in your terminal:
```bash
git clone [https://github.com/YOUR_USERNAME/repository-name.git](https://github.com/YOUR_USERNAME/repository-name.git)
