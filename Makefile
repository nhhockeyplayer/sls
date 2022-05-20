###########################################
all allprojects: # makes everything
	nx run-many --all --target build

###########################################
# Mobile App Sumitup
widgetsb sls-shared-widgets: #makes the sacred light software project
	nx build sls-shared-widgets

widgets sls-shared-widgets: #makes the sacred light software project
	nx run sls-shared-widgets:storybook

sob sumitup: # makes the sumitup project
	nx build sumitup

so sumitup: # serves the sumitup project
	nx serve sumitup

###########################################
# Mobile App Energy
eob energy: # makes the energy project
	nx build energy

eo energy: # serves the energy project
	nx serve energy

###########################################
# Mobile App
mob mobile-app: # makes the mobile-app project
	nx build mobile-app

mo mobile-app: # serves the mobile-app project
	nx serve mobile-app

###########################################
# Mobile Mobile-Tabbed
mot mobile-app: # makes the mobile-app project
	nx build mobile-tabbed

mt mobile-app: # serves the mobile-app project
	nx serve mobile-tabbed

###########################################
# Admin Portal
pob proto-app: # makes the proto-app project
	nx build proto

po proto-app: # serves the proto-app project
	nx serve proto

###########################################
# Koamicroservice Backend
kb koamicroservice: # makes the koamicroservice project
	nx build koamicroservice

k koamicroservice: # serves the koamicroserviceproject
	nx serve koamicroservice --live-reload

###########################################
# e2-Ask Portal
eb e2-ask: # makes the e2-ask project
	nx build --project=e2-ask

e e2-ask: # serves the e2-ask project
	nx serve e2-ask --live-reload

###########################################
# Admin Portal
adb admin: # makes the admin project
	nx build --project=admin

ad admin: # serves the admin project
	nx serve admin --live-reload

###########################################
# Administrator Portal
ab administration: # makes the administration project
	nx build --project=administration

a administration: # serves the adminstration project
	nx serve administration --live-reload

###########################################
# Patient Portal

p patient: # serves the patient project
	nx serve patient  --live-reload

pb patient-build: # builds the patient project to dist
	nx build --project=patient

pbp patient-build-prod: # builds the patient project to dist with prod flag on
	nx build --prod --project=patient

# ios
pi patient-ios: # serves the patient project in xcode
	nx run patient-cap:open --platform ios

pia patient-ios-add: # adds ios support to the patient app - should never need to be ran again
	nx run patient-cap:add --platform ios

pis patient-ios-sync: # syncs the dist directory of the web app to ios
	nx run patient-cap:sync --platform ios

# android
pa patient-android: # serves the patient project in android studio
	nx run patient-cap:open --platform android

paa patient-android-add: # adds android support to the patient app - should never need to be ran again
	nx run patient-cap:add --platform android

pas patient-android-sync: # syncs the dist directory of the web app to android
	nx run patient-cap:sync --platform android

# End Patient Portal
###########################################

###########################################
# med Portal

m med: # serves the med project
	nx serve med  --live-reload

mb med-build: # builds the med project to dist
	nx build --project=med

mbp med-build-prod: # builds the med project to dist with prod flag on
	nx build --prod --project=med

# ios
mi med-ios: # serves the med project in xcode
	nx run med-cap:open --platform ios

mia med-ios-add: # adds ios support to the med app - should never need to be ran again
	nx run med-cap:add --platform ios

mis med-ios-sync: # syncs the dist directory of the web app to ios
	nx run med-cap:sync --platform ios

# android
ma med-android: # serves the med project in android studio
	nx run med-cap:open --platform android

maa med-android-add: # adds android support to the med app - should never need to be ran again
	nx run med-cap:add --platform android

mas med-android-sync: # syncs the dist directory of the web app to android
	nx run med-cap:sync --platform android

# End med Portal
###########################################

###########################################
# Backend

b backend:
	nx serve api

bb build-backend:
	nx build --project=api

bbp build-backend-prod:
	nx build --prod --project=api

btg backend-typegoose:
	nx serve api-typegoose

bbtg build-backend-typegoose:
	nx build --project=api-typegoose

bbtgp build-backend-prod-typegoose:
	nx build --prod --project=api-typegoose

# End backend
###########################################

###########################################
# NX workspace

unx update-nx:
	nx migrate @nrwl/workspace

# End NX workspace
###########################################

###########################################
# Docker Database

dp docker-prune:
	docker system prune -a

dbs db-start:
	docker-compose up


# End Docker Database
###########################################

###########################################
all allprojects: # makes everything
	nx run-many --all --target build

###########################################


###########################################
# christmas Portal
c christmas: # serves the christmas project
	nx serve christmas  --live-reload

cb christmas-build: # builds the christmas project to dist
	nx build --project=christmas

cbp christmas-build-prod: # builds the christmas project to dist with prod flag on
	nx build --prod --project=christmas

# ios
ci christmas-ios: # serves the christmas project in xcode
	nx run christmas-cap:open --platform ios

cia christmas-ios-add: # adds ios support to the christmas app - should never need to be ran again
	nx run christmas-cap:add --platform ios

cis christmas-ios-sync: # syncs the dist directory of the web app to ios
	nx run christmas-cap:sync --platform ios

# android
ca christmas-android: # serves the christmas project in android studio
	nx run christmas-cap:open --platform android

caa christmas-android-add: # adds android support to the christmas app - should never need to be ran again
	nx run christmas-cap:add --platform android

cas christmas-android-sync: # syncs the dist directory of the web app to android
	nx run christmas-cap:sync --platform android

# End christmas Portal
###########################################

###########################################
# Backend
###########################################
b backend:
	nx serve api

bb build-backend:
	nx build --project=api

bbp build-backend-prod:
	nx build --prod --project=api

#------------------------------------------#
bg backend-micro-gate:
	nx serve micro-gate

bbg build-backend-micro-gate:
	nx build --project=micro-gate

bbgp build-backend-prod-micro-gate:
	nx build --prod --project=micro-gate

#------------------------------------------#
ba backend-auth:
	nx serve auth

bba build-backend-auth:
	nx build --project=auth

bap build-backend-prod-auth:
	nx build --prod --project=auth

#------------------------------------------#
bl backend-lottery:
	nx serve lottery

bbl build-backend-lottery:
	nx build --project=lottery

blp build-backend-prod-lottery:
	nx build --prod --project=lottery

#------------------------------------------#
bv backend-video:
	nx serve video

bbv build-backend-video:
	nx build --project=video

bvp build-backend-prod-video:
	nx build --prod --project=video

#------------------------------------------#
mv json-server-video:
	json-server --watch setup/json-server/videos.json --port=3300

mu json-server-video:
	json-server --watch setup/json-server/users.json --port=3301


# End backend
###########################################

###########################################
# NX workspace

unx update-nx:
	nx migrate @nrwl/workspace

# End NX workspace
###########################################

###########################################
# NX workspace

unx update-nx:
	nx migrate @nrwl/workspace

# End NX workspace
###########################################

###########################################
# Docker Database

dp docker-prune:
	docker system prune -a

dbs db-start:
	docker-compose up

dbbs db-backup-schema:
	pg_dump -s -h christmas-db-prod.cluster-cvf8j8i1li7v.us-east-1.rds.amazonaws.com -U christmas_master postgres > energy-schema.pgsql

dbbd db-backup-data:
	pg_dump -a -h christmas-db-prod.cluster-cvf8j8i1li7v.us-east-1.rds.amazonaws.com -U christmas_master postgres > energy-data.pgsql

dbls db-load-schema:
	psql -U christmas_master -d postgres -f ./energy-schema.pgsql -h localhost

dbld db-load-data:
	psql -U christmas_master -d postgres -f ./energy-data.pgsql -h localhost

# End Docker Database
###########################################
