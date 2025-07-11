![Neovim](https://img.shields.io/badge/NeoVim-%2357A143.svg?&style=for-the-badge&logo=neovim&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

# Sqlcik

Very small (I mean very small) SQL Lite clone in Typescript.

- [x] No AI
- [x] Only NeoVim
- [x] Blog: [(ata.soy)](https://www.ata.soy/blog/how-to-build-your-own-small-sqlite-clone-sqlcik)

# Features

- REPL for interacting with user
- Parser to tokenize the user promts like `insert` and `update`
- Support for `insert`, `update`, `delete`, `select`, `all`

# What I learned

- Inner workings of a database
- Got better with NeoVim
- How to manage CLI project
- Why database prompts works that certain way

# Running the code

```bash
# Create empty users.json file with empty list
npm run dev
```

# Project structure

```bash
src/
├── database.ts     # Where all hard operations takes place
├── main.ts         # REPL
├── parser.ts       # Tokenization of prompts
└── types.ts        # Global types
```
