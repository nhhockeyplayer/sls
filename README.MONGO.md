# security
mongo -u username -p password --host="the.server.ip:port" --authenticationDatabase auth_db_name < your_script.js
https://stackoverflow.com/questions/4837673/how-to-execute-mongo-commands-through-shell-scripts


###### OK SKIP ALL THE SHIT AND REINSTALL USING BREW ######
-- ok repaired and fixed after creating and moving a conf file off of this page
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
Intel Processor
Apple M1 Processor
configuration file
/usr/local/etc/mongod.conf
/opt/homebrew/etc/mongod.conf
log directory
/usr/local/var/log/mongodb
/opt/homebrew/var/log/mongodb
data directory
/usr/local/var/mongodb
/opt/homebrew/var/mongodb


  530  ls /usr/local/var/mongodb
  531  xcode-select --install
  532  brew services list
  533  LS /ETC/M*
  534  ls /etc
  535  ls /etc/mongo*
  536  ls /etc/mongod.conf
  537  sudo mv /etc/mongod.conf /usr/local/etc/mongod.conf
  538  ls /usr/local/etc/
  539  history
  540  history 50
#  did this repeatedly to clean up after each iteration
  541  mongod -config /usr/local/etc/mongod.conf  --dbpath ~/data/db --repair
  542  mongod -config /usr/local/etc/mongod.conf  --dbpath ~/data/db
  543  mongod -config /usr/local/etc/mongod.conf  --dbpath ~/data/db --repair
  544  mongod -config /usr/local/etc/mongod.conf  --dbpath ~/data/db

  now figure out how to start/stop


#LAUNCHCTL - the service mgt framework for macos









https://www.mongodb.com/try/download/community
download and unzip
then copy to ~ put path in path bin dir
access and run after setup
// no brew !

/etc/zprofile
/etc/zshrc
/etc/profile        -- this is the main shell script launched on terminal launch

#export ANDROID_HOME="/Users/meanstack/Library/Android/sdk"
#export ANDROID_SDK_ROOT="/Users/meanstack/Library/Android/sdk"
#export ANDROID_NDK_HOME="/usr/local/share/android-ndk"
#export GRADLE_HOME=/usr/local/gradle/gradle-5.6.4
#export CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL="https\://services.gradle.org/distributions/gradle-5.6.4-all.zip"
#export DEVTOOLS=${HOME}/devtools
#export TOMCAT_HOME=/usr/local/Cellar/tomcat/9.0.33/libexec
##export JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
##export JAVA_HOME=$(/usr/libexec/java_home)
##export JAVA_HOME=`/usr/libexec/java_home`
#export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
#export MONGO_HOME=/usr/local/opt/openjdk
#export BACKUP_HOME=${HOME}/backup

/usr/local/opt
/usr/libexec/
/Library

sudo vi /etc/zprofile
-- set java home path

-- setup JAVA, GRADLE and MONGO

# remove odl mongod install
# See if mongo is in the launch/startup list
launchctl list | grep mongo
# Remove mongodb from the launch/startup
launchctl remove homebrew.mxcl.mongodb
# Kill the mongod process just in case it's running
pkill -f mongod
# Now you can safely remove mongodb using Homebrew
brew uninstall mongodb
brew uninstall --force mongodb
brew uninstall mongodb-community
  375  brew uninstall mongodb
  376  ls /usr/local/bin/m*
  377  brew uninstall --force mongodb
  378  ls /usr/local/bin/m*
  379  brew uninstall mongodb-community
  380  cd /usr/local/Cellar
  381  ls -a
  382  rm -rf mongodb-database-tools
  383  brew list | grep mongo
  384  ls /usr/bin/mongo*
  385  ls /usr/local/bin/m*
  386  ls /usr/local/bin/mongo*
  387  rm -rf /usr/local/bin/mongo*
  388  ls /usr/local/bin/mongo*

  ok its gone except the one you put in path

  DONE

  https://docs.mongodb.com/launch-manage/
  install mongodb CLI
  https://www.mongodb.com/try/download/mongocli

  https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

  mongod --config /usr/local/etc/mongod.conf --fork

mongo
> show databases
> help
DONE

https://www.mongodb.com/basics/create-database

show databases
show dbs

https://docs.mongodb.com/guides/server/install/

# DATA LOCATION
~/data
~/data/db

#REPAIR NOT WORKING
https://docs.mongodb.com/manual/tutorial/recover-data-following-unexpected-shutdown/

mongod -f /etc/mongod.conf --dbpath ~/data/db --repair

#CONFIGURATION
https://docs.mongodb.com/manual/reference/configuration-options/

sudo vi /etc/mongod.conf
security:
  authorization: enabled
net:
  port: 27017
  bindIp: 0.0.0.0

chmod 777 /etc/mongod.conf
mongod -f /etc/mongod.conf

mongod -config /etc/mongod.conf --dbpath ~/data/db --repair

ok still cannot get a clean boot checking db name

#SERVICE ?
sudo systemctl unmask mongodb


#UNINSTALL/REINSTALL
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#uninstall-mongodb-community-edition

sudo service mongod stop
sudo apt-get purge mongodb-org*
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb

sudo service mongod stop

-- cleanup for reinstall

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/










#SEED MONGO *** HANDS ON ***
db.user.insertOne({ create_date: new Date(), created_by: new Date(),
password: 'jmcjmc', emailAddress: 'kcolassi@gmail.com'}
)

db.role.insertOne({ create_date: new Date(), created_by: new Date(), deleted_at: new Date(),
display_name: 'administrator', name: 'administrator', description: 'administrator', is_super: true}
)
db.role.insertOne({ create_date: new Date(), created_by: new Date(), deleted_at: new Date(),
display_name: 'user', name: 'user', description: 'user', is_super: false}
)
db.role.insertOne({ create_date: new Date(), created_by: new Date(), deleted_at: new Date(),
display_name: 'anonymous', name: 'anonymous', description: 'anonymous', is_super: false}
)
db.role.insertOne({ create_date: new Date(), created_by: new Date(), deleted_at: new Date(),
display_name: 'manager', name: 'manager', description: 'manager', is_super: false}
)
db.role.find()

db.permission.insertOne({ create_date: new Date(), created_by: new Date(), deleted_at: new Date(),
name: 'create', display_name: 'create', description: 'create'}
)
db.permission.insertOne({ create_date: new Date(), created_by: new Date(), deleted_at: new Date(),
name: 'read', display_name: 'read', description: 'read'}
)
db.permission.insertOne({ create_date: new Date(), created_by: new Date(), deleted_at: new Date(),
name: 'update', display_name: 'update', description: 'update'}
)
db.permission.insertOne({ create_date: new Date(), created_by: new Date(), deleted_at: new Date(),
name: 'delete', display_name: 'delete', description: 'delete'}
)
db.permission.find()














#MONGO
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
brew tap mongodb/brew
brew install mongodb-community@4.4
https://developer.mongodb.com/community/forums/t/error-couldnt-connect-to-server-127-0-0-1-27017/705/4
mongod --dbpath /users/{username}/data/db/
brew services start mongodb-community
--uninstall
https://medium.com/@rajanmaharjan/uninstall-mongodb-macos-completely-d2a6d6c163f9
ls -al /usr/local/bin/mong*
unlink /...

--install
https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-os-x/
cp install to $HOME
sudo cp /Users/meanstack02/mongodb-macos-x86_64-enterprise-4.4.6/bin/* /usr/local/bin/

-- service cmd put in parent shell zprofile
https://stackoverflow.com/questions/31564526/how-to-start-a-mongodb-service-on-mac-os-x/31587051
cd ~/data/db
mongod --dbpath=.
or fork daemon
mongod --fork --dbpath=/Users/meanstack02/data/db --port 27017 --logpath /Users/meanstack02/data/mongod.log
mongod --shutdown
ps -ef | grep mongo
kill -9 pid
tail -f /Users/meanstack02/data/mongod.log 2>&1 | tee output.log


-- create database
https://www.mongodb.com/basics/create-database
mongo
use energy              -- create the database that simple
db.dropDatabase()       -- drops the database that simple
show dbs

mongosh
use energy
use admin
db.createUser(
  {
    user: 'admin',
    pwd: 'admin',
    roles: [ { role: 'root', db: 'admin' } ]
  }
);
NO

use energy
https://stackoverflow.com/questions/23943651/mongodb-admin-user-not-authorized

sudo vi /usr/local/etc/mongod.conf
vi /etc/mongod.conf
   net:
     port: 27017
     bindIp: 0.0.0.0
   security:
     authorization: enabled
# Turn on/off security.  Off is currently the default
noauth = true
#auth = true

Use Admin :
    use admin

Create a super user :

    db.createUser(
    {
    user: "energy",
    pwd: "jmcjmc,
    roles: [
    {
    role: "readWriteAnyDatabase",
    db: "admin"
    },
    {
    "role" : "dbAdminAnyDatabase",
    "db" : "admin"
    },
    {
    "role" : "clusterAdmin",
    "db" : "admin"
    },
    "userAdminAnyDatabase"
    ]
    }
    )


###################################
Mongodb user management:

roles list:

read
readWrite
dbAdmin
userAdmin
clusterAdmin
readAnyDatabase
readWriteAnyDatabase
userAdminAnyDatabase
dbAdminAnyDatabase
create user:

db.createUser(user, writeConcern)

db.createUser({ user: "user",
pwd: "pass",
roles: [
{ role: "read", db: "database" }
]
})
update user:

db.updateUser("user",{
roles: [
{ role: "readWrite", db: "database" }
]
})
drop user:

db.removeUser("user")
or

db.dropUser("user")
view users:

db.getUsers();
