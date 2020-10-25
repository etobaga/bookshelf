export class ListService{

  private list: string[] = [ " Flowers for Algernon - Daniel Keyes", "The Twelve Chairs - Ilf and Petrov"];

  getList(): string[] {

    return this.list;
  }
  addList(name: string){

    this.list.push(name);
  }
}
