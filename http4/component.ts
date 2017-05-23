...
 
@Component({
  selector: 'demo-app',
  template:`
  <h1>Angular2 HTTP Demo App</h1>
  <h2>Foods</h2>
  <ul>
    <li *ngFor="let food of foods"><input type="text" name="food-name" [(ngModel)]="food.name"><button (click)="updateFood(food)">Save</button> <button (click)="deleteFood(food)">Delete</button></li>
  </ul>
  <p>Create a new food: <input type="text" name="new_food" [(ngModel)]="new_food"><button (click)="createFood(new_food)">Save</button></p>
  <h2>Books and Movies</h2>
  ...
  `
})
export class AppComponent {
 
  public foods;
  public books;
  public movies;
 
  public new_food;
 
  ...
 
  createFood(name) {
    let food = {name: name};
    this._demoService.createFood(food).subscribe(
       data => {
         // refresh the list
         this.getFoods();
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }
 
  updateFood(food) {
    this._demoService.updateFood(food).subscribe(
       data => {
         // refresh the list
         this.getFoods();
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }
 
  deleteFood(food) {
    if (confirm("Are you sure you want to delete " + food.name + "?")) {
      this._demoService.deleteFood(food).subscribe(
         data => {
           // refresh the list
           this.getFoods();
           return true;
         },
         error => {
           console.error("Error deleting food!");
           return Observable.throw(error);
         }
      );
    }
  }
}
