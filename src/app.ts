import { config } from "dotenv";
config();
import express, { Application, Request, Response } from 'express';
import { constants as APP_CONST } from "./constant/application";
import {runWorker} from "./workers/main"

const app: Application = express();

const PORT = APP_CONST.APP_PORT || 4000;

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});

runWorker(15);
runWorker(20);
runWorker(35);
runWorker(50);
runWorker(100);