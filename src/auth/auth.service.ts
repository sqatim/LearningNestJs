import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(body: any) {
    const user = await this.usersService.findOne(body.username);
    if (!user) return this.usersService.addUser(body);
    return 'user is already in ur database';
  }

  async delete(id: string): Promise<boolean> {
    const check = await this.usersService.remove(id);
    if (check) 
      return true;
    return null;
  }
  // async register(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
}
