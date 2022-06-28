#login to nrwl at
https://nx.app/orgs

# setup...connect your workspace to nxcloud using your token
https://nx.app/orgs/workspace-setup

-- this was given after you did npx create workspace
"accessToken": "ZmE2OGRhZGQtZDg3Mi00NzQ4LThlMTQtZjk3ODMzZDI2ZmM1fHJlYWQtd3JpdGU="

#now install devtools
yarn add @nrwl/nx-cloud && yarn nx g @nrwl/nx-cloud:init

#claim your workspace
https://nx.app/orgs/workspace-setup?accessToken=OTAyMmM3YzUtNWZkOS00MmVlLTkxNTctY2VhYTdmYTViMWQzfHJlYWQtd3JpdGU=

#DONE, now you can run commands to nxcloud at https://nx.app/orgs/5fb26f98217e0a00056ed9ec/workspaces/62b9d0fc0965660769873720/setup/run-first-command

cd ~/sls
NX_BRANCH=testing npx nx run demo:build 

#GROOM THIS PIECE OF WORKSPACE.JSON for every project your publishing

        "deploy": {
            "builder": "@nrwl/workspace:run-commands",
            "options": {
                "commands": [
                    {
                        "command": "this will deploy demo",
                        "command": "this will deploy sls-shared-sass",
                        "command": "yarn affected:deploy",
                        "command": "yarn affected --target deploy",
                        "command": "alias affected:deploy",

                        "command": "batch script to tag repository then google cloud watches those tags",
                        "command": "on new tag it kicks off build"
                    }
                ]
            }
        }


#distributed caching
npx nx run demo:build 

#github integration (NxCloud app) at https://nx.app/orgs/5fb26f98217e0a00056ed9ec/workspaces/62b9d0fc0965660769873720/setup/set-up-github-integration
1
https://github.com/marketplace/official-nx-cloud-app
2
Open a Pull Request
https://nx.dev/nx-cloud/set-up/set-up-dte#cicd-examples
https://nx.dev/using-nx/ci-overview#distributed-ci-with-nx-cloud

generate YML files at by hand
OR
generate your own at https://nx.dev/packages/workspace/generators/ci-workflow

name: CI
on:
push:
branches:
- main
pull_request:

jobs:
main:
name: Nx Cloud - Main Job
uses: nrwl/ci/.github/workflows/nx-cloud-main.yml@v0.5
with:
number-of-agents: 3
parallel-commands: |
npx nx-cloud record -- npx nx workspace-lint
npx nx-cloud record -- npx nx format:check
parallel-commands-on-agents: |
npx nx affected --target=lint --parallel=3
npx nx affected --target=test --parallel=3 --ci --code-coverage
npx nx affected --target=build --parallel=3

agents:
name: Nx Cloud - Agents
uses: nrwl/ci/.github/workflows/nx-cloud-agents.yml@v0.5
with:
number-of-agents: 3
3
Wait for Your Nx Cloud Report
4
Done

======== work flow generation =======
nx generate ci-workflow ...

#Integrate to google cloud, run docker containers as serverless servers. Only pay for usage and they dont host yoru api all the time... serverless.
# create new service. link your repo to their repo. let it sink. takes time.

#git tag
pushed new tag to repo, google cloud looks, watch repo... netlify.. mirror or watch... set to watch for tags when tag matches criteria it kicks off build
steps in github action. how to run each steps like beeman does ? ideas? new ground. If statements for github actions.
if this app affected...deploy
each app ran bash script, tagged repo, google cloud picks it up and runs with it
nx list affected apps, if admin in output... run these steps to deploy admin... same for api
yarn affected --target deploy
json output?
projects created with main nowadays.... but master was used in scripts
put default base... was master... not officially changed yet
rename branch from master to main
USE MAIN in nx.json
if you create a guithub repo by default in github it is MAIN now
formats dont run well if you dont specify default
git history to get running



