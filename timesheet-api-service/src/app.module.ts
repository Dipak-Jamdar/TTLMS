import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './modules/health/health.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [HealthModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
