import baseEntity from "../entities/base-entity";
import BaseReposioryInterface from "./base-repository-interface";

export default abstract class UsersRepositoryFactory implements BaseReposioryInterface {
    create(entity: baseEntity): boolean {
        throw new Error("Method not implemented.");
    }
    update(entity: baseEntity): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: string): boolean {
        throw new Error("Method not implemented.");
    }
    show(): baseEntity[] {
        throw new Error("Method not implemented.");
    }
    view(id: string): baseEntity {
        throw new Error("Method not implemented.");
    }

}