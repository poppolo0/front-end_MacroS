import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'winTab', cols: 2, rows: 1 },
          { title: 'rightD', cols: 2, rows: 1 },
          { title: 'leftD', cols: 2, rows: 1 },
          { title: 'test', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'winTab', cols: 1, rows: 1 },
        { title: 'rightD', cols: 1, rows: 1 },
        { title: 'leftD', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
    
  );
  totalAngularPackages: any;
  constructor(private breakpointObserver: BreakpointObserver, private http: HttpClient) {}

  pressButton(button: string){
    
    var query = 'http://192.168.1.71:8080/MacroS/Button/'+button;
    this.http.get<any>(query).subscribe(data => {
      this.totalAngularPackages = data;
  })        
                
  }
  
  
}
