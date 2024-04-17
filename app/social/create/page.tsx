import { generateRandomString } from '@/app/_lib/utils/helpers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import React from 'react';

const CreatePost = () => {
	return (
		<div className="px-4 space-y-4 py-6 md:px-6 md:space-y-0">
			<div className="space-y-2">
				<h1 className="text-2xl font-bold">
					Create a New Post
				</h1>
				<div className="grid gap-4 md:grid-cols-2 items-start">
					<div className="space-y-2">
						<Label
							className="space-y-1"
							htmlFor="content"
						>
							Post content
						</Label>
						<div className="grid gap-2">
							<Textarea
								className="min-h-[150px] not-italic"
								id="content"
								placeholder="Write your post here"
							/>
							<div className="flex items-center gap-2 text-sm">
								<span>
									You can also add emojis like this:
									:smile:
								</span>
								<Popover>
									<div className="underline underline-offset-2 cursor-pointer underline-dotted">
										Insert emoji
									</div>
								</Popover>
							</div>
						</div>
					</div>
					<div className="space-y-1">
						<Label htmlFor="images">Images</Label>
						<div className="flex flex-col gap-2 min-h-[200px]">
							<Image
								className="aspect-square object-cover"
								height={250}
								src={`https://picsum.photos/250/250?hmac=${generateRandomString(
									5,
								)}`}
								width={250}
								alt="image"
							/>
						</div>
						<div className="mt-2">
							<Button asChild>
								<Label htmlFor="images">
									Upload images
								</Label>
							</Button>
							<Input
								accept="image/*"
								className="sr-only"
								id="images"
								multiple
								type="file"
							/>
						</div>
					</div>
				</div>
			</div>
			<Button>Submit post</Button>
		</div>
	);
};

export default CreatePost;
