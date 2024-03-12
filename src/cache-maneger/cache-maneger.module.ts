import { Module } from '@nestjs/common';
import { CacheManegerService } from './cache-maneger.service';
import { CacheManegerController } from './cache-maneger.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  controllers: [CacheManegerController],
  providers: [CacheManegerService],
  imports: [CacheModule.register()],
})
export class CacheManegerModule {}
