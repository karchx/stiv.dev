import config from '../config';
import MongoConfig from '../../../../shared/infrastructure/persistence/mongo/MongoConfig';

export class MOngoConfigFactory {
  static createConfig(): MongoConfig {
    return {
      url: config.get('mongo.url'),
    }
  }
}
