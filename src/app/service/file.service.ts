import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()

export class FileService {
  URL = 'https://cloud-api.yandex.net:443/v1/disk/resources?path=/';
  httpOptions  = {
      headers: new HttpHeaders({'Authorization': 'OAuth AQAAAAAvKdJfAAVaOXRb9qEIUUGQqJA-dtHP4Jo'}),
      params: new HttpParams().set('fields', '_embedded.items.name,_embedded.items.type,_embedded.items.size' )
  } ;

  constructor(
    private httpClient: HttpClient,
  ) {}

  public get(path?: string): Observable<{type: string, name: string, size?: number}> {
    let url = this.URL;
    if (path) {
      url += path;
    }
    return this.httpClient.get(url, this.httpOptions )
      .pipe(
        map((data: any) => data._embedded.items),
      );
  }
}
