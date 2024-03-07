import { useState } from "react"

interface UserCredentials {
  username: string
  password: string
}

interface ValidationError {
  username: string
  password: string
}

const useLoginValidation = (): [UserCredentials, ValidationError, (event: React.ChangeEvent<HTMLInputElement>) => void, (event: React.ChangeEvent<HTMLFormElement>) => void] => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    username: "",
    password: ""
  })

  const [loginFormValidationError, setLoginFormValidationError] = useState<ValidationError>({
    username: "",
    password: ""
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  const handleForm = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const regexPatternPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    const regexPatternUsername = /^[a-zA-Z0-9_]{3,20}$/
    const isUsernameValid = regexPatternUsername.test(credentials.username)
    const isPasswordValid = regexPatternPassword.test(credentials.password)

    if (!isUsernameValid) {
      setLoginFormValidationError((prevErr) => ({
        ...prevErr,
        username: "Username must consist of alphanumeric between 3 and 20 characters long."
      }))
    } else {
      setLoginFormValidationError((prevErr) => ({
        ...prevErr,
        username: ""
      }))
    }

    if (!isPasswordValid) {
      setLoginFormValidationError((prevErr) => ({
        ...prevErr,
        password: "Password must contain at least one character,one digit,one specialcharacter,least 8 characters long."
      }))
    } else {
      setLoginFormValidationError((prevErr) => ({
        ...prevErr,
        password: ""
      }))
    }
    if (isUsernameValid && isPasswordValid) {
      setLoginFormValidationError({
        username: "",
        password: ""
      })
    }
  }

  return [credentials, loginFormValidationError, handleInputChange, handleForm]
}

export default useLoginValidation
