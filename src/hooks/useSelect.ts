import { useState } from 'react';

export default function useSelect(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue)

  function chengeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
  }

  return { value, chengeSelect }
}