options: {
  headers?: HttpHeaders | {[header: string]: string | string[]},
  body?: 'body' | 'events' | 'response',
  params?: HttpParams|{[param: string]: string | number | boolean |
    ReadonlyArray<string | number | boolean>},
  reportProgress?: boolean,
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
  withCredentials?: boolean,
}

const req = http.get<Heroes>('/api/heroes');
req.subscribe();
req.subscribe();