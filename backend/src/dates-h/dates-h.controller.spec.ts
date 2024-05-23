import { Test, TestingModule } from '@nestjs/testing';
import { DatesHController } from './dates-h.controller';

describe('DatesHController', () => {
  let controller: DatesHController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatesHController],
    }).compile();

    controller = module.get<DatesHController>(DatesHController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
