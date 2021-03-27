class checkEmail {
  static validacaoEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
