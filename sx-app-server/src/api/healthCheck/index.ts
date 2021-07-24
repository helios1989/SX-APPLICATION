import { Request, Response, Router } from "express";

export class HealthCheckRouter {
    public router: Router;

    constructor() {
        this.router = Router({ mergeParams: true });
        this.init();
    }

    private init(): void {
        /**
         * @swagger
         * /api/healthcheck:
         *  get:
         *    summary: chech health status
         *    tags: [healthcheck]
         *    responses:
         *      200:
         *        description: check the api health status
         *        content:
         *          text/plain:
         *            schema:
         *              type: string
         *              example: OK
         *
         */
        this.router.get("/", (req: Request, res: Response) => {
            res.status(200).send("OK");
        });
    }
}
