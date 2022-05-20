nx g @nrwl/node:library lmds-style --publishable --importPath="@lmds/lmds-style" --tags="scope:public,type:util,target:all" --dry-run











https://dev.to/agroupp/publishable-libraries-with-nx-monorepo-part-1-1ae


nx g @nrwl/node:library lib1 --publishable --importPath="@<organization_name>/lib1" --tags="scope:public,type:util,target:all"
nx g @nrwl/node:library lib2 --publishable --importPath="@<organization_name>/lib2" --tags="scope:public,type:util,target:all"

https://dev.to/agroupp/publishable-libraries-with-nx-monorepo-part-1-1ae


Publishable libraries with Nx Monorepo - part 1 - DEV Community
It can take a while to fetch necessary packages, so be patient. Choose “empty” as the answer to “What to create in the new workspace”, “Nx” to “CLI to power the Nx workspace” and “Only use local computation cache”.In a few minutes, we get our blank canvas where we will express our ideas.
dev.to

https://www.google.com/search?q=Publishable+libraries+with+Nx+Monorepo+-+part+2&rlz=1C5CHFA_enUS952US952&oq=Publishable+libraries+with+Nx+Monorepo+-+part+2&aqs=chrome..69i57j33i299.2015j0j7&sourceid=chrome&ie=UTF-8


https://nx.dev/structure/buildable-and-publishable-libraries

https://github.com/juristr/nx-publishable-libs
https://github.com/juristr/nx-publishable-libs/blob/main/README.md

nx-publishable-libs/README.md at main · juristr/nx-publishable-libs
Contribute to juristr/nx-publishable-libs development by creating an account on GitHub.
github.com



GitHub - juristr/nx-publishable-libs
Contribute to juristr/nx-publishable-libs development by creating an account on GitHub.
github.com



Publishable and Buildable Nx Libraries | Nx
Publishable and Buildable Nx Libraries. The --buildable and --publishable options are available on the Nx library generators for the following plugins:. Angular; React; NestJs; Node; This document will look to explain the motivations for why you would use either the --buildable or --publishable option, as well as the mechanics of how they adjust the result when you add them to your generator.
nx.dev


https://github.com/MadeleineCodes/nx_publishable_lib

GitHub - MadeleineCodes/nx_publishable_lib: Demo showing error when building publishable library depending on other publishable library (when both are in sub folders)
Demo showing error when building publishable library depending on other publishable library (when both are in sub folders) - GitHub - MadeleineCodes/nx_publishable_lib: Demo showing error when buil...
github.com



https://www.npmjs.com/package/ng-packagr

ng-packagr - npm
Compile and package Angular libraries in Angular Package Format (APF)
www.npmjs.com

https://nx.dev/angular/package

@nrwl/angular:package executor
Next generation build system with first class monorepo support and powerful integrations.
nx.dev


https://github.com/nrwl/nx/issues/3023

feedback - can every app/lib have their own package.json? · Issue #3023 · nrwl/nx · GitHub
This is a feedback. I using nx and it works very well to my clients :) One thing though, currently I have one package.json with many dependencies of my apps and libs and its hard to tell which dependency in use in which apps/libs.. It will be great if each app and lib will have its own package.json with the packages that app/lib uses.
github.com

https://github.com/rupeshtiwari/coding-examples-angular-monorepo-nx-azure-ci-cd


https://github.com/nrwl/nx/issues/486


ng g lib mylib --publishable

1048  cd nx-publishable

1049  ls

1050  yarn install

1051  nx g @nrwl/workspace:lib shared-sass --publishable --dry-run

1052  nx g @nrwl/workspace:lib shared-sass --buildable --publishable --dry-run

1053  nx g @nrwl/angular:lib shared-sass --buildable --publishable --dry-run

1054  nx g @nrwl/workspace:lib shared-sass --buildable --publishable --dry-run

1055  ls

1056  ls libs

1057  nx g @nrwl/workspace:lib shared-sass --buildable --publishable

1058  npm run build:libs

1059  nx build shared-sass

1060  npm install -D ng-packagr

1061  npm run build:libs

1062  nx run-many --all --target build

1063  nx build button



Add build configuration in angular.json
{
"projects": {
"lib": {
"architect": {
"build": {
"builder": "@angular-devkit/build-ng-packagr:build",
"options": {
"tsConfig": "libs/lib/tsconfig.lib.json",
"project": "libs/lib/ng-package.json"
}
}
}
}
}
}
Add package.json in the root of lib dir.
{
"name": "@petkit/lib",
"version": "0.0.1",
"peerDependencies": {
"@angular/common": "^6.0.0-rc.0 || ^6.0.0",
"@angular/core": "^6.0.0-rc.0 || ^6.0.0"
}
}
Add ng-package.json in the root of lib dir.
{
"$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
"dest": "../../dist/libs/lib",
"lib": {
"entryFile": "src/index.ts"
}
}

https://github.com/nrwl/nx/issues/4620

https://indepth.dev/posts/1371/how-to-create-your-own-angular-builder

How to stop being afraid and create your own Angular CLI Builder - Angular inDepth
Builder is just a function that can be called using the Angular CLI. It is called with two parameters: JSON-like configuration object; BuilderContext — an object that provides access, for example, to the logger.; A function can be either synchronous or asynchronous. As a bonus, you can return Observable.But in any case, both Promise and Observable should emit BuilderOutput.
indepth.dev


https://github.com/ngx-builders

ngx-builders · GitHub
ngx-builders has 8 repositories available. Follow their code on GitHub.
github.com


https://github.com/nrwl/nx-examples


https://github.com/dangviettuan/nx-publishable

From: Kenneth Colassi
Sent: Wednesday, January 26, 2022 7:34 PM
To: kenneth.colassi@libertymutual.com <kenneth.colassi@libertymutual.com>
Subject: ng-packager

https://nx.dev/structure/buildable-and-publishable-libraries

https://github.com/juristr/nx-publishable-libs
https://github.com/juristr/nx-publishable-libs/blob/main/README.md

nx-publishable-libs/README.md at main · juristr/nx-publishable-libs
Contribute to juristr/nx-publishable-libs development by creating an account on GitHub.
github.com



GitHub - juristr/nx-publishable-libs
Contribute to juristr/nx-publishable-libs development by creating an account on GitHub.
github.com



Publishable and Buildable Nx Libraries | Nx
Publishable and Buildable Nx Libraries. The --buildable and --publishable options are available on the Nx library generators for the following plugins:. Angular; React; NestJs; Node; This document will look to explain the motivations for why you would use either the --buildable or --publishable option, as well as the mechanics of how they adjust the result when you add them to your generator.
nx.dev


https://github.com/MadeleineCodes/nx_publishable_lib

GitHub - MadeleineCodes/nx_publishable_lib: Demo showing error when building publishable library depending on other publishable library (when both are in sub folders)
Demo showing error when building publishable library depending on other publishable library (when both are in sub folders) - GitHub - MadeleineCodes/nx_publishable_lib: Demo showing error when buil...
github.com



https://www.npmjs.com/package/ng-packagr

ng-packagr - npm
Compile and package Angular libraries in Angular Package Format (APF)
www.npmjs.com

https://nx.dev/angular/package

@nrwl/angular:package executor
Next generation build system with first class monorepo support and powerful integrations.
nx.dev


https://github.com/nrwl/nx/issues/3023

feedback - can every app/lib have their own package.json? · Issue #3023 · nrwl/nx · GitHub
This is a feedback. I using nx and it works very well to my clients :) One thing though, currently I have one package.json with many dependencies of my apps and libs and its hard to tell which dependency in use in which apps/libs.. It will be great if each app and lib will have its own package.json with the packages that app/lib uses.
github.com

https://github.com/rupeshtiwari/coding-examples-angular-monorepo-nx-azure-ci-cd

rupeshtiwari/coding-examples-angular-monorepo-nx-azure-ci-cd: Learn how to create monorepo using https://nx.dev. Learn how to use Azure Devops to create CI/CD for your nx monorepo. Also publish application to npm registry. - GitHub
Launching Visual Studio Code. Your codespace will open once ready. There was a problem preparing your codespace, please try again.
github.com
