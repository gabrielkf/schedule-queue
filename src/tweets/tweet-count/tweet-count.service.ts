import { Injectable } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { InjectModel } from "@nestjs/sequelize";
import { Tweet } from "../entities/tweet.entity";

@Injectable()
export class TweetCountService {
  constructor(@InjectModel(Tweet) private tweetModel: typeof Tweet) {}

  @Interval(5000)
  async countTweets() {
    console.log("counting");
  }
}