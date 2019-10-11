import { UsersService } from '../../src/services/users.service';

describe('Test the UsersService', () => {

    it('It should return empty array as Promise', () => {
        const usersService = new UsersService();
        return usersService.findAll().then(users => expect(users).toEqual([]));
    });

    it('It should return new user', () => {
        const usersService = new UsersService();
        const mockData = { name: 'test', age: 18 };
        const newUser = usersService.create(mockData);

        expect(newUser.name).toBe(mockData.name);
        expect(newUser.age).toBe(mockData.age);
        expect(newUser.created_at).toBeDefined();
    });


    it('It should create New user and ', () => {
        const usersService = new UsersService();
        const mockData = { name: 'test', age: 18 };
        const newUser = usersService.create(mockData);

        return usersService.findAll().then(users => {
            expect(users).toEqual([newUser]);
            expect(users.length).toEqual(1);
        });
    });
});
