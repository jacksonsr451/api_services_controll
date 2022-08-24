import BaseEntity from "../entities/base-entity"

export default interface DomainServicesInterface {
    create(entity: BaseEntity): boolean
    update(entity: BaseEntity): boolean
    delete(id: string): boolean
    show(): Array<BaseEntity>
    view(id: string): BaseEntity
}