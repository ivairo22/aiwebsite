# Recipe Users API

Een simpele JavaScript dataset met helper functies voor gebruikers van een cooking platform.

## Features

* Gebruikers ophalen via ID
* Gebruikers ophalen via username
* Filteren op role
* Filteren op dietary preference
* Actieve gebruikers ophalen
* Verified gebruikers ophalen
* Top users ophalen op basis van followers

---

## Installatie

1. Clone het project

```bash
git clone <repo-url>
```

2. Open het project in WebStorm

3. Installeer dependencies

```bash
npm install
```

---

## Gebruik

Importeer functies in je project:

```js
const {
  users,
  getUserById,
  getUserByUsername,
  getUsersByRole,
  getActiveUsers,
  getVerifiedUsers,
  getUsersByDiet,
  getTopUsers,
} = require('./users');
```

Voorbeelden:

```js
console.log(getUserById(1));

console.log(getUserByUsername('laura_montoya'));

console.log(getTopUsers(3));
```

---

## Project Structuur

```bash
project-folder/
│
├── users.js
├── package.json
└── README.md
```

---

## Tech Stack

* JavaScript
* Node.js
* WebStorm

---

## Auteur

Gemaakt voor oefening en learning purposes.
https://claude.ai/share/24259245-418c-46c3-91b7-ae5657cfedb1
https://chatgpt.com/share/6a18483e-50dc-83eb-9e5f-2b7b6bfcac45