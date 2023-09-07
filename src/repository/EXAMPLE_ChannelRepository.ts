import { ReturnModelType } from '@typegoose/typegoose';
import { Channel, EXAMPLE_ChannelModel } from './models/EXAMPLE_ChannelModel';

class EXAMPLE_ChannelRepository {
  model: ReturnModelType<typeof Channel>;

  constructor () {
    this.model = EXAMPLE_ChannelModel;
  }

  async create (input: any) {
    const newRecord = new this.model(input);
    const savedRecord = await newRecord.save();
    // do something with the new record

    // now return it
    return savedRecord;
  }
}

export default new EXAMPLE_ChannelRepository();

