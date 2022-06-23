import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor("emails")
export class SendTweetsMailJob {
  @Process()
  handle(job: Job): void {
    console.log(JSON.stringify(job.data));
  }
}
