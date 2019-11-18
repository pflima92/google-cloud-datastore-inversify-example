import {BaseRepository, repository} from "inversify-datastore";

import {User} from "./entities";

@repository(User)
export class UserRepository extends BaseRepository<User> {
}