import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { CacheManegerService } from './cache-maneger.service';
import { UserDto } from './dto/user.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('cache-maneger')
export class CacheManegerController {
  constructor(private readonly cacheManegerService: CacheManegerService) {}

  @Get('get-cache')
  @UseInterceptors(CacheInterceptor)
  getCache() {
    console.log('method executed');

    return {
      message: 'Data in cache: ' + new Date().toLocaleTimeString(),
    };
  }

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
