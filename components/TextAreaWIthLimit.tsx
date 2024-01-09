'use client';

import React, { useState } from 'react';
import { Textarea } from './ui/textarea';
import { FormDescription } from './ui/form';

const TextAreaWithLimit = ({ limit, desc, sameLine, ...field } : { limit : number; desc: string; sameLine: boolean;}) => {
  const [text, setText] = useState('');

  const handleChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    if (value.length <= limit) {
      setText(value);
    }
  };

  return (
    <>
        <Textarea {...field} value={text} onChange={handleChange} className='max-h-[200px]' />
            <FormDescription className={`flex ${sameLine? 'justify-between' : 'flex-col gap-2'}`}>
                <span>{desc}</span>
                    <span className='self-end'>
                    {text.length}/{limit}
                    </span>
            </FormDescription>
    </>
  );
};

export default TextAreaWithLimit;