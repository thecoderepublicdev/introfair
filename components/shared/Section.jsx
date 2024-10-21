import classNames from "classnames";

export default function Section({
    id,
    contained,
    children
}) {
    return(
        <section 
            id={id} 
            className={classNames("border", {
                ['container max-w-screen-2xl mx-auto p-6 gap-4 py-12']: contained
            })}
        >
            {children}
        </section>
    )
}