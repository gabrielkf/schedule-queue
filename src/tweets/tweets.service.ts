import { Tweet } from "./entities/tweet.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateTweetDto } from "./dto/create-tweet.dto";
import { UpdateTweetDto } from "./dto/update-tweet.dto";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class TweetsService {
  private ID_NOT_FOUND_MESSAGE = "Tweet does not exist";

  constructor(@InjectModel(Tweet) private tweetModel: typeof Tweet) {}

  create(createTweetDto: CreateTweetDto) {
    return this.tweetModel.create(createTweetDto as any);
  }

  findAll() {
    return this.tweetModel.findAll();
  }

  async findOne(id: number) {
    const tweet = await this.tweetModel.findByPk(id);

    if (!tweet) {
      throw new HttpException(this.ID_NOT_FOUND_MESSAGE, HttpStatus.NOT_FOUND);
    }

    return tweet;
  }

  async update(id: number, updateTweetDto: UpdateTweetDto) {
    const [numberOfUpdatedTweets] = await this.tweetModel.update(
      { text: updateTweetDto.text },
      { where: { id } },
    );

    if (numberOfUpdatedTweets === 0) {
      throw new HttpException(this.ID_NOT_FOUND_MESSAGE, HttpStatus.NOT_FOUND);
    }

    return;
  }

  async remove(id: number) {
    const numberOfDeletedTweets = await this.tweetModel.destroy({
      where: { id },
    });

    if (numberOfDeletedTweets === 0) {
      throw new HttpException(this.ID_NOT_FOUND_MESSAGE, HttpStatus.NOT_FOUND);
    }

    return;
  }
}
