import { entity, id } from "inversify-datastore";

@entity("UserKind")
export class User {
  @id()
  id: string;
  name: string;
  mail: string;
  creation: Date

  constructor(id: string, name: string, mail: string, creation: Date) {
    this.id = id;
    this.name = name;
    this.mail = mail;
    this.creation = creation;
  }
}
