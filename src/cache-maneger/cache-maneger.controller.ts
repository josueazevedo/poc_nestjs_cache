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
    const time = new Date().toLocaleTimeString();
    console.log(`method executed ${time}`);

    return {
      message: `Data in cache: ${time}`,
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
