# RocketSeat Course

### About the course

https://www.rocketseat.com.br/

NLW >> Mission: Node.JS


### Steps to run this project:

1. Run `yarnpkg install` or `yarn install` command
2. Setup database settings inside `ormconfig.json` file
3. Run `yarnpkg dev` or `yarn dev` command


### Creating a migration with TypeOrm

`yarnpkg typeorm migration:create -n CreateUsers`

running migrations

`yarnpkg typeorm migration:run`


### Creating models with TypeOrm

`yarnpkg typeorm entity:create -n User`