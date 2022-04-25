export interface IListItems extends IListItem {
  subListItems: IListItem[];
}

interface IListItem {
  displayText: string;
  href: string;
  external?: boolean;
  download?: boolean;
}

export interface IMediaItem {
  kind: string;
  link_type: string;
  name: string;
  size: string;
  url: string;
}
