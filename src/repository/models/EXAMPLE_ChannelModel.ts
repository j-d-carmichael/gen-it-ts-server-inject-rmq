import { getModelForClass, modelOptions, prop, Severity } from '@typegoose/typegoose';
import { v4 } from 'uuid';
import mongoose from 'mongoose';

@modelOptions({
  schemaOptions: {
    collection: 'channel',
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW
  }
})
export class Channel implements IChannel {
  @prop({ required: true, default: v4 })
  _id: string;

  @prop()
  createdAt: Date;

  @prop({ default: null })
  deletedAt: Date;

  @prop()
  updatedAt: Date;
}

export const EXAMPLE_ChannelModel = getModelForClass(Channel);
