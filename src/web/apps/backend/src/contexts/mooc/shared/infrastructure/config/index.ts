import convict from 'convict';

const moocConfig = convict({
  mongo: {
    url: {
      doc: 'The mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default: 'mongodb://localhost:27017/mooc-backend-dev'
    }
  }
});

// moocConfig.loadFile([__dirname + ])
export default moocConfig;
