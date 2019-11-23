export interface ILoginModel {
  Username: string;
  Password: string;
}

export interface Data {
  authenticated: boolean;
  token: string;
  expiration: Date;
}

export interface ResponseModel {
  status: number;
  statusMessage: string;
  data: Data;
}
export class LoginModel implements ILoginModel {
  Username: string;
  Password: string;

  constructor(Username: string, Password: string) {
    this.Username = Username;
    this.Password = Password;
  }

}



