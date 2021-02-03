export interface UsersResponseI{
  _id: string;
  email: string;
  password: string;
  roles: {
    admin: boolean
  }
}