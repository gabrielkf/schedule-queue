import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { InjectModel } from "@nestjs/sequelize";
import { Tweet } from "../entities/tweet.entity";
import { Cache } from "cache-manager";

const CHECK_INTERVAL = 5000;

@Injectable()
export class TweetCountService {
  private OFFSET_CACHE_KEY = "tweet-offset";
  private OFFSET_INITIAL_VALUE = 0;
  private COUNT_LIMIT = 10;

  constructor(
    @InjectModel(Tweet) private tweetModel: typeof Tweet,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Interval(CHECK_INTERVAL)
  async countTweets() {
    const offset =
      (await this.cacheManager.get<number>(this.OFFSET_CACHE_KEY)) ??
      this.OFFSET_INITIAL_VALUE;

    const tweets = await this.tweetModel.findAll({
      offset,
      limit: this.COUNT_LIMIT,
    });

    if (tweets.length >= this.COUNT_LIMIT) {
      await this.cacheManager.set(
        this.OFFSET_CACHE_KEY,
        offset + this.COUNT_LIMIT,
      );

      console.log(`Increasing offset to ${offset + this.COUNT_LIMIT}`);
    }
  }
}
