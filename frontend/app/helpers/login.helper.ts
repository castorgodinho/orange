export const LoginValidation = (credentials: UserCredentials, setCredentials: React.Dispatch<React.SetStateAction<UserCredentials>>, loginFormValidationError: ValidationError, setLoginFormValidationError: React.Dispatch<React.SetStateAction<ValidationError>>) => {
const regexPatternPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
const regexPatternUsername = /^[a-zA-Z0-9_]{3,20}$/
const isUsernameValid = regexPatternUsername.test(credentials.username)
const isPasswordValid = regexPatternPassword.test(credentials.password)
const error = {}
usernameValid(isUsernameValid, error)
passwordValid(isPasswordValid, error)
usernamePasswrodValid(isUsernameValid, isPasswordValid, setLoginFormValidationError)
setLoginFormValidationError({...error})

return loginFormValidationError
}
const usernamePasswrodValid = (isUsernameValid: boolean, isPasswordValid: boolean, setLoginFormValidationError) =>{
  if (isUsernameValid && isPasswordValid) {
    setLoginFormValidationError({})
  }
}

const passwordValid = (isPasswordValid: boolean, error: {}):void =>{
  if (!isPasswordValid) {
    error.password = "Password must be at least 8 characters long and contain at least one letter, one digit, and one special character."
  } else {
    delete error.password
  }
}

const usernameValid = (isUsernameValid: boolean, error: {}):void => {
  if (!isUsernameValid) {
    error.username = "Username must consist of alphanumeric characters between 3 and 20 characters long."
  } else {
    delete error.username
  }
}
