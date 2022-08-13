import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { initializeApp } from "firebase/app";
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.enableCors();

  const config: ConfigService = new ConfigService();

  const firebaseConfig = {
    apiKey: config.get<string>('FIREBASE_APIKEY'),
    authDomain: config.get<string>('FIREBASE_AUTHDOMAIN'),
    projectId: config.get<string>('FIREBASE_PROJECTID'),
    storageBucket: config.get<string>('FIREBASE_STORAGEBUCKET'),
    messagingSenderId: config.get<string>('FIREBASE_MESSAGINGSENDERID'),
    appId: config.get<string>('FIREBASE_APPID'),
    measurementId: config.get<string>('FIREBASE_MEASUREMENTID')
  };

  console.log(firebaseConfig)
  initializeApp(firebaseConfig);
  
  await app.listen(3000);
}
bootstrap();
