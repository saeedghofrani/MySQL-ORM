import * as mysql from "mysql2";

interface userInterfaces {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}

interface OrmInterface {
    createUser(user: userInterfaces): Promise<string>

    deleteUser(id: string): Promise<string>

    findUserById(id: string): Promise<Array<Array<object>>>

    findAllUsers(): Promise<Array<Array<object>>>

    updateUser(id: string, newUser: userInterfaces): Promise<string>
}

export default class ORM implements OrmInterface {
    connection: any;
    constructor() {
        this.connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "09211953839",
            database: "orm",
        });
    }

    async createUser(user: userInterfaces): Promise<string> {

        const { firstName, lastName, userName, password } = user;

        const createdUser = await this.connection.promise().query(
            `INSERT INTO users(firstName, lastName, userName, password) VALUES ("${firstName}", "${lastName}", "${userName}", "${password}")`
        );

        return `inserted Id: ${createdUser[0]["insertId"]}`;
    }

    async deleteUser(id: string): Promise<string> {
        await this.connection.promise().query(`DELETE FROM users WHERE (id=${id})`);

        return "Deleted";
    }

    async findUserById(id: string): Promise<Array<Array<object>>> {
        const user: any = await this.connection.promise().query(
            `SELECT * FROM users WHERE (id=${id})`
        );

        return user[0];
    }

    async findAllUsers(): Promise<Array<Array<object>>> {
        const users = await this.connection.promise().query("SELECT * FROM users");

        return users[0];
    }

    async updateUser(id: string, newUser: userInterfaces): Promise<string> {
        const { firstName, lastName, userName, password } = newUser;

        await this.connection.promise().query(
            `UPDATE users SET firstName="${firstName}", lastName="${lastName}", userName="${userName}", password="${password}" WHERE id="${id}"`
        );

        return 'updated';
    }
}
