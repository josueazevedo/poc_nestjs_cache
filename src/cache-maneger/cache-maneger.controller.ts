import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CacheManegerService } from './cache-maneger.service';
import { UserDto } from './dto/user.dto';

@Controller('cache-maneger')
export class CacheManegerController {
  constructor(private readonly cacheManegerService: CacheManegerService) {}

  @Post()
  create(@Body() userDto: UserDto) {
    return this.cacheManegerService.create(userDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cacheManegerService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cacheManegerService.remove(id);
  }
}
