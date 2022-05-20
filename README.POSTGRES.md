#POSTGRES
https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
Launch installer and install it first and add to path
add password for superuser 'postgres'

master password === ~{HOME} user password from your user account
or
jmcjmc

https://www.postgresql.org/download/macosx/
then get the APP for easy init
its below the installer table click and run

now go into your finder and look for folder to launch pgAdmin 4 for database admin

launch pgAdmin 4 from within the postgres subfolders under applications next to the postgres APP

sudo mkdir -p /etc/paths.d &&
echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp

-- stop servers already running free up port https://dev.to/balt1794/postgresql-port-5432-already-in-use-1pcf
sudo lsof -i :5432
sudo pkill -u postgres
sudo lsof -i :5432
-- now you will see 3 databases user, postgres and template1, normally we can initialize from here but not now


lsof -i :5432      -- find pid of postgres
kill -i PID

LAUNCH APP from apps folder
now initialize with APP

#mongo on postgres


#SETUP HERE til DONE
--1 this one https://www.youtube.com/watch?v=EZAa0LSxPPU&ab_channel=ProgrammingKnowledge2
https://postgresapp.com/downloads.html
do the postgres app
initialize and see 3 users
now complete install and env var PATH
https://postgresapp.com/documentation/install.html

admin help https://www.pgadmin.org/download/pgadmin-4-macos/

sudo mkdir -p /etc/paths.d && echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp
-- initial setup complete

BUT YOUR HERE SO FIX WHAT WENT SOUTH DONT USE THE APP FROM DESKTOP USE CMD LINE
https://stackoverflow.com/questions/17633422/psql-fatal-database-user-does-not-exist

#fix yor port to 5432 for the database connection and environment dbPort
#now at terminal

which createdb
createdb
psql -h localhost
psql -U postgres
# ok logged in for initial database
# goto dbeaver and confirm & create a connection to it
# beautiful , dbeaver connection test worked
# not create schema
-- list databases inside psql cmd line tool
psql -U postgres
\list
-- now create database with psql

-- SYSTEM DB REDO THIS NOW ***
pg_ctl -D /usr/local/var/postgres start
pg_ctl -D /usr/local/var/postgres stop
dropdb postgres  -- drop db
ls /usr/local/var/postgres/data
rm -rf /usr/local/var/postgres/data
initdb -D /usr/local/var/postgres/data -U postgres --auth trust
pg_ctl -D /usr/local/var/postgres/data -l logfile start

psql
createuser --superuser postgres
dropuser meanstack02
\q
sudo createdb -U postgres energy

-- cmd line admin
psql postgres
\du - lists users

create schema energy;

make sure in dbeaver you specify energy as the database not postgres

# DONE

#NOW RELAUNCH YOUR API on postgres and it will punch in your models













//create database energy;
//drop database energy;
//SET search_path TO energy, public;

https://www.robinwieruch.de/postgres-sql-macos-setup
brew install postgres
pg_ctl -D /usr/local/var/postgres start
pg_ctl -D /usr/local/var/postgres stop
ls /usr/local/var/postgres
initdb /usr/local/var/postgres/data  -- create 1st postgres db owned by whoami
initdb: warning: enabling "trust" authentication for local connections
You can change this by editing pg_hba.conf or using the option -A, or
--auth-local and --auth-host, the next time you run initdb.
Success. You can now start the database server using:
pg_ctl -D /usr/local/var/postgres/data -l logfile start
OR
createdb -h localhost -p 5432 -U postgres testdb -- to avOID BAD USER CREATION
use latter
nestJS synchronize: true,




-- failed
https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
username: postgres
pwd: 123

add path to zprofile and bin to path
/Library/PostgreSQL/13 -- HOME
/Library/PostgreSQL/13/data -- data
port 5432
/Library/PostgreSQL/13/data/pg_hba.conf

sudo systemctl stop postgresql
sudo pg_ctl -D $POSTGRES_HOME/data stop

