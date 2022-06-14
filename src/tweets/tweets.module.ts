import { Tweet } from "./entities/tweet.entity";
import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { TweetsService } from "./tweets.service";
import { TweetsController } from "./tweets.controller";

@Module({
  imports: [SequelizeModule.forFeature([Tweet])],
  controllers: [TweetsController],
  providers: [TweetsService],
})
export class TweetsModule {}
