A receipe for building best practice containerized node js apps - TypeScript,VSCode Debugging,Live Reloading,ESLint,Testing & Prettier

## Debug

- choose which way to launch
- press F5
- nodemon handles source code changes immediately

## Production

- docker-compose up

# heroku

## Creation

- heroku login
- heroku create {name}

## Deployment

- heroku container:login
- git add .
- git commit -m "{message}"
- git push heroku master
