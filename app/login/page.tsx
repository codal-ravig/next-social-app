import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import LoginForm from '../components/forms/login';

const LoginPage = () => {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="w-full md:w-1/2 p-8 flex justify-center items-center w-100-sm">
				<Card>
					<CardHeader>
						<CardTitle className="text-2xl">
							Login
						</CardTitle>
						<CardDescription>
							Welcome back
						</CardDescription>
					</CardHeader>
					<CardContent>
						<LoginForm />
					</CardContent>
				</Card>
			</div>

			<div className="hidden  sm:block w-1/2 min-h-screen">
				<Image
					src="/images/login-landing.avif"
					alt="Office desk"
					width={'500'}
					height={'500'}
					style={{ height: '100vh', objectFit: 'cover' }}
					className="w-full h-auto"
					unoptimized
				/>
			</div>
		</div>
	);
};

export default LoginPage;
