import {Command} from "../../domain/Command";
import {CommandHandler} from "../../domain/CommandHandler";

export class CommandHandlers extends Map<Command, CommandHandler<Command>> {
  constructor(commandHandlers: CommandHandler<Command>[]) {
    super();

    commandHandlers.forEach(commandHandler => {
      this.set(commandHandler.subscribedTo(), commandHandler);
    });
  }

  get(command: Command): CommandHandler<Command> {
    const commandHandler = super.get(command.constructor);

    if (!commandHandler) {
      console.error("Error");
      throw "Error"
    }

    return commandHandler;
  }
}
