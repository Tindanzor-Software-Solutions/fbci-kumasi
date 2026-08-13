export class AuthRedirectError extends Error {
  destination: string

  constructor(message: string, path: string) {
    super(message)
    this.name = "AuthRedirectError"
    this.destination = path
  }
}
