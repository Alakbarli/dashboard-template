import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppConfig } from './app-config.model';

@Injectable()
export class AppConfigs {
    static settings: IAppConfig;
    constructor(private http: HttpClient
    ) { }
    load() {
        const jsonFile = `config/config.json`;
        return new Promise<IAppConfig>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response: any) => {
                AppConfigs.settings = <IAppConfig>response;
                resolve(<IAppConfig>response);
            }).catch((response: any) => {
                reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }
}