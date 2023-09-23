'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { FC, useState } from 'react';

interface AnswerProps {
    active: number;
    idx: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    answers: string[];
    setCorrectAnswer: React.Dispatch<React.SetStateAction<number>>;
}

const Answer: FC<AnswerProps> = ({
    active,
    answers,
    setCorrectAnswer,
    idx,
    setActive,
}) => {
    const [value, setValue] = useState<string>('');
    console.log(idx);

    return (
        <div className="flex gap-2">
            <Input
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    answers[idx] = e.target.value;
                }}
            />
            <Button
                disabled={active === idx}
                onClick={() => {
                    setActive(idx);
                    setCorrectAnswer(idx % 4);
                }}
                className={active === idx ? 'bg-slate-950' : ''}
            >
                {idx}
            </Button>
        </div>
    );
};

export default Answer;
