/* THIS IS A DEMO FILE FOR TESTING PURPOSES */

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'testUser',
            password: 'testPassword',
        },
    ];

    async validateUser(username: string, pass: string): Promise<any> {
        const user = this.users.find(user => user.username === username && user.password === pass);
        if (user) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
