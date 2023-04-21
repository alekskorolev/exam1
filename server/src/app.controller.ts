import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async data(): Promise<object> {
    const data = await this.appService.getData();
    console.log(data);
    return data;
  }
}
