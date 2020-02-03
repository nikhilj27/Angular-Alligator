export interface IRegisterModel {
  fullName: string;
  email: string;
  password: string;
}

export class RegisterModel implements IRegisterModel {
  fullName: string;
  email: string;
  password: string;
  constructor(name: string, email: string, password: string) {
    this.fullName = name;
    this.email = email;
    this.password = password;
  }
}
