import { ReactNode } from 'react';
import FooterSection from '../components/Navigation/footer';
import HeaderSection from '../components/Navigation/header';

export default function Layout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className="flex flex-col h-full min-h-screen">
			<HeaderSection />
			<main className="flex-1 overflow-auto">{children}</main>
			<FooterSection />
		</div>
	);
}
