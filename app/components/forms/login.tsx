'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';

const LoginForm = () => {
	const router = useRouter();
	const loginHandler = (event: FormEvent) => {
		event.preventDefault();
		console.log('login');
		router.push('/social');
	};
	return (
		<form onSubmit={loginHandler}>
			<div className="grid w-full items-center gap-4">
				<div className="flex flex-col space-y-1.5">
					<Label htmlFor="email">Email</Label>
					<Input
						required
						id="email"
						placeholder="Enter Email id"
					/>
				</div>
				<div className="flex flex-col space-y-1.5">
					<Label htmlFor="password">Password</Label>
					<Input
						required
						id="password"
						type="password"
						placeholder="********"
					/>
				</div>
			</div>
			<div className="mt-3">
				<Button
					type="submit"
					variant="secondary"
					className="w-full"
				>
					Login
				</Button>
			</div>
		</form>
	);
};

export default LoginForm;
