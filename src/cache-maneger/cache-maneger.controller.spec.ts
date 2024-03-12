import { Test, TestingModule } from '@nestjs/testing';
import { CacheManegerController } from './cache-maneger.controller';
import { CacheManegerService } from './cache-maneger.service';

describe('CacheManegerController', () => {
  let controller: CacheManegerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CacheManegerController],
      providers: [CacheManegerService],
    }).compile();

    controller = module.get<CacheManegerController>(CacheManegerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
