# Florin Community Forum

## Project description

Our project is a website that provides a forum for Florin County Council residents to post their ideas and concerns.

Our website aims to facilitate community involvement and promote the exchange of knowledge and skills within the community.

Through our website, we hope to empower residents to play an active role in sustaining the public services that have contributed so much to Florin's vibrant and cohesive society.

## Installation & usage

### Installation

From the root run `npm install` (or `npm install -D` if you plan to develop and want nodemon)

This app requires a `.env` file to run locally which requires:

- `DB_URL=XXXXXXXX` the url for your postgres database
- `BCRYPT_SALT_ROUNDS=XX` salt rounds for bcrypt
- Optionally add `PORT=XXXX` if you want the server to use a specific port (defaults to 3000)

### Usage

- `npm run setup-db` to setup the database
- `npm run start` to start the server normally
- `npm run dev` to start it if you plan to develop

[Or click here if you just want to visit the site](florin.up.railway.app)

## Technologies

- HTML/CSS/JS
- Node.js, npm
- nodemon, Express.js
- railway.app
- postgres, SQL, ElephantSQL
- bcrypt, uuid
- jest

## Process

We used an agile methodology with daily stand-ups in the morning and wrap-ups in the evening. In addition, all members available to help fix bugs, ask and answer questions and notify each other on finished features through Slack.

We frontloaded most/all of the planning using a Trello board to collect and rank requirements as well as track their progress through the week. We used Whimsical to create an ERD prior to setting up the database and Figma to wireframe the pages we would need before creating them.

We used jest to write automated tests and after the first day of focussing on implementing the skeleton of all the features all members were focussed on testing what we had and writing new tests for new features.

We deployed using railway.app which made the process relatively painless. All we had to do was link this repo, write .env variables, and define the start script.

## Challenges and Wins

Challenges: We all struggled with writing meaningful tests that would pass, of all the technologies we've used jest caused the most issues.

Wins: We achieved our test coverage goal, and developed a functioning MVP by the deadline

## Screenshots

![Home Page](https://github.com/Breegul/florin-community/blob/main/client/assets/READMEscrsh1.png?raw=true)

![Volunteer Form](https://github.com/Breegul/florin-community/blob/main/client/assets/READMEscrsh2.png?raw=true)

## Licence

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
# project-2
