export default class CreatedAtObjectValue {
    created_at: string

    constructor(created_at?: string) {
        this.created_at = created_at ? created_at : new Date().toISOString()
    }

    get(): string {
        return this.created_at
    }
}