import { Topic, TopicContent } from './../models/sections';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByKey',
})
export class FilterByKeyPipe implements PipeTransform {
  transform(content: TopicContent[], searchInput: string): any[] {
    searchInput = searchInput.toLocaleLowerCase();
    if (!searchInput) {
      return content;
    }

    return content.filter(
      (content) =>
        content.points.find((x) =>
          x.text.toLowerCase().includes(searchInput)
        ) || content.title.toLowerCase().includes(searchInput)
    );

    // searchInput = searchInput.toLowerCase().trim();
    // if (searchKey3 === null) {
    //   if (searchKey2 === null) {
    //   } else {
    //     return values.filter(
    //       (value) =>
    //         value[searchKey1].toLowerCase().includes(searchInput) ||
    //         value[searchKey2].toLowerCase().includes(searchInput)
    //     );
    //   }
    // } else {
    //   if (searchKey2 === null) {
    //     return values.filter(
    //       (value) =>
    //         value[searchKey1].toLowerCase().includes(searchInput) ||
    //         value[searchKey3].toLowerCase().includes(searchInput)
    //     );
    //   } else {
    //     return values.filter(
    //       (value) =>
    //         value[searchKey1].toLowerCase().includes(searchInput) ||
    //         value[searchKey2].toLowerCase().includes(searchInput) ||
    //         value[searchKey3].toLowerCase().includes(searchInput)
    //     );
    //   }
    // }
  }
}
