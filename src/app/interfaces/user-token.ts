export class UserToken {
  accessToken?: string;
  user?: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    age: number;
    roles: string[];
  };
}
