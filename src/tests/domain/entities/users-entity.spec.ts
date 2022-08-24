import UsersEntity from '@/domain/entities/users-entity'

describe('Test Users Entity', () => {
    test('Test should be init UsersEntity and get values', () => {
        var user = new UsersEntity({
            username: "username",
            email: "email@email.com", 
            password: "Jackson192032J@c"
        })
        expect(user.get_id()).not.toBeNull()
        expect(user.get_username()).toBe("username")
        expect(user.get_password()).toBe("Jackson192032J@c")
        expect(user.get_email()).toBe("email@email.com")
        expect(user.get_created_at()).not.toBeNull()
        expect(user.get_updated_at()).not.toBeNull()
    })
})
