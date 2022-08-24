import CreatedAtObjectValue from "../objects_values/created_at_object_value"
import IDObjectValue from "../objects_values/id_object_value"
import UpdatedAtObjectValue from "../objects_values/update_at_object_value"
import BaseEntity from "./base-entity"

type RequestEntity = {
    id?: string
    username: string
    password: string
    email: string
    created_at?: string
    updated_at?: string
}

export default class UsersEntity extends BaseEntity {
    private username: string
    private password: string
    private email: string
    
    constructor(request: RequestEntity) {
        super()
        this.id = new IDObjectValue(request.id).get()
        this.username = request.username
        this.password = request.password
        this.email = request.email
        this.created_at = new CreatedAtObjectValue(request.created_at).get()
        this.updated_at = new UpdatedAtObjectValue(request.updated_at).get()
    }

    public get_id(): string {
        return this.id
    }

    public get_username(): string {
        return this.username
    }

    public get_email(): string {
        return this.email
    }

    public get_password(): string {
        return this.password
    }

    public get_created_at(): string {
        return this.created_at
    }

    public get_updated_at(): string {
        return this.updated_at
    }
}