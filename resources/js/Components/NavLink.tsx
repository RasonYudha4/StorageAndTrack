import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-[#540d87] text-white focus:border-indigo-700'
                    : 'border-transparent text-[#a449d1] hover:border-gray-300 hover:text-white focus:border-[#540d87] focus:text-[#540d87]') +
                className
            }
        >
            {children}
        </Link>
    );
}
