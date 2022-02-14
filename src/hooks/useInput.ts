import { useState } from 'react';
import { useValidateAddTodoForm } from './useValidateAddTodoForm';

export default function useInput(initialValue: string, validations: Object) {
  const [value, setValue] = useState<string>(initialValue)
  const [isTouched, setIsTouched] = useState<boolean>(false)
  const valid = useValidateAddTodoForm(value, validations)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsTouched(true)
  }

  return {
    value,
    onChange,
    onBlur,
    setValue,
    isTouched,
    ...valid
  }
}