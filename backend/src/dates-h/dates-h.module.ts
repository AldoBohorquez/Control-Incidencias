import { Module } from '@nestjs/common';
import { DatesHService } from './dates-h.service';
import { DatesHController } from './dates-h.controller';

@Module({
  providers: [DatesHService],
  controllers: [DatesHController]
})
export class DatesHModule {}
