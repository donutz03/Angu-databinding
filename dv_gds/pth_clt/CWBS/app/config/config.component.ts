showConfig() {
  this.configService.getConfig()
    .subscribe((data: Config) => this.config = {
        heroesUrl: data.heroesUrl,
        textfile: data.textfile,
        date: data.date,
    });
}

config: Config | undefined;

showConfig() {
  this.configService.getConfig()
    .subscribe((data: Config) => this.config = { ...data });
}

showConfigResponse() {
  this.configService.getConfigResponse()
    .subscribe(resp => {
      const keys = resp.headers.keys();
      this.headers = keys.map(key => 
        `${key}: ${resp.headers.get(key)}`);

      
        this.config = { ...resp.body! };
    });
}