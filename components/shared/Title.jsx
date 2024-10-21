import { createElement } from "react";

export default function Title({
    level = 'h1', 
    size = '2xl', 
    children
}) {
    return createElement(level, {
        className: `font-bold font-manrope text-${size}`
    }, children)
}