// ExampleList.tsx
import { useState } from "react";
import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "What are you able to help me with`?",
    "What is the SKU of HL Road Frame - Black?",
     "What is HL Road Frame?"
];

const GPT4V_EXAMPLES: string[] = [
    "Compare the impact of interest rates and GDP in financial markets.",
    "What is the expected trend for the S&P 500 index over the next five years? Compare it to the past S&P 500 performance",
    "Can you identify any correlation between oil prices and stock market trends?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    const examples = useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES;

    return (
        <ul className={styles.examplesNavList}>
            {examples.map((question, i) => (
                <li key={i}>
                    <div className={styles.example} onClick={() => onExampleClicked(question)}>
                        <p className={styles.exampleText}>{question}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ExampleList;
