
rm -rf node_modules
yarn install
nx serve demo --watch


https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/3-generating-components-and-nx-lib

nx generate @nrwl/angular:component containers/login --project=auth


nx generate @nrwl/angular:directive widget/directive --project=sls-shared-widget --dry-run
nx generate @nrwl/angular:directive widget/directive --project=sls-shared-widgets --dry-run
nx generate @nrwl/angular:directive widget/directive/heading --project=sls-shared-widgets --dry-run
nx generate @nrwl/angular:directive widget/directive/heading --project=sls-shared-widgets
nx generate @nrwl/angular:directive widget/directive/heading --project=sls-shared-widgets
nx generate @nrwl/angular:directive directive/heading --project=sls-shared-widgets
nx generate @nrwl/angular:directive directive/heading --project=sls-shared-widgets --dry-run
nx generate @nrwl/angular:directive directive/heading/heading --project=sls-shared-widgets --dry-run
nx generate @nrwl/angular:directive directive/heading/heading --project=sls-shared-widgets
nx serve demo --watch
