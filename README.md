# This repo 
- is for playing angular in different projs.

## quickstart-cli
- created by `ng new my-app`, to verify the setup.

## tour-of-heroes
- the official tutorial made step by step by me.

## guide-6-display-data
- demo the guide 6 - display data

## guide-7-user-input
- demo the guide 7 - user input

## guide-8-forms
- demo the guide 8 - forms


# How to keep demo projs sync with quickstart-seed?
1) clone a new proj from seed to make sure get the latest one
  - `git clone https://github.com/angular/quickstart.git my-new-proj`

2) `cd my-new-proj`

3) `rm -rf .git`

4) compare src/ folder and copy when necessary, especially some manually changed files, like `index.html`, `*.css`.

5) for npm packages, run `npm install` or move `node_modules/` from another existed proj

6) `npm start`


# How to keep demo projs sync with quickstart cli?
1) create a new proj with cli
  - `ng new my-app`

2) compare two projs

3) `ng serve`
