import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheManegerModule } from './cache-maneger/cache-maneger.module';
import { RedisModule } from './redis/redis.module';
import { RedisIoModule } from './redis-io/redis-io.module';

@Module({
  imports: [CacheManegerModule, RedisModule, RedisIoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
