import PostBlock from '@/app/components/profile/post-block';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const UserProfile = () => {
	return (
		<div className="w-full max-w-6xl space-y-6 container m-auto">
			<div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 mt-6">
				<div className="flex items-start space-x-6 lg:space-x-10">
					<Image
						alt="User profile picture"
						className="rounded-full"
						height="128"
						src="https://picsum.photos/128/128"
						style={{
							aspectRatio: '128/128',
							objectFit: 'cover',
						}}
						width="128"
					/>
					<div className="space-y-1">
						<div className="flex items-center gap-4">
							<h1 className="text-2xl font-bold">
								jessicaw
							</h1>
							<Button size="sm">Follow</Button>
						</div>
						<p className="text-gray-500 dark:text-gray-400">
							Designer. Lover of all things creative.
							Fan of coffee and good books.
						</p>
						<div className="grid gap-1.5 sm:grid-flow-col">
							<div>Posts</div>
							<div>Followers</div>
							<div>Following</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-6 xs:grid-cols-2 sm:grid-cols-3">
				{Array.from(
					{ length: 5 },
					(_, index) => index + 1,
				).map(item => (
					<PostBlock key={item} />
				))}
			</div>
		</div>
	);
};

export default UserProfile;
