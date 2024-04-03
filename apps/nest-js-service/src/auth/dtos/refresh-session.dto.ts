import { IsString } from "class-validator";

export class RefreshSessionDto {
  @IsString()
  accessToken: string;

  @IsString()
  refreshToken: string;
}
