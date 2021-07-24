export const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "SX_APP-SERVER API",
        version: "1.0.0",
        description: "SWAAGER DOC FOR SX_APP-SERVER API",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./src/api/**/*.ts"],
  };