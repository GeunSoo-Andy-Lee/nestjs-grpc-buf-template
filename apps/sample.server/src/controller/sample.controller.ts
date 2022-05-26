import { Controller, Get } from '@nestjs/common';
import { SampleService } from '../service/sample.service';

@Controller()
export class SampleController {
  constructor(private readonly authServerService: SampleService) {}

  @Get()
  getHello(): string {
    return this.authServerService.getHello();
  }
}
