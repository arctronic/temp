import { apiController } from "../controllers/api.controller";
import { apiSchema } from "../schema/api.schema";
import { Router } from "express";
import { validate } from "../../../src/middleware/validate.middleware";

const apiRouter = Router();

apiRouter.post(
  "/secret-route/admin/register",
  validate(apiSchema.registerSchema),
  apiController.register
);

apiRouter.post(
  "/secret-route/admin/login",
  validate(apiSchema.loginSchema),
  apiController.login
);

apiRouter.post(
  "/wait-list/add",
  validate(apiSchema.waitListSchema),
  apiController.waitList
);

apiRouter.get("/wait-list/get", apiController.getWaitList);

export { apiRouter };
