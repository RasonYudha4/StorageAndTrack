import { ButtonHTMLAttributes } from 'react';

export default function GoogleButton({
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <div className=" absolute top-[85%] md:top-[70%] lg:top-[80%] left-16 md:left-[37.5%] lg:left-[42.5%]">
            <button className="px-4 py-2 border-2 flex gap-2 border-slate-200 dark:border-[#a449d1] rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-white hover:text-slate-900 dark:hover:text-white hover:shadow transition duration-150">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                    <span>Login with Google</span>
            </button>
        </div>
    );
}
