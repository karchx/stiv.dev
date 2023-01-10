// TODO: use yaml files for configuration
import { ContainerBuilder } from "node-dependency-injection";
import ProjectsController from "../controllers/ProjectsController";
import StatusGetController from "../controllers/StatusGetController";
import { ProjectCreator } from "../context/mooc/application/ProjectCreator";
import {MongoProjectRepository} from "../context/mooc/infrastructure/persistence/MongoProjectRepository";

const container = new ContainerBuilder();
container.register("Mooc.application.ProjectCreator", ProjectCreator);//.addArgument("@Mooc.domain.ProjectRepository")
container.register("Mooc.domain.ProjectRepository", MongoProjectRepository)
container.register("Apps.controllers.StatusGetController", StatusGetController);
container.register("Apps.controllers.ProjectsController", ProjectsController).addArgument("@Mooc.application.ProjectCreator");

// Projects

export default container;
