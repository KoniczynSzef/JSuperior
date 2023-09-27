'use client';

import React, { FC, useRef } from 'react';
import { Card, CardTitle } from '../ui/card';
import P from '../P';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface TipProps {
    id: number;
    title: string;
    desc: string;
}

const Tip: FC<TipProps> = ({ title, desc, id }) => {
    const mounted = useRef<boolean>(false);
    const { ref, inView } = useInView();
    if (inView && !mounted.current) {
        mounted.current = true;
    }

    return (
        <motion.div
            ref={ref}
            key={id}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 * id }}
            animate={mounted.current && { opacity: 1, y: 0 }}
            id={`card-${id}`}
        >
            <Card className="bg-transparent max-w-lg text-background border-slate-700">
                <CardTitle className="text-white border-b border-b-slate-800 py-4 px-6 bg-slate-900 rounded-t">
                    {id}. {title}
                </CardTitle>
                <div className="px-6 text-sec my-4">
                    <P>{desc}</P>
                </div>
            </Card>
        </motion.div>
    );
};

export default Tip;
