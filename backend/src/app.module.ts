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
import { AdminController } from './admin/admin.controller';
import { DatesHController } from './dates-h/dates-h.controller';
import { IncidentsController } from './incidents/incidents.controller';
import { SolutionsController } from './solutions/solutions.controller';
import { StatusController } from './status/status.controller';
import { TestsController } from './tests/tests.controller';
import { UsersController } from './users/users.controller';
import { AdminService } from './admin/admin.service';
import { DatesHService } from './dates-h/dates-h.service';
import { IncidentsService } from './incidents/incidents.service';
import { SolutionsService } from './solutions/solutions.service';
import { StatusService } from './status/status.service';
import { TestsService } from './tests/tests.service';
import { UsersService } from './users/users.service';
import { AreaModule } from './area/area.module';
import { AreaEntity } from './area/entity/area.entity';
import { AreaController } from './area/area.controller';
import { AreaService } from './area/area.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
   
    port: 5432,
    username: "postgres",
    password: "DJE20ben",
    database: "CodeChallenge",
    synchronize: true,
    logging: true,
    entities: [AdminEntity,DateshEntity,IncidentsEntity,SolutionsEntity,StatusEntity,TestsEntity,UsersEntity,AreaEntity],
    subscribers: [],
    migrations: [],
  }), AdminModule, UsersModule, IncidentsModule, StatusModule, SolutionsModule, TestsModule, DatesHModule, AreaModule,AreaModule
    ,],
  
  controllers: [AppController,AdminController,DatesHController,IncidentsController,SolutionsController,StatusController,TestsController,UsersController,AreaController],
  providers: [AppService,AdminService,DatesHService,IncidentsService,SolutionsService,StatusService,TestsService,UsersService,AreaService],
})
export class AppModule {}
