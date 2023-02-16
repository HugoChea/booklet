import { Injectable } from '@nestjs/common';

@Injectable()
export class ParseUtilitiesService {
  nestedObjectParser(object: Object): Object {
    const final = {};
    Object.keys(object).forEach((k) => {
      if (typeof object[k] === 'object' && !Array.isArray(object[k])) {
        const res = this.nestedObjectParser(object[k]);
        Object.keys(res).forEach((a) => {
          final[`${k}.${a}`] = res[a];
        });
      } else final[k] = object[k];
    });
    return final;
  }
}
