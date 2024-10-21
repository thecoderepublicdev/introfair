import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavigationItem({children, link = ""}) {
    const router = useRouter();

    return(
        <Link href={link} className={classNames('p-[16px] transition-all ease-in-out text-md hover:bg-[#034693]/10 md:rounded-full lg:rounded-full xl:rounded-full 2xl:rounded-full cursor-pointer text-black/50', {
            ['bg-[#034693] text-white']: (router.asPath === link),
        })}>
            <label>
                {children}
            </label>
        </Link>
    )
}