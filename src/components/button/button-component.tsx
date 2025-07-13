import type { ButtonProps } from "./interface/button-props";

export const ButtonComponent = (props: ButtonProps) => {
    const { name, onClick, disabled = false } = props;
    return (
        <button disabled={disabled} onClick={() => onClick("image")}>
            {name}
        </button>
    );
};
