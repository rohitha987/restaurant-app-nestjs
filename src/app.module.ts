import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { Restaurant } from './restaurant/entities/restaurant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'pass@word1',
      database: 'nestcrud',
      entities: [Restaurant], // Specify your entities here
      synchronize: true, // Be careful with this option in production
    }),
    RestaurantModule, // Import other modules like your UserModule
  ],
})
export class AppModule {}
