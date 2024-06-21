import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirestoreModule } from './firestore/firestore.module';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { GamesService } from './services/games/games.service';
import { GamesController } from './controllers/games/games.controller';

@Module({
  imports: [FirestoreModule, ConfigModule.forRoot({ cache: true }), BullModule.registerQueue({
    name: 'games',
    prefix: 'crowbar',
    redis: {
      password: 'HYSuQGLjPaT5Vpy9GzNgmbWA4UzbU4b5',
      host: 'redis-19325.c240.us-east-1-3.ec2.redns.redis-cloud.com',
      port: 19325,
    },
  })],
  controllers: [AppController,GamesController],
  providers: [AppService,GamesService],
})
export class AppModule {}

/*


 {
      provide: 'GAMES_SERVICE',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            port: configService.get('BOOKSTORE_SERVICE_PORT'),
          },
        });
      },
    },p

*/