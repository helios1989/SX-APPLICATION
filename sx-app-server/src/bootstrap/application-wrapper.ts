import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import * as http from "http";
import { IConfig } from "src/models/config";

import * as logger from "winston";

export class ApplicationWrapper {
    private app: express.Application;
    private server: http.Server;

    constructor(private config: IConfig) {
        this.app = express();
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(
            (
                err: Error,
                req: express.Request,
                res: express.Response,
                next: express.NextFunction
            ) => {
                if (err) {
                    logger.error(err.message);
                    logger.error(err.stack);
                }
            }
        );

        this.server = http.createServer(this.app);
    }

    public start(callback: () => void = () => null): void {
        this.server.listen(this.config.port, () => {
            logger.info(
                `Express server listening on ${this.config.port}, in ${
                    process.env.NODE_ENV
                } mode`
            );
            callback();
        });
    }

    public configure(
        func: (app: express.Application) => void = () => null
    ): void {
        func(this.app);
    }

    get Server(): http.Server {
        return this.server;
    }
}
