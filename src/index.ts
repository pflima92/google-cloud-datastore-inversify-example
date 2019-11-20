import "reflect-metadata";

import {Container} from "inversify";
import {UserRepository} from "./repositories";
import {DemoService} from "./demoService";
import {Datastore} from "@google-cloud/datastore";
import {TYPES} from "inversify-datastore";

export const AppContainer = new Container();

const ds = new Datastore();

AppContainer.bind<Datastore>(TYPES.Datastore).toConstantValue(ds);

AppContainer.bind<UserRepository>(UserRepository).toSelf();
AppContainer.bind<DemoService>(DemoService).toSelf();

const demo = AppContainer.get<DemoService>(DemoService);
demo.start();








