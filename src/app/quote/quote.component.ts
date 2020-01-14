import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Denis', 'Robert frost', 0,0,'In three words i can sum up everything i have learned about life:It goes on',new Date(2020,3,14)),
    new Quote(2,'Brian', 'Oscar wild', 0,0,'To live is the rarest thing in the world. most people exist ,that is all.',new Date(2019,1,20)),
    new Quote(3,'ann','J.k wrolings',  0,0,'It does not do well on drams and forget to live',new Date(2020,9,23)),
    new Quote(4,'lennox','Marktwain', 0,0,'Good friends,good books and sleepy concience is the ideal of life.',new Date(2019,2,14)),
    new Quote(5,'mercy','Allien seunders', 0,0,'Life is what happens to us while we are making other plans',new Date(2020,6,12)),
    new Quote(6,'Evans','Evans', 0,0,'Cause I am an evil overlord',new Date(2020,3,14)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }
 
  ngOnInit() {
  }

}
