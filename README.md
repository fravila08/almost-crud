# Project README

This README file lives in the **project root directory** for the entire project

## Project structure

client/ <--frontend app (aka client app / react app)
server/ <--backend app (aka server app / djang webserver)
README.md
.gitignore

## How to install

1. Clone this repo
2. Install Javascript dependencies for client app: `cd client && npm install`
3. Create your python virtual environment for this project the way you normall would.
4. Activate your python virtual environment for this project.
5. **From the project root directory** run `pip install -r server/requirements.txt`
6. Create a postgres database named `controversial_foods`
7. Double-check the `settings.py` file to confirm you have all the config information there needed to connect to the postgres database.
8. Run the Django migrations to build the postgres database: 
    i.  `python manage.py makemigrations controversial_foods`
    ii. `python manage.py migrage`
    iii. Use psql or your tool of choice to confirm the controversial foods database has some tables.

## How to Start the App
**Make sure you are in the project root directory in the terminal.**
1. `cd server && python manage.py runserver`. This starts the Django server. Leave this running.
2. Open a new terminal window or tab. Make sure you're in the project root directory. 
3. `cd client && npm run build:watch`. This will run the build-watch script for the client (react) app. This way, you won't have to run `npm run build` every time you make a change toa ny frontend code.