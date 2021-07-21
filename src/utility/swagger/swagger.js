import swaggerJsDoc from "swagger-jsdoc";

const port = process.env.PORT ?? 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Choose Plan API",
      version: "1.0.0",
      description: "Swagger API Doc for Choose Plan API",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./src/routes/*/*.swagger.js"],
};

const SwaggerSpecs = swaggerJsDoc(options);

export default SwaggerSpecs;