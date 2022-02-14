import { useState, useEffect } from 'react';
import { ITodo } from '../types/types';

export const useValidateAddTodoForm = (value: string, validations: any) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true)
  const [maxLengthError, setMaxLengthError] = useState<boolean>(false)
  const [uniqueTaskError, setUniqueTaskError] = useState<boolean>(false)
  const [errors, setErrors] = useState<string>('')

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
          maxLengthError && setErrors('Максимальная длинна 20 символов')
          break
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true)
          isEmpty && setErrors('Поле не должно быть пустым')
          break

        case 'uniqueTask':
          validations[validation].find((elem: ITodo) => elem.title === value)
            ? setUniqueTaskError(true)
            : setUniqueTaskError(false)
          uniqueTaskError && setErrors('Такая задача уже есть в списке')
          break

        default:
          break
      }
    }
  }, [value, validations, maxLengthError, isEmpty, uniqueTaskError])

  return { errors, maxLengthError, isEmpty, uniqueTaskError }

}