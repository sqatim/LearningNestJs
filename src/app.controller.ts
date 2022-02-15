import {
  Controller,
  Get,
  Param,
  Request,
  Post,
  UseGuards,
  Body,
  HttpCode,
} from '@nestjs/common';
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

  // @UseGuards(LocalAuthGuard)
  @Post('auth/register')
  async login(@Body() user) {
    return this.authService.register(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  sayHello(): string {
    return 'user Found';
  }

  @Get('/auth/delete/:id')
  async delete(@Param() params) {
    const check = await this.authService.delete(params.id)
    console.log(check);
    if(check)
      return ("deleted");
    return 'user not Found';
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
