import { Module } from "@nestjs/common";
import { SendTweetsMailJob } from "./send-tweets-mail.job";

@Module({ providers: [SendTweetsMailJob] })
export class MailingModule {}
