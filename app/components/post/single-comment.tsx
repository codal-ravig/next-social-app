import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/components/ui/avatar';
import React from 'react';

const SingleComment = () => {
	return (
		<div className="grid gap-4 pt-4">
			<div className="flex gap-2">
				<div className="w-10 h-10 overflow-hidden rounded-full">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
				<div className="grid flex-1 min-w-0 ml-4.5.5 grid-cols-6">
					<div className="flex flex-col space-y-1.5 col-span-5">
						<h4 className="text-sm font-semibold leading-none">
							jasonmomoa_lover
						</h4>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Absolutely stunning! Looks like you had a
							fantastic day. 💖
						</p>
					</div>
					<div className="flex flex-col space-y-1.5 justify-end">
						<time
							className="self-end text-xs text-gray-500 dark:text-gray-400"
							dateTime="2023-07-08T15:23:00Z"
						>
							5d
						</time>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleComment;
