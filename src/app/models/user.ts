export class User {
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    state?: string;
    userId?: number;
    createdOn?: string;
  
    constructor(user: any) {
      this.username = user.username;
      this.password = user.password;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.city = user.city;
      this.state = user.state;
      this.userId = user.userId;
      this.createdOn = new Date(user.createdOn).toLocaleString()
    }
}