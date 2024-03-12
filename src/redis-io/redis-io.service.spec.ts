import { Test, TestingModule } from '@nestjs/testing';
import { RedisIoService } from './redis-io.service';

describe('RedisIoService', () => {
  let service: RedisIoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisIoService],
    }).compile();

    service = module.get<RedisIoService>(RedisIoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
