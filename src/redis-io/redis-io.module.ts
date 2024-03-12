import { Module } from '@nestjs/common';
import { RedisIoService } from './redis-io.service';
import { RedisIoController } from './redis-io.controller';
import { FactoryProvider } from '@nestjs/common';
import { Redis } from 'ioredis';

export const redisClientFactory: FactoryProvider<Redis> = {
  provide: 'RedisClient',
  useFactory: () => {
    const redisInstance = new Redis({
      host: 'localhost',
      port: 6380,
      retryStrategy: (options) => {
        return 5000;
      },
    });

    redisInstance.on('error', (e) => {
      console.log(`Redis connection failed: ${e}`);
    });

    return redisInstance;
  },
  inject: [],
};

@Module({
  controllers: [RedisIoController],
  providers: [RedisIoService, redisClientFactory],
})
export class RedisIoModule {}
