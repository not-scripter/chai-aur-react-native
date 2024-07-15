import { Client, ID, Account } from "appwrite";
import { Config } from "react-native-config";

const client = new Client();

//NOTE:  react-native-config is not working
// const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;
// const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;
const APPWRITE_ENDPOINT: string = "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID: string = "66941cc4000b4a96e909";

type CreateUserAccountProps = {
  email: string;
  password: string;
  name: string;
};
type LoginUserAccountProps = {
  email: string;
  password: string;
};

export default class appwriteService {
  account;

  constructor() {
    client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID);

    this.account = new Account(client);
  }

  async signup({ email, password, name }: CreateUserAccountProps) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async login({ email, password }: LoginUserAccountProps) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrwntUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      console.log(error);
    }
  }
}
