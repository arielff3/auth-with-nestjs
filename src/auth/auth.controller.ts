import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth-guard';

@Controller()
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async login(@Body() body) {
    return this.service.validateUser(body);
  }
}
