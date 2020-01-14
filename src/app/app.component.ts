import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote []= [
    new Quote(1, 'Denis', 'Robert frost', 'In three words i can sum up everything i have learned about life:It goes on',new Date(2020,3,14)),
    new Quote(2,'Brian', 'Oscar wild', 'To live is the rarest thing in the world. most people exist ,that is all.',new Date(2019,1,20)),
    new Quote(3,'ann','J.k wrolings', 'It does not do well on drams and forget to live',new Date(2020,9,23)),
    new Quote(4,'lennox','Marktwain', 'Good friends,good books and sleepy concience is the ideal of life.',new Date(2019,2,14)),
    new Quote(5,'mercy','Allien seunders','Life is what happens to us while we are making other plans',new Date(2020,6,12)),
    new Quote(6,'Evans','Evans','Cause I am an evil overlord',new Date(2020,3,14)),
  ];
}