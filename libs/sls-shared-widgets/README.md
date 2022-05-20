# sls-shared-widgets
nx run-many --all --target build
nx run sls-shared-widgets:storybook

#generate new component within library
nx g @nrwl/angular:component widget/icon --project=sls-shared-widgets --dry-run
#generate new directive within library
nx g @nrwl/angular:directive directive/icon --project=sls-shared-widgets --dry-run

## Running unit tests

Run `nx test sls-shared-widgets` to execute the unit tests.
