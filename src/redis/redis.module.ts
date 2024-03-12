import { RedisClientOptions } from './../../node_modules/@redis/client/dist/lib/client/index.d';
import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RedisController } from './redis.controller';
import { redisStore } from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  controllers: [RedisController],
  providers: [RedisService],
  imports: [
    CacheModule.register({
      // @ts-ignore
      store: async () =>
        await redisStore({
          socket: {
            host: 'localhost',
            port: 6379,
          },
        }),
    }),
  ],
})
export class RedisModule {}
