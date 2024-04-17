import Link from 'next/link';
import React from 'react';

const FooterSection = () => {
	return (
		<footer className="bottom-0 z-40 sticky w-full bg-white flex items-center justify-center gap-1.5 h-[60px] border-t text-sm px-4 sm:px-6 dark:text-gray-400">
			<div className="mx-auto flex items-center gap-3">
				<Link
					className="text-gray-500 hover:underline dark:text-gray-400"
					href="#"
				>
					Terms of Service
				</Link>
				<Link
					className="text-gray-500 hover:underline dark:text-gray-400"
					href="#"
				>
					Privacy Policy
				</Link>
				<Link
					className="text-gray-500 hover:underline dark:text-gray-400"
					href="#"
				>
					Contact Us
				</Link>
			</div>
		</footer>
	);
};

export default FooterSection;
