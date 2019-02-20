export class Model {
  user: string;
  items: reMind[];

  constructor(){
    this.user = "Silvia";
    this.items = [
      new reMind("Get Water from the fountain", "1 pm", false),
      new reMind("Feed the pig", "5 am", false),
      new reMind("Plough the garden", "4 pm", false),
      new reMind("Eat one hour", "9 am", true),
      new reMind("Sleep 3 hours", "10 am", true),
    ];
  }

}

export class reMind{
  chore: string;
  time: string;
  done: boolean;

  constructor(chore: string, time: string, done: boolean){
    this.chore = chore;
    this.time = time;
    this.done = done;
  }
}
