# Full Stack App 2

## Good commands
`python manage.py showmigrations controversial_
foods`

## Implementation / Construction Steps

TODO: 
- Feature work (login, logout, etc)

X- Django config
   X - add django rest framework to installed apps
   X - create django app
      X - add to installed apps in settings.py
       X - set up the urls route

X- set up postgres
   X - create database
   X - set db to postgres in settings.py
   X - set db name in settings.py 

- set up user auth model
    X- create custom user model from abstract base user
    X- in settings.py set AUTH_USER_MODELspecify model name for the special user model

X- run migrations AFTER postgres is set up AND our user auth model is set up

X- set up our static file directory in django
   X - create static dir
   X - set static dir path in settings.py
   X  - TEST THAT THIS WORKS WITH REACT

X- configure vite to build react app (client) for django
    X- set build output directory
    X- set base path for urls
   X - TEST THAT IT WORKS WITH DJANGO

