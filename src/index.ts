import "reflect-metadata";

import {Container} from "inversify";
import {UserRepository} from "./repositories";
import {DemoService} from "./demoService";
import {Datastore} from "@google-cloud/datastore";
import {TYPE} from "inversify-datastore";

export const AppContainer = new Container();

const ds = new Datastore();

AppContainer.bind<Datastore>(TYPE.Datastore).toConstantValue(ds);

AppContainer.bind<Datastore>(Datastore).toSelf();
AppContainer.bind<UserRepository>(UserRepository).toSelf();
AppContainer.bind<DemoService>(DemoService).toSelf();

const demo = AppContainer.get<DemoService>(DemoService);
demo.start();








