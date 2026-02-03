import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);
  private url = 'https://jsonplaceholder.typicode.com/posts';

  posts$: Observable<Post[]> = this.http
    .get<Post[]>(this.url)
    .pipe(shareReplay(1));
}
