import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RedisIoService } from './redis-io.service';
import { UserDto } from './dto/user.dto';

@Controller('redis-io')
export class RedisIoController {
  constructor(private readonly redisIoService: RedisIoService) {}

  @Post()
  create(@Body() userDto: UserDto) {
    return this.redisIoService.create(userDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.redisIoService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.redisIoService.remove(id);
  }
}
