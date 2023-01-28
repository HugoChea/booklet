import { Injectable } from '@nestjs/common';
import { getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ImageUploaderService {

    async uploadImage(file: string, scope: 'characters' | 'book'): Promise<[string, string]> {
        const storage = getStorage();
        const refName = scope + "/" + uuidv4();
        const imageRef = ref(storage, refName);
    
        await uploadString(imageRef, file, 'data_url')
    
        const url = await getDownloadURL(ref(storage, refName))
    
        return [url, refName];
      }
}
