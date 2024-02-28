import Input, { InputProps } from "../input/input.component";
import Label, { LabelProps } from "../label/label.component";
import Textarea, { TextareaProps } from "../textarea/textarea.component";

interface TextFieldProps {
    label: LabelProps,
    input: InputProps | TextareaProps,
    disabled?: boolean,
    required?: boolean,
    showLabel?: boolean,
    color?: 'primary' | 'secondary' | 'danger' | 'neutral',
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    variant?: 'outlined' | 'filled',
    placeholder?: string,
    type?: 'input' | 'textarea'
}

const TextField = ({
    label, input, color, size, variant, placeholder, showLabel, required, disabled, type
}:TextFieldProps) => {
    return (
        <div className="flex flex-col itens-start gap-2">
            {showLabel && (
                <div>
                    <Label {...label} {...{color, required}} />
                </div>
            )}

            {type === 'input' && (
                <Input {...input} {...{color, size, variant, placeholder, required, disabled}}/>
            )}

            {type === 'textarea' && (
                <Textarea {...input} {...{color, size, variant, placeholder, required, disabled}}/>
            )}
        </div>
    )
};

TextField.displayName = "TextField";

export default TextField;