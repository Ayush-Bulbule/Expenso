import CONSTANTS from '@/constants';
import * as SQLite from 'expo-sqlite';

export class DatabaseInitializer {
    private db: SQLite.SQLiteDatabase;

    constructor() {
        this.db = SQLite.openDatabaseSync(CONSTANTS.DB.NAME);
        console.log("DB Constructor called!");
    }

    // Create Tables (This needs to be done first time)
    async initializeTables(): Promise<void> {
        try {
            await this.db.withTransactionAsync(async () => {
                // Transaction Table
                await this.db.execAsync(
                    `CREATE TABLE IF NOT EXISTS ${CONSTANTS.DB.TRANSACTIONS_TABLE} (
                        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                        title TEXT NOT NULL,
                        amount REAL NOT NULL,
                        category TEXT NOT NULL,
                        type TEXT NOT NULL,
                        timestamp INTEGER NOT NULL
                    )`
                );

                // Categories Table
                await this.db.execAsync(
                    `CREATE TABLE IF NOT EXISTS ${CONSTANTS.DB.CATEGORIES_TABLE} (
                        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                        name TEXT NOT NULL UNIQUE,
                        icon TEXT NOT NULL
                    )`
                );

                console.log("Tables Created");
            });
        } catch (error) {
            console.error("Error creating tables:", error);
            throw error;
        }
    }

    // Seed Categories (Uncomment and modify as needed)
    async seedCategories(): Promise<void> {
        try {
            //if categories empty then seed
            const data: {count:number}[] = await this.db.getAllAsync(`SELECT COUNT(*) as count FROM ${CONSTANTS.DB.CATEGORIES_TABLE};`);
            if(data[0].count > 0) return;

            await this.db.withTransactionAsync(async () => {
                for (const category of CONSTANTS.CATEGORIES) {
                    const query = `
                    INSERT INTO ${CONSTANTS.DB.CATEGORIES_TABLE} (name, icon) 
                    VALUES ('${category.name}', '${category.icon}');`;
                    console.log("Query:", query);
                    await this.db.execAsync(query);
                }
            });
        } catch (error) {
            console.error("Error seeding categories:", error);
            throw error;
        }
    }

    // Initialize Database
    async initialize(): Promise<void> {
        try {
            await this.initializeTables();
            await this.seedCategories();
            console.log("Database initialized successfully");
        } catch (error) {
            console.error("Error initializing database:", error);
            throw error;
        }
    }
}