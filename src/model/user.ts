// export type user = {
//     username: string;
//     id?: string | number
// }
// interface UserInterface {
//     getUsers(): Array<user>

//     addUser(data: user): void

//     idGenerator(): string | number
// }

// class UserModel implements UserInterface {
//     private userslist: Array<user> = []

//     private generateUser(username: string, id: string | number): user {
//         return {
//             username: username,
//             id: id
//         }
//     }

//     getUsers(): Array<user> {
//         return this.userslist
//     }

//     addUser({ username }: user) {
//         this.userslist.push(this.generateUser(username, this.idGenerator()))
//     }

//     idGenerator(): string | number {
//         return Math.random().toString(16).slice(2)
//     }
// }

// // class UserModel2 extends UserModel implements UserInterface {
// //
// // }

// export const userOrm = new UserModel()

export default class User {
    constructor(firstName: string, lastName: string, userName: string, password: string) {
        const user = {
            firstName,
            lastName,
            userName,
            password,
        };
        return user;
    }
}
