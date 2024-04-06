import { Server, ic } from 'azle';
import cors from "cors";
import express from 'express';

const info = [
    {
        humedad:'sdasd',
        temperatura:'sadasd',
        date:'str in date'
    }
]

export default Server(() => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    // app.use((req, res, next) => {
    //     if (ic.caller().isAnonymous()) {
    //         res.status(401);
    //         res.send();
    //     } else {
    //         next();
    //     }
    // });
    app.post('/save-tp-h', (req, res) => {
        const obj = {
            humedad:req.body.humedad as string,
            temperatura:req.body.temperatura as string,
            date:(new Date()).toString()
        }
        info.push(obj)
        res.status(200).json({msg:'Datos guardados con exito'});
    });

    app.get('/get-tp-h', (req, res) => {
        res.status(200).json(info);
    });

    app.post('/test', (req, res) => {
        res.json(req.body);
    });

    app.get('/whoami', (req, res) => {
        res.statusCode = 200;
        res.send(ic.caller());
    });

    app.get('/health', (req, res) => {
        res.send().statusCode = 204;
    });

    return app.listen();
});
