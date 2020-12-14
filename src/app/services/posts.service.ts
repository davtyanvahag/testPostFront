import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Post} from '../interfaces/post.interface';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  searchPost(id): any {
    const promise = new Promise<Post>((resolve, reject) => {
      this.http
        .get<Post>(`${this.apiUrl}/posts/${id}`)
        .toPromise()
        .then((res: any) => {
            if (!res.title || !res.body) {
              reject({error: true, message: 'Error on getting data, no title or body'});
            }
            // Success
            resolve(res);
          },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }
}
