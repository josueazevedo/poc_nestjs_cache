import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { v4 as uuid } from 'uuid';
import { Redis } from 'ioredis';

@Injectable()
export class RedisIoService {
  private TTL_VALUE = 60;

  constructor(@Inject('RedisClient') private readonly redisClient: Redis) {}

  async create(user: UserDto) {
    const newUser = {
      id: uuid(),
      ...user,
    };
    await this.redisClient.set(
      newUser.id,
      JSON.stringify(newUser),
      'EX',
      this.TTL_VALUE,
    );
    return newUser;
  }

  async findOne(id: string) {
    const user = await this.redisClient.get(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return JSON.parse(user);
  }

  async remove(id: string) {
    return this.redisClient.del(id);
  }
}
