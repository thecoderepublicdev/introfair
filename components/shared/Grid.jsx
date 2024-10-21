import classNames from "classnames"
import { createElement } from "react"

export default function Grid({
    ref,
    gap, 
    desktop,
    mobile,
    gapHorizontal, 
    gapVertical, 
    children
}) {
    return createElement('div', {
        ref: ref ,
        className: classNames('grid', {
            [`md:grid-cols-${desktop.toString()} lg:grid-cols-${desktop} xl:grid-cols-${desktop} 2xl:grid-cols-${desktop}`]: (desktop)
        })
    }, children)
}