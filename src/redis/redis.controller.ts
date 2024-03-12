import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RedisService } from './redis.service';
import { UserDto } from './dto/user.dto';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Post()
  create(@Body() userDto: UserDto) {
    return this.redisService.create(userDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.redisService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.redisService.remove(id);
  }
}
