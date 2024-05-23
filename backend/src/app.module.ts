import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { IncidentsModule } from './incidents/incidents.module';
import { StatusModule } from './status/status.module';
import { SolutionsModule } from './solutions/solutions.module';
import { TestsModule } from './tests/tests.module';
import { DatesHModule } from './dates-h/dates-h.module';
import { AdminEntity } from './admin/entity/admin.entity';
import { DateshEntity } from './dates-h/entity/dates-h.entity';
import { IncidentsEntity } from './incidents/entity/indicents.entity';
import { SolutionsEntity } from './solutions/entity/solutions.entity';
import { StatusEntity } from './status/entity/status.entity';
import { TestsEntity } from './tests/entity/test.entity';
import { UsersEntity } from './users/entity/users.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "monorail.proxy.rlwy.net",
    port: 5432,
    username: "postgres",
    password: "DJOQBQPmzsJDIogcIImOrAfEEywGvUxV",
    database: "railway",
    synchronize: true,
    logging: true,
    entities: [AdminEntity,DateshEntity,IncidentsEntity,SolutionsEntity,StatusEntity,TestsEntity,UsersEntity],
    subscribers: [],
    migrations: [],
  }), AdminModule, UsersModule, IncidentsModule, StatusModule, SolutionsModule, TestsModule, DatesHModule
    ,],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
