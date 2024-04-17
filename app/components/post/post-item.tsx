'use client';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { HeartIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import React from 'react';
import SingleComment from './single-comment';

const PostItem = () => {
	return (
		<Card className="md:w-1/2 py-3">
			<CardContent>
				<div className="flex items-center space-x-4">
					<div className="flex space-x-4">
						<div className="w-10 h-10 overflow-hidden rounded-full">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
						<div className="space-y-1.5">
							<h3 className="text-base font-bold leading-none">
								jennycarol_89
							</h3>
							<time
								className="text-sm text-gray-500 dark:text-gray-400"
								dateTime="2023-07-08T15:23:00Z"
							>
								5d
							</time>
						</div>
					</div>
				</div>

				<div className="space-y-2 text-base leading-7">
					<p>
						What an amazing day at the beach! 🏖️ The sun
						was shining, the water was warm, and I even
						found a few beautiful seashells to take home.
						Can&#39;t wait for the next beach day!
					</p>
					<div className="grid w-full gap-2 md:max-w-none xs:grid-cols-2 lg:grid-cols-3">
						<Image
							alt="Beach photo"
							className="aspect-image object-cover rounded-md shadow"
							height={150}
							src="https://picsum.photos/200/150"
							width={200}
						/>
						<Image
							alt="Beach photo"
							className="aspect-image object-cover rounded-md shadow"
							height={150}
							src="https://picsum.photos/200/150"
							width={200}
						/>
						<Image
							alt="Beach photo"
							className="aspect-image object-cover rounded-md shadow"
							height={150}
							src="https://picsum.photos/200/150"
							width={200}
						/>
					</div>
					<div className="grid max-w-sm gap-2 text-sm md:max-w-none  xs:grid-cols-2 md:grid-cols-6">
						<div className="flex items-center space-x-1">
							<HeartIcon className="w-4 h-4 opacity-50" />
							<span className="font-medium">2.7k</span>
						</div>
						<div className="flex items-center space-x-1">
							<ChatBubbleIcon className="w-4 h-4 opacity-50" />
							<span className="font-medium">839</span>
						</div>
					</div>
					<div className="border-t border-gray-200 dark:border-gray-800" />
					<SingleComment />
				</div>
			</CardContent>
		</Card>
	);
};

export default PostItem;
