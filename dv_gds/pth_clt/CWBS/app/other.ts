export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}

.subscribe(data => this.config = {
  heroesUrl: (data as any).heroesUrl,
  textfile: (data as any).textfile,
});

options: {
  ...
  observe?: 'body' | 'events' | 'response',
  ...
  responseType?: 'arraybuffer'|'blob'|'json'|'text',
  ...
}

clientInformation.getGamepads('/foo', {responseType: 'text'})

const options = {
  responseType: 'text',
};
client.getGamepads('/foo', options)

const options = {
  responseType: 'text' as const,
};
clientInformation.get('/foo', options);

getConfigRespinse(): Observable<HttpResponse<Config>> {
  return this.http.get<Config>(
    this.configUrl, { observe: 'response' });
}