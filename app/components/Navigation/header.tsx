import { Button } from '@/components/ui/button';
import {
	BellIcon,
	CookieIcon,
	PersonIcon,
	RocketIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

const HeaderSection = () => {
	return (
		<header className="top-0 z-40 sticky bg-white flex items-center h-[60px] px-4 border-b justify-between gap-4 sm:px-6">
			<div className="flex items-center gap-2">
				<Link
					className="flex items-center gap-2 font-semibold"
					href="/"
				>
					<CookieIcon className="h-6 w-6" />
					<span className="sr-only">Home</span>
				</Link>
			</div>
			<nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
				{/* <Link
					className="flex items-center gap-1.5 text-gray-900 dark:text-gray-100"
					href="#"
				>
					Home
				</Link> */}
				<Link
					className="flex items-center gap-1.5"
					href="/social/123"
				>
					Profile
				</Link>
				<Link
					className="flex items-center gap-1.5"
					href="/login"
				>
					Notifications
				</Link>
				<Link
					className="flex items-center gap-1.5"
					href="/login"
				>
					Messages
				</Link>
			</nav>
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2">
					<Link href={'/social/123'}>
						<Button
							className="rounded-full"
							size="icon"
							variant="ghost"
						>
							<PersonIcon className="w-4 h-4" />
							<span className="sr-only">Profile</span>
						</Button>
					</Link>

					<Button
						className="rounded-full"
						size="icon"
						variant="ghost"
					>
						<BellIcon className="w-4 h-4" />
						<span className="sr-only">Notifications</span>
					</Button>
					<Button
						className="rounded-full"
						size="icon"
						variant="ghost"
					>
						<Link href="/social">
							<RocketIcon className="w-4 h-4" />
							<span className="sr-only">Messages</span>
						</Link>
					</Button>
				</div>
				<Button
					className="hidden lg:flex"
					variant="outline"
					asChild
				>
					<Link href="/social/create">Create</Link>
				</Button>
			</div>
		</header>
	);
};

export default HeaderSection;
