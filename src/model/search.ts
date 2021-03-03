import got from 'got';
import fs from 'fs';
import path from 'path';
import {
  MusicBrainzApi,
  ISearchResult,
  IArtistMatch,
  EntityType,
} from 'musicbrainz-api';

// const mbApi = new MusicBrainzApi({
//   appName: 'sandbox',
//   appVersion: '0.1.0',
//   appContactInfo: 'test@gtest.com',
// });

export class Search {
  public searchResult: any;
  constructor(private entityType: EntityType, private query: string) {
    this.searchResult = {};
  }

  public async fetch(limit: number = 10) {
    const url = `https://musicbrainz.org/ws/2/${
      this.entityType
    }?fmt=json&query=${encodeURIComponent(this.query)}&limit=${limit}`;
    const response = await await got(url);
    this.searchResult = JSON.parse(response.body);
    return this;
  }

  public async save() {
    if (!fs) {
      throw new Error('cannot save a file from a browser.');
    }
    console.log(__dirname);
    const to = path.join(__dirname, '../data', `${this.query}.json`);
    fs.writeFileSync(to, JSON.stringify(this.searchResult));
    return this;
  }
}
