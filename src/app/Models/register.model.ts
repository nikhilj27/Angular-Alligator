export interface IRegisterModel {
  Name: string;
  Username: string;
  Password: string;
}

export class RegisterModel implements IRegisterModel {
  Name: string;
  Username: string;
  Password: string;
  constructor(name: string, email: string, password: string) {
    this.Name = name;
    this.Username = email;
    this.Password = password;
  }
}
