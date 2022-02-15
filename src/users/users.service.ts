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
    const result = this.usersRepository.findOne({ username: user });
    return result;
  }

  async findById(idUser: number): Promise<User> {
    // console.log(idUser);
    const result = await this.usersRepository.findOne({ id: idUser });
    if (!result) {
      return null;
    }
    return result;
  }

  async remove(id: string): Promise<boolean>  {
    const user = await this.findById(parseInt(id));
    if (user) {
      await this.usersRepository.delete(id);
      return true;
    }
    return null;
  }

  addUser(user: User): string {
    this.usersRepository.save(user);
    return 'done';
  }

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find(user => user.username === username);
  // }
}
