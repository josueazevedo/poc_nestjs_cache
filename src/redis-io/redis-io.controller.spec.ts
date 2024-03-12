import { Test, TestingModule } from '@nestjs/testing';
import { RedisIoController } from './redis-io.controller';
import { RedisIoService } from './redis-io.service';

describe('RedisIoController', () => {
  let controller: RedisIoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedisIoController],
      providers: [RedisIoService],
    }).compile();

    controller = module.get<RedisIoController>(RedisIoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
