import { InputHTMLAttributes, useId } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	value: string;
}

export function LabelInput({ label, value, ...rest }: Props) {
	const inputId = useId();

	return (
		<div className='mb-3'>
			<label className='form-label' htmlFor={inputId}>
				{label}
			</label>
			<input className='form-control' id={inputId} value={value} {...rest} />
		</div>
	);
}
