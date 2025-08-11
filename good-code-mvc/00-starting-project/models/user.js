const bcrypt = require("bcryptjs");

const db = require("../data/database");

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  async getUserWithEmail() {
    const existingUser = await db
      .getDb()
      .collection("users")
      .findOne({ email: this.email });

    return existingUser;
  }

  async existsAlready() {
    const existingUser = await this.getUserWithEmail();
    if (existingUser) {
      return true;
    } else {
      return false;
    }
  }

  async signup() {
    const hashedPassword = await bcrypt.hash(this.password, 12);

    const result = await db
      .getDb()
      .collection("users")
      .insertOne({ email: this.email, password: hashedPassword });

    return result;
  }

  async login(comparePassword) {
    const passwordsAreEqual = await bcrypt.compare(
      this.password,
      comparePassword
    );
    return passwordsAreEqual;
  }
}

module.exports = User;
