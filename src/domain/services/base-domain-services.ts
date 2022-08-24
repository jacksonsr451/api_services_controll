import baseEntity from "../entities/base-entity";
import BaseReposioryInterface from "../interfaces/base-repository-interface";
import DomainServicesInterface from "../interfaces/domain-services-interface";

export default abstract class BaseDomainServices implements DomainServicesInterface {
    protected repository: BaseReposioryInterface

    constructor(repository: BaseReposioryInterface) {
        this.repository = repository
    }

    create(entity: baseEntity): boolean {
        return this.repository.create(entity)
    }
    update(entity: baseEntity): boolean {
        return this.repository.update(entity)
    }
    delete(id: string): boolean {
        return this.repository.delete(id)
    }
    show(): baseEntity[] {
        return this.repository.show()
    }
    view(id: string): baseEntity {
        return this.repository.view(id)
    }

}