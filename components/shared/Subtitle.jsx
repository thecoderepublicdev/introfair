import classNames from "classnames";

export default function Subtitle({
    children, 
    uppercase = false
}) {
    return <label className={classNames('text-md font-manrope text-gray-500', {
        ['uppercase']: uppercase
    })}>{children}</label>
}