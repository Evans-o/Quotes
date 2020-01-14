

export class Quote {
    showDescription: boolean;

    constructor(public id: number,public name: string, public author:string, public counter1: number, public counter2: number,public description: string, public completeDate: Date){
      this.showDescription=false;
      this.counter1 = 0;
      this.counter2 = 0;
      
    }
  }

  