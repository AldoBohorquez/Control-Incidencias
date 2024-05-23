import { Module } from '@nestjs/common';
import { SolutionsService } from './solutions.service';
import { SolutionsController } from './solutions.controller';

@Module({
  providers: [SolutionsService],
  controllers: [SolutionsController]
})
export class SolutionsModule {}
