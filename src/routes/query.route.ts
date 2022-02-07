import { Request, Response, RequestHandler } from "express";
import User from '../model/user';
import ORM from "../utils/orm.utils";
const orm = new ORM()

interface userInterfaces {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}


export const _getOne: RequestHandler = async function (req: Request, res: Response) {
    const id = req.params.id
    res.send(await orm.findUserById(id));
}

export const _get: RequestHandler = async function (req: Request, res: Response) {
    const users = await orm.findAllUsers()
    res.send(users);
}
export const _create: RequestHandler = async function (req: Request, res: Response) {
    const data: userInterfaces = req.body
    res.json(await orm.createUser(data));
}
export const _update: RequestHandler = async function (req: Request, res: Response) {
    const id = req.params.id;
    const data: userInterfaces = req.body;
    res.send(await orm.updateUser(id, data));
}
export const _delete: RequestHandler = async function (req: Request, res: Response) {
    const id = req.params.id;
    res.send(await orm.deleteUser(id));
}