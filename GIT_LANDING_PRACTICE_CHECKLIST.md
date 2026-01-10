# Git Practice Checklist for Landing Page (Fork-Only Workflow)

This checklist is designed for **learning Git in practice** while building a landing page.
The original repository will NOT change. All work happens in **your fork only**.

You can reuse this checklist for any future project.

---

## 🔒 Global Rules (Always)

- [ ] Work only in your fork
- [ ] `main` branch is always stable
- [ ] Never commit directly to `main`
- [ ] Every feature = separate branch
- [ ] Small, logical commits only
- [ ] Clean history before merging
- [ ] Use Pull Requests even when working alone

---

## 🧱 Project Start (Once per project)

- [ ] Fork repository
- [ ] Clone fork locally
- [ ] Open project locally and run it
- [ ] Make sure `main` works without changes
- [ ] Push clean `main` to your fork

---

## 🌿 Feature Workflow (Repeat for EVERY feature)

### BEFORE starting a feature (ALWAYS)

- [ ] Checkout `main`
  ```bash
  git checkout main
  ```
- [ ] Pull latest changes from your fork
  ```bash
  git pull origin main
  ```
- [ ] Create a feature branch
  ```bash
  git checkout -b feature/<feature-name>
  ```

Examples:
- feature/header
- feature/hero
- feature/footer
- feature/contact-form

---

### DURING feature development (OFTEN)

- [ ] Commit frequently
- [ ] Each commit does one thing
- [ ] No "WIP" commits in final history

Commit message examples:
```
feat: add hero section markup
style: make hero responsive
fix: align CTA button on mobile
```

---

### AFTER finishing a feature (ALWAYS)

#### 1️⃣ Clean commit history (Interactive Rebase)

- [ ] Run interactive rebase
  ```bash
  git rebase -i HEAD~N
  ```
- [ ] Squash unnecessary commits
- [ ] Reword unclear messages
- [ ] Remove useless commits

Goal: **one clear commit per feature**

---

#### 2️⃣ Rebase feature onto latest main

- [ ] Update main
  ```bash
  git checkout main
  git pull origin main
  ```
- [ ] Rebase feature
  ```bash
  git checkout feature/<feature-name>
  git rebase main
  ```

- [ ] Resolve rebase conflicts if they appear
- [ ] Continue rebase
  ```bash
  git rebase --continue
  ```

---

### MERGE feature (ALWAYS)

- [ ] Push feature branch
  ```bash
  git push origin feature/<feature-name>
  ```
- [ ] Open Pull Request (feature → main)
- [ ] Review your own code
- [ ] Merge via GitHub UI
- [ ] Delete feature branch (remote + local)

---

## 🔀 Merge & Rebase Practice Plan

### Rebase
✔ After EVERY feature  
✔ At least 5–8 times per landing  

Purpose:
- Clean history
- Learn conflict resolution during rebase

---

### Merge
✔ After EVERY feature  
✔ At least 5–8 merges per landing  

Purpose:
- Integrate features
- Understand merge commits

---

## 💥 Conflict Practice (INTENTIONAL)

### Merge Conflicts (2–3 times per landing)

- [ ] Create two feature branches from `main`
- [ ] Modify the same file and same lines
- [ ] Merge first feature into `main`
- [ ] Merge second feature → conflict
- [ ] Resolve manually
- [ ] Commit conflict resolution

Files to use:
- header.html
- styles.css
- config file

---

### Rebase Conflicts (2 times per landing)

- [ ] Start feature branch
- [ ] Modify shared file
- [ ] Switch to `main` and change same file
- [ ] Rebase feature onto `main`
- [ ] Resolve conflicts
- [ ] Continue rebase

---

## 🔄 Reset vs Revert (MANDATORY PRACTICE)

### Reset (Local mistakes — ONCE)

- [ ] Make a bad commit
- [ ] Try:
  ```bash
  git reset --soft HEAD~1
  git reset --mixed HEAD~1
  git reset --hard HEAD~1
  ```

Learn:
- What happens to commits
- What happens to files

---

### Revert (Safe undo — ONCE)

- [ ] Merge a feature into `main`
- [ ] Revert it
  ```bash
  git revert <commit-hash>
  ```

Learn:
- How to undo safely
- Why revert is used in production

---

## 📦 Final Commit History Structure (GOAL)

Your `main` branch should look like this:

```
feat: add header section
feat: implement hero section
feat: add features section
feat: add contact form
style: finalize responsive styles
chore: clean up assets and configs
```

### Rules:
- No WIP commits
- No "fix again" commits
- Each commit explains WHY the change exists
- History is readable top to bottom

---

## 🧠 Expected Result After Finishing

- [ ] Confident with branches
- [ ] Comfortable with rebase and merge
- [ ] Able to resolve conflicts calmly
- [ ] Understand reset vs revert
- [ ] Ready for real team workflows

---

## ✅ Landing Finished

- [ ] All features merged
- [ ] `main` clean and stable
- [ ] Git history professional
- [ ] Ready to deploy
