db = new Mongo().getDB("bookletDB");
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

