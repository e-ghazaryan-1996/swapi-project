class StorageService {
  static getToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  static setToken(token: string) {
    localStorage.setItem("token", token);
  }

  static removeToken() {
    localStorage.removeItem("token");
  }
}

export default StorageService;
