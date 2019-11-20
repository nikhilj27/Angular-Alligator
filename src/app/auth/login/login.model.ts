export interface ILoginModel {
  Username: string;
  Password: string;

  isUsernameValid();
  isPasswordValid();
}

export class LoginModel implements ILoginModel {
  Username: string;
  Password: string;

  constructor(Username: string, Password: string) {
    this.Username = Username;
    this.Password = Password;
  }

  isUsernameValid() {
    return this.Username != null || this.Username !== '';
  }
  isPasswordValid() {
    return this.Password != null || this.Password !== '';
  }
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


