<!-- OLD -->

to seed the database first run mongod and connect, then run:

mongoimport --db Roost --collection apartments --drop --file ./seeds/apartments.json

mongoimport --db Roost --collection units --drop --file ./seeds/units.json

mongoimport --db Roost --collection renters --drop --file ./seeds/renters.json

mongoimport --db Roost --collection users --drop --file ./seeds/users.json
