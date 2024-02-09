import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // the type of your database
      host: 'localhost',
      port: 5432,
      username: 'postgres', // your database username
      password: 'mypassword', // your database password
      database: 'taskdb', // your database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // use with caution in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
