import { v4 as uuid } from 'uuid';
import {ValueObject} from './ValueObject';

export class UUID extends ValueObject<string>{
  constructor (value: string) {
    super(value);
  }

  static random(): UUID {
    return new UUID(uuid());
  }
}
