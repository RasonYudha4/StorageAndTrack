import { LabelHTMLAttributes } from 'react';

export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-medium text-[#540d87] ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
