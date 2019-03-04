import { Router } from "express";
import Model from '../models';

const { Role } = Model;

const router = Router();

router.post('/', (req, res) => {
    Role.create({
        name: req.body.name,
    }).then((role) => {
        res.send({
            status: 201,
            data: role,
        });
    });
});

export default router;