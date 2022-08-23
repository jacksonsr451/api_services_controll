export default class UpdatedAtObjectValue {
    updated_at: string

    constructor(updated_at?: string) {
        this.updated_at = updated_at ? updated_at : new Date().toISOString()
    }

    get(): string {
        return this.updated_at
    }
}