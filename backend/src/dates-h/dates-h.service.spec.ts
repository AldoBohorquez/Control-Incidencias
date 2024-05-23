import { Test, TestingModule } from '@nestjs/testing';
import { DatesHService } from './dates-h.service';

describe('DatesHService', () => {
  let service: DatesHService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatesHService],
    }).compile();

    service = module.get<DatesHService>(DatesHService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
