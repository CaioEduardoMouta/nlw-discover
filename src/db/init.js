const Database = require("./config")

const initDb = {
    //se usar await dentro de uma função ela tem que ser async
    async init() {
        const db = await Database()

        await db.exec(`CREATE TABLE rooms ( 
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            titulo TEXT,
            read INT
        )`);

        await db.close()
    }
}

initDb.init();


