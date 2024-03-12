import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { UserDto } from './dto/user.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CacheManegerService {
  private TTL_VALUE = 100000;

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async create(user: UserDto) {
    const newUser = {
      id: uuid(),
      ...user,
    };
    await this.cacheManager.set(newUser.id, newUser, this.TTL_VALUE);
    return newUser;
  }

  async findOne(id: string) {
    const user = await this.cacheManager.get(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async remove(id: string) {
    return this.cacheManager.del(id);
  }
}
