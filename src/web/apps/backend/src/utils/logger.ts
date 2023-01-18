const stream = {
  write: (message: string) => {
    //TODO: change for logger
    console.info(message.substring(0, message.lastIndexOf("\n")));
  }
};

export { stream };
