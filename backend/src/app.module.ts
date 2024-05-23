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
    entities: [],
    subscribers: [],
    migrations: [],
  }), AdminModule, UsersModule, IncidentsModule, StatusModule, SolutionsModule, TestsModule, DatesHModule
    ,],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
