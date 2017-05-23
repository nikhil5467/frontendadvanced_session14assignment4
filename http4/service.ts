import {Injectable} from "@angular/core";
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";  # <-- change this line
import {Observable} from "rxjs/Rx";
@Injectable()
export class DemoService {
  …
  createFood(food) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(food);
    return this.http.post('/api/food/', body, headers).map((res: Response) => res.json());
  }
  updateFood(food) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(food);
    return this.http.put('/api/food/' + food_id, body, headers).map((res: Response) => res.json());
  }
  deleteFood(food_id) {
    return this._http.delete('/api/food/' + food_id);
  }
}
<code>
 
<p>Notice that our createFood() and updateFood() methods use API endpoints which return the saved object in JSON form. Thus we need to use <code language="javascript">.map((res: Response) => res.json())
