export default abstract class BaseEntity {
    protected id: string
    protected created_at: string
    protected updated_at: string

    constructor() {
        this.id = ""
        this.created_at = ""
        this.updated_at = ""
    }

    get_id(): string {
        return this.id
    }

    get_created_at(): string {
        return this.created_at
    }

    get_updated_at(): string {
        return this.updated_at
    }
}