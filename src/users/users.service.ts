import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

// This should be a real class/interface representing a user entity
// export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(user: string): Promise<User> {
    return this.usersRepository.findOne({firstName: user});
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  addUser(user: User): string{
    this.usersRepository.save(user);
    console.log("samir");
    return "nice  asat";
  }

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find(user => user.username === username);
  // }
}
