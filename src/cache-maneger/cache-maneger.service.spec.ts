import { Test, TestingModule } from '@nestjs/testing';
import { CacheManegerService } from './cache-maneger.service';

describe('CacheManegerService', () => {
  let service: CacheManegerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CacheManegerService],
    }).compile();

    service = module.get<CacheManegerService>(CacheManegerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
