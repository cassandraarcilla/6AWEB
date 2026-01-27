import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private userApi = 'https://dummyjson.com/users';
  private recipeApi = 'https://dummyjson.com/recipes?limit=30';

  constructor(private http: HttpClient) { }

  getUsersRemotely(): Observable<User[]> {
    return this.http.get<any>(this.userApi).pipe(
      map(res => res.users)
    );
  }

  getRecipesRemotely(): Observable<Recipe[]> {
    return this.http.get<any>(this.recipeApi).pipe(
      map(res => res.recipes)
    );
  }
}
