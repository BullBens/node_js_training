import { Schema } from "mongoose";

export interface EventModel {
  _author: Schema.Types.ObjectId;
  name: String;
  description: String;
  geo: {
    latitude: Number;
    longitude: Number;
  };
  kind: Number;
  start_date: Date;
  end_date: Date;
  date_of: Date;
  likes: Array<String>;
  comments: Array<String>;
}
