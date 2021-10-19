import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzController } from './fizzbuzz.controller';
import { FizzbuzzModule } from './fizzbuzz.module';

describe('FizzbuzzController', () => {
  let controller: FizzbuzzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FizzbuzzModule],
      //controllers: [FizzbuzzController],
    }).compile();

    controller = module.get<FizzbuzzController>(FizzbuzzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
