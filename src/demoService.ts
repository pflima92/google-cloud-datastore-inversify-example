import {UserRepository} from "./repositories";
import {inject, injectable} from "inversify";
import {User} from "./entities";
import {Guid} from "guid-typescript";

const faker = require('faker');


@injectable()
export class DemoService {

  private _userRepo: UserRepository;

  constructor(@inject(UserRepository)userRepo: UserRepository) {
    this._userRepo = userRepo;
  }

  public async start() {
    console.info("Starting Demo");

    const listOfUsersToCreate = [];
    for (let i = 0; i < 10; i++) {
      const fakeUser = new User(
          Guid.create().toString(),
          faker.name.findName(),
          faker.internet.email(),
          new Date()
      );
      listOfUsersToCreate.push(fakeUser);
    }

    console.info("Create users");
    for (const u of listOfUsersToCreate) {
      await this._userRepo.save(u)
    }
    console.info("Users created");

    const users = await this._userRepo.findAll();
    console.info("All users retrieved", users);

    console.info("End of Demo");
  }
}