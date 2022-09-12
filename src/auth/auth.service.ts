import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async validateUser({ email, password }: { email: string; password: string }) {
    const user = await this.userService.findByEmail({ email });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        delete user.password;
        return user;
      }
    }
    throw new Error('Email address or password provided is incorrect.');
  }
}
