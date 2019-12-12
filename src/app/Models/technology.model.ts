export interface ITechnology {
  Id: number;
  Name: string;
  Description: string;
  Logo: File;
}

export class Technology implements ITechnology {
  Id: number;
  Name: string;
  Description: string;
  Logo: File;
}
