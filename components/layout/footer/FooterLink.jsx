import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export default function FooterLink({children, link}) {
    const router = useRouter()
    
    return(
        <Link href={link} className={classNames('transition-all ease-in-out block py-2 text-black/50 hover:text-black text-lg', {
            ['text-brand-primary-500']: (router.asPath === link)
        })}>{children}</Link>
    )
}