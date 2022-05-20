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
