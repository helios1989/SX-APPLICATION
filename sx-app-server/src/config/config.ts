import { IConfig } from "src/models/config";

export const myConfig: IConfig = {
    port: process.env.PORT || "3000",
};