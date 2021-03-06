From cosmicServer directory:
dropdb cosmictornado
createdb cosmictornado
nodemon server.js

Build the app and log in so that you become user 1

In another shell, same dir:
psql cosmictornado

Paste the below:

// Testing on client
COPY users FROM '../../../../Users/Laura/hr41/cosmicServer/database/dummydata/users.csv' ( FORMAT CSV, DELIMITER(',') );
COPY fitness FROM '../../../../Users/Laura/hr41/cosmicServer/database/dummydata/fitness.csv' ( FORMAT CSV, DELIMITER(',') );
COPY profile FROM '../../../../Users/Laura/hr41/cosmicServer/database/dummydata/profile.csv' ( FORMAT CSV, DELIMITER(',') );
COPY match FROM '../../../../Users/Laura/hr41/cosmicServer/database/dummydata/match.csv' ( FORMAT CSV, DELIMITER(',') );
COPY message FROM '../../../../Users/Laura/hr41/cosmicServer/database/dummydata/message.csv' ( FORMAT CSV, DELIMITER(',') );
COPY wallet FROM '../../../../Users/Laura/hr41/cosmicServer/database/dummydata/wallet.csv' ( FORMAT CSV, DELIMITER(',') );


// Testing on production
COPY users FROM '../../../../Users/Laura/hr41/cosmicServer/database/dummydata/users.csv' ( FORMAT CSV, DELIMITER(',') );
COPY fitness FROM '../../../../Users/Laura/hr41/cosmicServer/database/dummydata/fitness.csv' ( FORMAT CSV, DELIMITER(',') );
COPY profile FROM '../../../../Users/Laura/hr41/cosmicServer/database/dummydata/profile-server.csv' ( FORMAT CSV, DELIMITER(',') );
COPY match FROM '../../../../Users/Laura/hr41/cosmicServer/database/dummydata/match.csv' ( FORMAT CSV, DELIMITER(',') );
COPY message FROM '../../../../Users/Laura/hr41/cosmicServer/database/dummydata/message.csv' ( FORMAT CSV, DELIMITER(',') );
COPY wallet FROM '../../../../Users/Laura/hr41/cosmicServer/database/dummydata/wallet.csv' ( FORMAT CSV, DELIMITER(',') );