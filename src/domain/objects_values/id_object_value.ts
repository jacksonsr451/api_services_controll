import { v4 as uuid4 } from 'uuid'

export default class IDObjectValue {
    id: string

    constructor(id?: string) {
        this.id = id ? id : uuid4()
    }

    get(): string {
        return this.id
    }
}