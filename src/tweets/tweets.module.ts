import { Tweet } from "./entities/tweet.entity";
import { SequelizeModule } from "@nestjs/sequelize";
import { CacheModule, Module } from "@nestjs/common";
import { TweetsService } from "./tweets.service";
import { TweetsController } from "./tweets.controller";
import { TweetCountService } from "./tweet-count/tweet-count.service";

const DEFAULT_TIME_TO_LIVE = 60 * 60;

@Module({
  imports: [
    CacheModule.register({ ttl: DEFAULT_TIME_TO_LIVE }),
    SequelizeModule.forFeature([Tweet]),
  ],
  controllers: [TweetsController],
  providers: [TweetsService, TweetCountService],
})
export class TweetsModule {}
