'use client';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../../utils/motion';

export const TypingText = ({ title, textStyle }: { title: string, textStyle?: string }) => (
  <motion.span
    variants={textContainer}
    initial="hidden"
    whileInView="show"
    className={`${textStyle}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.span>
);

export const TitleText = ({ title, textStyle }: { title: string, textStyle?: string }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${textStyle} mt-4 font-bold sm:text-[64px] text-[40px] text-white`}
  >
    {title}
  </motion.h2>
);
