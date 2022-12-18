// TODO: use yaml files for configuration
import { ContainerBuilder } from "node-dependency-injection";
import StatusGetController from "../controllers/StatusGetController";

const container = new ContainerBuilder();
container.register("Apps.controllers.StatusGetController", StatusGetController);

export default container;
