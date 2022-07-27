export interface Api {
  sections: Section[];
}

export interface Section {
  title: string;
  topics: Topic[];
}

export interface Topic {
  title: string;
  content: TopicContent[];
}

export interface TopicContent {
  title: string;
  ordered: boolean;
  points: Point[];
}

export interface Point {
  text: string;
  link?: string | undefined;
  img?: Img | undefined;
  pdf?: Pdf | undefined;
  vid?: Vid | undefined;
}

export interface Pdf {
  path: string;
  name: string;
}

export interface Vid {
  path: string;
  name: string;
  ext: 'mp4' | 'ogg' | 'webm';
}

export interface Img {
  path: string;
  name: string;
  ext: 'jpg' | 'png' | 'svg';
}
