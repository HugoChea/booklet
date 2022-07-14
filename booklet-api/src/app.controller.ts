import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello() {
    const storage = getStorage();
    return await getDownloadURL(ref(storage, 'images/sus.jpg'))
      .then((url) => {
        return url
      })
      .catch((error) => {
        // Handle any errors
      });

    return this.appService.getHello();
  }
}
