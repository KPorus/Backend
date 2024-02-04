import { Request, Response } from "express";
import { adminService } from "./admin.service";

const test = async (req:Request, res:Response) => {
    try {
        res.send("Welcome to the test server")
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};
const login = async (req:Request, res:Response) => {
    try {
        const user = await adminService.login(req.body);
        res.status(200).json({ user: user, login: true });
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

const register = async(req:Request, res:Response) => {
    try {
        const user = await adminService.register(req.body);
        if(user){
            res.status(200).json({user: user, register: true});
        }
        else{
            res.status(400).json({register: false});
        }
    } catch (error:any) {
        res.status(500).json({error: error.message});
    }
}
export const adminController={
    test,login,register
}