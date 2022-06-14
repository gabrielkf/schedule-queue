import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { TweetsService } from "./tweets.service";
import { CreateTweetDto } from "./dto/create-tweet.dto";
import { UpdateTweetDto } from "./dto/update-tweet.dto";

@Controller("tweets")
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Post()
  create(@Body() createTweetDto: CreateTweetDto) {
    return this.tweetsService.create(createTweetDto);
  }

  @Get()
  findAll() {
    return this.tweetsService.findAll();
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.tweetsService.findOne(+id);
  }

  @Patch(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  update(@Param("id") id: string, @Body() updateTweetDto: UpdateTweetDto) {
    return this.tweetsService.update(+id, updateTweetDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("id") id: string) {
    return this.tweetsService.remove(+id);
  }
}
