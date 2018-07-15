export class User {
  id: number;
  name: string;
  token: string;
  email: string;
  password: {
    pwd: string;
    confirmPwd: string;
  };

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
