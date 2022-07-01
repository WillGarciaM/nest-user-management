import { PartialType } from '@nestjs/swagger';
import { CreateProfileTypeDto } from './create-profile-type.dto';

export class UpdateProfileTypeDto extends PartialType(CreateProfileTypeDto) {}
