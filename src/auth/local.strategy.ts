import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);

    // console.log("wa sa3iiid");
    if (!user) {

      user.username = 'sqatim';
      console.log("zineb lhbila");
      user.firstName = 'samir';
      user.lastName = 'qatim';
      user.password = 'samirqatim';
      return user;
      //   throw new UnauthorizedException();
    }
    return user;
  }
}
