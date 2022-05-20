# RESET ENVIRONMENT Install Nrwl first omit typescript its bundled
yarn might be gone at this point
npm -g install yarn
990  npm -g install yarn
991  sudo npm -g install yarn
992  npm install -g npm@8.1.4
993  sudo npm install -g npm@8.1.4
-- globals
cd ~HOME
yarn cache clean
npm cache clean --force
rm -rf .config .npm .npmrc
npm -g install yarn

yarn global add @nrwl/cli@latest
yarn global add @nrwl/workspace@latest
yarn global add @nrwl/schematics@latest
yarn global add @angular/cli
yarn global add @ionic/cli
yarn global add @nest/cli
yarn global add cordova

-- nxtend
yarn add @nrwl/workspace @nrwl/schematics @capacitor/core @capacitor/cli
nx list
nx report
yarn add --save-dev --exact @nxtend/ionic-angular
nx generate @nxtend/ionic-angular:init

cd new/energy




ng --version - should give full blown report
nx list
nx report

# Energy
nx run-many --all --target build

ng update @angular/core @angular/cli
ng update
ng update @angular/cli @angular/core --allow-dirty --force

In addition to all of the above, have to do an extra step:
check if there is a duplicate versions of webpack, don't know how it was introduced though. The tree looked:
+-- @angular-devkit/build-angular@12.0.0 -- webpack@5.36.2   -- webpack@5.36.2
If so, fixed by( https://docs.npmjs.com/cli/v7/commands/npm-dedupe ):
npm dedupe
https://stackoverflow.com/questions/65849026/errors-after-npm-audit-fix-angular-10-0-1

npm i --package-lock-only
npm install --package-lock

#NRWL
If it's your first Nx project, the command will recommend you to install @nrwl/cli globally,
so you can invoke nx directly without going through yarn or npm.
1093  yarn global add @nrwl/cli@11.6.3
1094  which nx
1095  yarn global add @nrwl/workspace@11.6.3


# GIT
git remote set-url origin git@github.com:nhhockeyplayer/starter.git

-- https://nx.dev/latest/core-concepts/updating-nx
nx migrate latest
yarn
nx migrate --run-migrations
nx run-many --all --target build

npx create-nx-workspace@latest <workspace name>

nx g @nrwl/workspace:remove collections -- remove library

nx g @nrwl/workspace:remove api-service
nx g @nrwl/workspace:remove core
nx g @nrwl/workspace:remove env
nx g @nrwl/workspace:remove isomorphic-interface
nx g @nrwl/workspace:remove service
nx g @nrwl/workspace:remove shared-assets
nx g @nrwl/workspace:remove shared-directives
nx g @nrwl/workspace:remove shared-dto
nx g @nrwl/workspace:remove shared-entity
nx g @nrwl/workspace:remove shared-enums
nx g @nrwl/workspace:remove shared-env
nx g @nrwl/workspace:remove shared-features
nx g @nrwl/workspace:remove shared-generics-collections
nx g @nrwl/workspace:remove shared-ionic
nx g @nrwl/workspace:remove shared-material
nx g @nrwl/workspace:remove shared-pipes
nx g @nrwl/workspace:remove shared-sass
nx g @nrwl/workspace:remove shared-util
nx g @nrwl/workspace:remove shared-widgets

nx g @nrwl/workspace:lib api-service
nx g @nrwl/workspace:lib core
nx g @nrwl/workspace:lib env
nx g @nrwl/workspace:lib isomorphic-interface
nx g @nrwl/workspace:lib service
nx g @nrwl/workspace:lib shared-assets
nx g @nrwl/workspace:lib shared-directives
nx g @nrwl/workspace:lib shared-dto
nx g @nrwl/workspace:lib shared-entity
nx g @nrwl/workspace:lib shared-enums
nx g @nrwl/workspace:lib shared-env
nx g @nrwl/workspace:lib shared-features
nx g @nrwl/workspace:lib shared-generics-collections
nx g @nrwl/workspace:lib shared-ionic
nx g @nrwl/workspace:lib shared-material
nx g @nrwl/workspace:lib shared-pipes
nx g @nrwl/workspace:lib shared-sass
nx g @nrwl/workspace:lib shared-util
nx g @nrwl/workspace:lib shared-widgets

nx g @nrwl/workspace:lib shared-assets
nx g @nrwl/angular:lib core
nx g @nrwl/angular:lib shared-ionic
nx g @nrwl/angular:lib shared-material
nx g @nrwl/workspace:lib shared-generics-collections
nx g @nrwl/workspace:lib shared-util
nx g @nrwl/angular:lib shared-pipes
nx g @nrwl/workspace:lib shared-env
nx g @nrwl/workspace:lib shared-sass
nx g @nrwl/angular:lib shared-features
nx g @nrwl/angular:lib shared-widgets
nx g @nrwl/workspace:lib shared-entity
nx g @nrwl/workspace:lib shared-dto
nx g @nrwl/workspace:lib api-service
nx g @nrwl/workspace:lib isomorphic-interface

ng g @nrwl/workspace:remove project-name
nx g @nrwl/workspace:move --projectName my-feature-lib --destination shared/my-feature-lib






# show then rm node_modules
find . -name "node_modules" -type d -prune | xargs du -chs
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

#NEW WORKSPACE + APPS
npx create-nx-workspace@latest

-- nxtend setup 
yarn add @nrwl/workspace @nrwl/schematics @capacitor/core @capacitor/cli
nx list
nx report
yarn add --save-dev --exact @nxtend/ionic-angular
nx generate @nxtend/ionic-angular:init
-- add NxTend mobile capacitor app
nx generate @nxtend/ionic-angular:application sumitup --capacitor true
nx generate @nxtend/ionic-angular:application energy --capacitor true

-- remove app
ng g @nrwl/workspace:remove proto-e2e
ng g @nrwl/workspace:remove proto

-- add back end api https://nx.dev/latest/angular/tutorial/05-add-node-app
nx list
yarn add --dev @nrwl/express
npx nx g @nrwl/nest:app api-koa --frontendProject=sumitup



#NODE
--angular build hang https://stackoverflow.com/questions/52498146/ng-build-hangs-in-vsts
-- https://medium.com/@joshuamichaelcalafell/what-to-do-when-your-angular-app-runs-out-of-javascript-heap-space-ee0f8a43d8b7
node --max_old_space_size=102400 node_modules/@angular/cli/bin/ng build --prod

#POLYFILLS DEBUG HANG
(window as any).global = window;
(window as any).process = {
env: { DEBUG: undefined },
}

// (window as any).global = window;
// global.Buffer = global.Buffer || require('buffer').Buffer;
// global.process = require('process');





#NODE.JS
--UNINSTALL
curl -ksO https://gist.githubusercontent.com/nicerobot/2697848/raw/uninstall-node.sh
chmod +x ./uninstall-node.sh
./uninstall-node.sh
sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}
rm uninstall-node.sh

-- install node pkg file
-- change perms to fix the sudo problem
sudo chown -R $USER /usr/local/lib/node_modules


#startover after installing node.js
#no yarn global add nx
#no yarn global add typescript@4.3.4 -D
npm i -g yarn
yarn global add @nrwl/cli
yarn global add npm-check
yarn global add @ionic/cli
yarn global add @nrwl/workspace
yarn global add cordova
yarn global add @nestjs/cli
yarn global add @angular/cli
yarn add @nrwl/cli -D

#YARN GLOBALS
yarn global add typescript@4.4.4
npm uninstall -g typescript
npm install -g typescript@4.4.4
npm install -g nx
yarn ng --version
yarn update
ng update @angular/cli @angular/core

rm -rf node_modules
npm i --legacy-peer-deps
yarn install --ignore-engines
make all
make mob

#BUILD WORKAROUNDS
npm i --legacy-peer-deps
rename package-lock.json
yarn install --ignore-engines
npm audit fix --force

npm config set legacy-peer-deps true
npm install --ignore-engines

#typescript hell, choose yarn or npm and cleanup symlinks use one or the other not both
1000  npm install typescript@">=4.0.0 <4.2.0" -g
1001  npm uninstall typescript -g
1002  yarn global remove typescript
1003  rm /usr/local/bin/tsc
1004  rm /usr/local/bin/tsserver
1005  npm install typescript@">=4.0.0 <4.2.0" -g
1006  tsc --v



# ADVICE
stop listening to the world and their band-aid solutions GOTO THE DOCS


#workspace



#IOS @cap-3.0 requires ios-12 in Podfile
yarn remove @capacitor/core @capacitor/cli
// npm install @capacitor/core @capacitor/cli
yarn add @capacitor/core @capacitor/cli




#NPM Packages updating
nx migrate latest
yarn
nx migrate --run-migrations

yarn upgrade @nrwl/cli --latest
nx migrate @angular/material@latest
npx nx migrate @nrwl/workspace@latest
-- backdown nrwl due to forced compiler impositions on @angular/cli and workspace
npx nx migrate @nrwl/workspace@11.6.3
npx nx migrate @nrwl/angular@11.6.3
npx nx migrate @nrwl/cli@11.6.3
yarn global remove nx

#repair
npm i -g @nrwl/cli@12.0.1


#CAPACITOR on mobile app
https://nxtend.dev/docs/ionic-angular/getting-started/
yarn add --save-dev --exact @nxtend/ionic-angular
nx generate @nxtend/ionic-angular:init
nx generate @nxtend/ionic-angular:application mobile-app --capacitor true

nx build mobile-app
nx run mobile-app:add:ios --generates a full ios app in subfolder of your project directory runs copy + update from project
nx run mobile-app:add:android
nx run mobile-app:open:android
@sync means (copy new added plugins, copy build assets, new plugin in package.json update dependencies)


#Nx
yarn ng --version
nx migrate latest
yarn
nx migrate --run-migrations

-- quik cmds
--cap
nx run mobile-app:cap --cmd="--help"
nx run mobile-app:cap -- --help
nx run mobile-app:cap --cmd="doctor"

--nx
nx g @nrwl/workspace:remove collections -- remove library

nx generate @nrwl/angular:lib material
nx g @nrwl/workspace:lib collections
nx g @nrwl/workspace:lib util
nx generate @nrwl/angular:lib pipes


-- capacitor GENERATE app named mobile-app
npx create-nx-workspace@latest <workspace name>

sudo gem install cocoapods
https://dev.to/devinshoemaker
https://dev.to/devinshoemaker/release-nxtend-ionic-angular-1-0-0-2c0d
https://nxtend.dev/docs/ionic-angular/getting-started/

https://github.com/ionic-team/capacitor
npm install @capacitor/core @capacitor/cli
npx cap init
Next, install any of the desired native platforms:
npm install @capacitor/android
npx cap add android
npm install @capacitor/ios
npx cap add ios

yarn add --save-dev --exact @nxtend/ionic-angular
nx generate @nxtend/ionic-angular:init
nx generate @nxtend/ionic-angular:application myApp
nx generate @nxtend/ionic-angular:application mobile-app --capacitor true
nx run mobile-app:add:ios

https://devinshoemaker.com/blog
https://devinshoemaker.com/about

WHAT ABOUT ?
ionic cordova plugin add cordova-plugin-splashscreen
npm install @ionic-native/splash-screen
GO HERE ---> https://nxtend.dev/docs/ionic-angular/getting-started/ for cmd interface?
https://nxtend.dev/docs/ionic-angular/capacitor
https://nxtend.dev/docs/capacitor/getting-started
-- platforms
nx run {frontend project}:add:ios
nx run {frontend project}:add:android
nx run {frontend project}:add --platform {native platform}
nx run my-app:add:android
nx run my-app:cap --cmd="add android"

Commands:
create [options] [directory] [name] [id]  Creates a new Capacitor project
init [options] [appName] [appId]          Initializes a new Capacitor project in the
current directory
serve                                     Serves a Capacitor Progressive Web App in the
browser
sync [options] [platform]                 copy + update
update [options] [platform]               updates the native plugins and dependencies
based in package.json
copy [platform]                           copies the web app build into the native app
open [platform]                           opens the native project workspace (xcode for
iOS)
add [platform]                            add a native platform project
ls [platform]                             list installed Cordova and Capacitor plugins
doctor [platform]                         checks the current setup for common errors
plugin:generate                           start a new Capacitor plugin



PLUGINS
https://capacitorjs.com/docs/apis




#SSH Key Gen
ssh-add -K ~/.ssh/id_rsa

npx sass-graph-viz apps/e2-ask/src --port 4000


-- using psql



-- GUI
https://nosqlbooster.com/downloads


#MAC
xcode-select --install

-- detect shell
echo $SHELL
ps -pf $$
chsh -s /bin/zsh

-- detect profile
/etc/zprofile
/etc/zshrc
/etc/paths
$HOME/.zshrc
/etc/zprofile
sudo chown -R `whoami` ~/.npm
sudo chown -R `whoami` /usr/local/lib/node_modules
sudo chown -R `whoami` /usr/local
npm install -g npm  
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

-- define all major exports in root profile zprofile to be seen exported

#JAVA 1.8
https://stackoverflow.com/questions/24342886/how-to-install-java-8-on-mac
brew tap adoptopenjdk/openjdk
brew install --cask adoptopenjdk8

echo 'export PATH="/usr/local/opt/openjdk/bin:$PATH"' >> ~/.zshrc
echo 'export JAVA_HOME="/usr/local/opt/openjdk:$PATH"' >> ~/.zshrc
ls /usr/local/opt/openjdk

#TOMCAT 9.0.33
https://jeongwhanchoi.medium.com/how-to-install-apache-tomcat-on-mac-os-x-605b1cb55252
https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.33/bin/
download tar.gz unzip copy to ~
cd to bin and chmod + x
cp to Library and set up profile HOME path
-- native lib
https://archive.apache.org/dist/tomcat/tomcat-connectors/native/





https://stackoverflow.com/questions/39386212/install-tomcat-on-mac-os-x
brew install tomcat@9
brew link tomcat@9
echo 'export PATH="/usr/local/opt/tomcat@9/bin:$PATH"' >> ~/.zshrc

brew install tomcat-native

#SETUP
npm and yarn botch up setup

1080  npm install -g nx@11.6.3 --force
1081  yarn global remove nx@11.6.3
1082  yarn global remove nx
1083  rm /usr/local/bin/nx
1084  rm /usr/local/lib/node_modules/nx
1085  rm -rf /usr/local/lib/node_modules/nx
1086  npm uninstall -g nx
1087  yarn global remove nx
1088  which nx
1089  npm install -g nx@11.6.3
1090  which nx
1091  nx -v
1092  nx --version
1093  yarn global add @nrwl/cli@11.6.3
1094  which nx
1095  yarn global add @nrwl/workspace@11.6.3

npm install -g nx   -- NO

yarn global add @nrwl/cli   -- do this 1st !!!!!!!!!! to avoid npm and yarn

npx make-angular-cli-faster
yarn global add @nrwl/workspace

ng add @nrwl/schematics
Using npx

npx create-nx-workspace myworkspace
Using npm init

npm init nx-workspace myworkspace
Using yarn create

yarn create nx-workspace myworkspace

ng g application myapp


#Build
nx run-many --all --target build
or
nx build api
or
make bb -- nx build api
make b -- nx serve api

nx build e2-ask
nx build koamicroservice

npm run start
nx serve e2-ask watch liveReload

#Dep Graph
nx dep-graph

#Back End Build & Run
nx build koamicroservice
npm run build:start-back-end

#Build Production Github Pages
nx run-many --all --target=build --prod --baseHref=/energy/
npm run ghp:deploy

#HOST
127.0.0.1

#URLs
https://nhhockeyplayer.github.io/energy
http://localhost:3333/nestApi/permission  -- backend API
https://localhost:4200/ -- UI app
https://localhost:3000/ -- websockets microgate chat channel

#LOGGING
echo ken 2>&1 | tee output.log

#PORTS
mongodb 27017
node.js api port - 3000 - set within workspace.json (angular.json)
nestJS port 3333



This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different qtypes of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@energy/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.


meanstack02@kenneths-MacBook-Pro new % npx create-nx-workspace myworkspace
npx: installed 48 in 4.658s
✔ What to create in the new workspace · angular-nest
✔ Application name                    · test
✔ Default stylesheet format           · scss
✔ Default linter                      · eslint
✔ Use Nx Cloud? (It's free and doesn't require registration.) · Yes

>  NX  Nx is creating your workspace.

To make sure the command works reliably in all environments, and that the preset is applied correctly,
Nx will run "npm install" several times. Please wait.


>  NX   SUCCESS  Nx has successfully created the workspace.


———————————————————————————————————————————————

UPDATE nx.json

>  NX   NOTE  Nx Cloud has been enabled

Your workspace is currently public. Anybody with code access can view the workspace on nx.app.
You can connect the workspace to your Nx Cloud account at https://nx.app/orgs/workspace-setup?accessToken=YWFlNWY1MTYtN2EwNS00NTk3LWExMDUtZGRlMTc5YTlhOGU2fHJlYWQtd3JpdGU=. (You can do this later.)


———————————————————————————————————————————————


>  NX   NOTE  Nx CLI is not installed globally.

This means that you might have to use "yarn nx" or "npx nx" to execute commands in the workspace.
Run "yarn global add nx" or "npm install -g nx" to be able to execute command directly.


———————————————————————————————————————————————


>  NX   NOTE  First time using Nx? Check out this interactive Nx tutorial.

https://nx.dev/angular/tutorial/01-create-application

Prefer watching videos? Check out this free Nx course on YouTube.
https://www.youtube.com/watch?v=2mYLe9Kp9VM&list=PLakNactNC1dH38AfqmwabvOszDmKriGco





#NODE.JS
vi ~/.npmrc
prefix=/Users/meanstack02/.npm  -- where your packages will be stored
install node.js.pkg - installsheild package from website
npm root -g -- identifies global node_modules, what to do if it dont exist
export PATH=~/.npm/bin:$PATH

npm install -g npm@latest
npm install -g npx@latest

https://wilsonmar.github.io/node-osx-install/#define-node_path
edit .zshrc
export NODE_INSTALL=/usr/local/bin/node
export NODE_PATH=/usr/local/bin

-- check if integrity of install OK
npm-check -g        -- this will flag error if env vars not set right

-- ok watch out for global installed packages
/usr/local/lib/node_modules
delete it
try and park it under .npm
put /usr/local/bin ion path
OK so node.js on install parked npm at /usr/local/lib/node_modules
ls $NPM_CACHE/lib/node_modules -- has all global installs
since you made .npm the npm-cache
846  ls NPM_CACHE
847  ls .npm
848  ls $NPM_CACHE
849  ls $NPM_MODULES
850  npm -g i @ionic/cli
851  ls $NPM_MODULES
852  ls $NPM_CACHE
853  ls $NPM_CACHE/lib
854  ls $NPM_CACHE/lib/node_modules
855  npm i -g npx@latest
856  ls $NPM_CACHE/lib
857  ls $NPM_CACHE/lib/node_modules
858  npm i -g cordova@latest
859  npm i -g npm-check@latest
860  npm --version
meanstack02@admin ~ % npm-check -g
npm i -g yarn       
npm i -g typescript@4.1.3

The global path you are searching is: /usr/local/bin
modules amazing

cd energy
nx migrate latest
yarn
nx migrate --run-migrations


#WEBPACK
                "custom-webpack": {
                    "builder": "@angular-devkit/custom-webpack:browser",
                    "options": {
                        "webpackConfig": "webpack.config.js"
                    }
                },
                "build-webpack": {
                    "builder": "@angular-devkit/build-webpack:webpack",
                    "options": {
                        "webpackConfig": "webpack.config.js"
                    }
                },
                        "webpackConfig": "apps/mobile-app/webpack.config.js"


#SASS
which sass
17  sass --version
18  sudo gem install sass@3.7.0
19  gem list sass --remote
20  gem list sass --remote | grep sass
21  gem list sass --remote | grep "sass (3"
22  gem install sass -v 3.7.0
23  sass --version
24  gem uninstall sass -v 3.7.4
25  gem install sass -v 3.7.0
26  sass --version



# Energy

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@energy/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.






## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.


#GITHUB SETUP
git@github.com:nhhockeyplayer/starter.git

echo "# starter" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:nhhockeyplayer/starter.git
git push -u origin main
or
git remote add origin git@github.com:nhhockeyplayer/starter.git
git branch -M main
git push -u origin main



UNSOLVALBES
=====================
after nbpom-check -u

npm WARN rm not removing /Users/meanstack02/new/starter/node_modules/.bin/ng as it wasn't installed by /Users/meanstack02/new/starter/node_modules/@angular/cli
No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

gyp: No Xcode or CLT version detected!
gyp ERR! configure error
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:351:16)
gyp ERR! stack     at ChildProcess.emit (events.js:375:28)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:277:12)
gyp ERR! System Darwin 20.5.0
gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /Users/meanstack02/new/starter/node_modules/watchpack-chokidar2/node_modules/fsevents
gyp ERR! node -v v14.17.1
gyp ERR! node-gyp -v v5.1.0
gyp ERR! not ok 
