import { type UserCredentials, type ValidationError } from "@/app/login/page"

export const loginValidation = (
  credentials: UserCredentials,
  setValidationError: React.Dispatch<React.SetStateAction<ValidationError>>
): void => {
  const regexPatternUsername = /^[a-zA-Z0-9_]{3,20}$/
  const regexPatternPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  const isUsernameValid = regexPatternUsername.test(credentials.username)
  const isPasswordValid = regexPatternPassword.test(credentials.password)

  setValidationError({
    username: isUsernameValid
      ? ""
      : "Invalid username. Please ensure it consists of alphanumeric characters between 3 and 20 characters long.",
    password: isPasswordValid
      ? ""
      : "Invalid password. Requirements:- At least 1 letter, digit, and special character- Minimum 8 characters",
  })
}
