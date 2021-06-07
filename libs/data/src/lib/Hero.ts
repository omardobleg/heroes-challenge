import { Family } from './Age';
import { Age } from './Family';
import { Gender } from './Gender';

export interface Hero {
  _id: string;
  id: string;
  name: string;
  alias: string;
  affiliation: string;
  birthday: string;
  bloodtype: string;
  description: string;
  fightstyle?: string;
  gender: Gender;
  Eye: string;
  hair: string;
  height: string;
  kanji: string;
  occupation: string;
  quirk: string;
  romaji: string;
  status: string;
  teams: string;
  images: string[];
  epithet?: string;
  ages: Age[];
  family: Family[];
  deleted?: boolean;
}
