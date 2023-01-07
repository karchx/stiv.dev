// TODO: use yaml files for configuration
import { ContainerBuilder } from "node-dependency-injection";
import ProjectsController from "../controllers/ProjectsController";
import StatusGetController from "../controllers/StatusGetController";

const container = new ContainerBuilder();
container.register("Apps.controllers.StatusGetController", StatusGetController);
container.register("Apps.controllers.ProjectsController", ProjectsController);

export default container;
