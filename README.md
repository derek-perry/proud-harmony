# Strapi

This repository deploys a self-hosted version of [Strapi](https://strapi.io/). Internally it uses a PostgreSQL database to store the data.

[![Dependabot Updates](https://github.com/derek-perry/proud-harmony/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/derek-perry/proud-harmony/actions/workflows/dependabot/dependabot-updates)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/strapi?referralCode=milo)

## ✨ Features

- Strapi
- Postgres

## 💁‍♀️ How to use

- Setup Cloudinary and create an API Key in Cloudinary's settings
- Launch this Strapi template in Railway
- Add the Cloudinary environment variables
  - If you choose not to add the Cloudinary related environment variables, your media will not be persisted between deploys.

## 💻 Developing locally

When developing locally this Strapi template will connect to the Postgres server from its public [TCP Proxy](https://docs.railway.app/deploy/exposing-your-app#tcp-proxying)

- Within the service settings of the Strapi service click the `Eject` button on the upstream repository to create a copy of the Strapi Example repo
- Clone that newly created repository locally
- Install Strapi's dependencies with `yarn install` or `npm install`
- Install the Railway CLI
    - Instructions for that can be found [here](https://docs.railway.app/develop/cli#installation)
        - Install on Windows with `npm i -g @railway/cli`
    - If this is your first time using the CLI make sure to login with `railway login`
- Within the local repository run `railway link` to link the local repository to the Strapi service on Railway
- Start Strapi for development with `railway run yarn run develop` or `railway run npm run develop`
    - This command will run Strapi in development mode with the service variables available locally
- Open your browser to `http://127.0.0.1:1337/admin`
- After making changes, deploy with `railway up`

## 📝 Notes

- After your app is deployed, visit the `/admin` endpoint to create your admin user.
- Railway's filesystem is ephemeral which is why any changes to the filesystem are not persisted between deploys. This is why, this template uses Cloudinary for media storage.
- If you want to use npm with this project make sure you delete the `yarn.lock` file after you have ran `npm install`