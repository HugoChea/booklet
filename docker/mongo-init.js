db = new Mongo().getDB("tennisPlayersDB");
db.createUser(
    {
        user: "root",
        pwd: "root",
        roles: [
            {
                role: "readWrite",
                db: "bookletDB"
            }
        ]
    }
);

db.createCollection('users', { capped: false });

