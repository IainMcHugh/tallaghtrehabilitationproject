export interface IListItems extends IListItem {
  subListItems: IListItem[];
}

interface IListItem {
  displayText: string;
  href: string;
  external?: boolean;
  download?: boolean;
}
