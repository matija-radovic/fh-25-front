import { ReactNode } from 'react';
import './TextBox.scss';

interface TextBoxProps {
    children: ReactNode;
    variant?: "white" | "purple";
    className?: string;
}

const TextBox = ({ children, variant = 'white', className = '' }: TextBoxProps) => {
    return (
        <div className={`text-box text-box-${variant} ${className}`}>
            {children}
        </div>
    );
};

export default TextBox;
