import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersService } from './users/users.service';
import { User } from './users/user.entity';
import { AuthService } from './auth/auth.service';

// var samir = (): any => {console.log("lalalalalalal")};

@Controller()
export class AppController {
  // constructor() {}
  // constructor(private usersService: UsersService) {}
  constructor(private authService: AuthService) {}

  // @samir()
  @UseGuards(LocalAuthGuard)
  @Post('auth/register')
  async login(@Request() req) {
    return 'fen a jami';
    // return this.authService.register(req.user);
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('')
  // getProfile(@Request() req) {
  //   let user = new User();
  //   user.id = 1;
  //   user.firstName = 'samir';
  //   user.lastName = 'qatim';
  //   user.isActive = true;
  //   return this.usersService.addUser(user);
  //   // return req;
  // }
  // @Get('profil')
  // findUser() {
  //   return this.usersService
  //     .findOne()
  //     .then((user) => {
  //       return user.lastName;
  //     })
  //     .catch((err) => {
  //       return "fen a sat";
  //     });
  // }
}
