
import { HealthCheckRouter } from "./api/healthCheck";
import { MemberRouter } from "./api/members";

import { createConnection } from "./helper/dbConnection";

import { IConfig } from "./models/config";
import * as logger from "winston";
import { ApplicationWrapper } from "./bootstrap/application-wrapper";

import { myConfig } from "./config/config";


// Swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./swaggerOptions";

const config: IConfig = myConfig;

createConnection();
const appWrapper = new ApplicationWrapper(config);
appWrapper.configure(app => {
    const specs = swaggerJsDoc(options);

    app.use("/api/healthcheck", new HealthCheckRouter().router);
    app.use("/api/members", new MemberRouter().router);
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
});

appWrapper.start();
