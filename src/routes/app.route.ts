import express, { Router } from "express";
import { _getOne as getOne, _get as getUsers, _create as createUser, _update as updateUser, _delete as deleteUser } from './query.route'

const router = Router()

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getOne)
    .put(updateUser)
    .delete(deleteUser);

export default router
