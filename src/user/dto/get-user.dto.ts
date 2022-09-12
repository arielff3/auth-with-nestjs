import { IsEmail } from 'class-validator';

export class GetUserDTO {
  @IsEmail()
  email: string;
}
