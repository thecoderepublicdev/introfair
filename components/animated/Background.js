import { motion } from 'framer-motion';
export default function Background({blurColor, tileColor}) {
    return(
        <>
            <motion.div initial={{opacity: 0}} animate={{
                opacity: 1,
                transition: {duration: 1.0, ease: [0.6, 0.01, 0.05, 0.95]}
            }} className={`absolute z-[-10] top-0 left-0 mx-auto w-[800px] blur-[200px] h-[150px] rounded-full ${blurColor}`}></motion.div>
            <motion.div
                className='absolute z-[-10] top-0 left-0 right-0 w-full'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1.0 }}>
                <svg className="absolute left-[max(50%,25rem)] top-[-50px] right-[-50px] scale-105 rotate-45 h-[64rem] w-[128rem] -translate-x-1/4 stroke-gray-600 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                <defs>
                    <pattern
                        id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className={`overflow-visible ${tileColor}`}>
                    <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </motion.div>
        </>
    )
}