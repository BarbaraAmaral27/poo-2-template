import { BaseDatabase } from "./BaseDatabase";
import { TAccountDB, TUserDB } from "../types";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "users";

  public async findUsers(q: String | undefined) {
    let usersDB;

    if (q) {
      const result: TUserDB[] = await BaseDatabase.connection(
        UserDatabase.TABLE_USERS
      ).where("name", "LIKE", `%${q}%`);
      usersDB = result;
    } else {
      const result: TUserDB[] = await BaseDatabase.connection(
        UserDatabase.TABLE_USERS
      );
      usersDB = result;
    }
    return usersDB;
  }

  public async findUserById(id: string) {
    const [userDB]: TUserDB[] | undefined[] = await BaseDatabase.connection(
      UserDatabase.TABLE_USERS
    ).where({ id });

    return userDB;
  }

  public async insertUser(newUserDB: TUserDB) {
    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(newUserDB);
  }
}

export class AccountDatabase extends BaseDatabase {
  public static TABLE_ACCOUNTS = "accounts";

  public async findAccount() {

      const accountsDB: TAccountDB[] = await BaseDatabase
      .connection(AccountDatabase.TABLE_ACCOUNTS)   

    return accountsDB

  }
}
