import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'Filter' })
export class EditScoreFilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    console.log(searchText)

    return items.filter(it => {
      console.log(it);
      return it.MSSV.toLocaleLowerCase().includes(searchText) ;
    });
  }
}
