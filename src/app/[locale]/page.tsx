import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx } from '@/once-ui/components';
import { Projects } from '@/components/home/Projects';

import { baseURL, routes, renderContent } from '@/app/resources'; 
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {
	const t = await getTranslations();
    const { home } = renderContent(t);
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home(
	{ params: {locale}}: { params: { locale: string }}
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person, newsletter } = renderContent(t);
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="column"
				paddingY="xl" gap="m">
					<Flex
						direction="column"
						align='center'
						fillWidth maxWidth="m" gap="m">
						<RevealFx translateY="4">
							<Heading
								wrap="balance"
								variant="display-strong-m">
								{home.headline}
							</Heading>
						</RevealFx>
						<RevealFx translateY="8" delay={1}>
							<Text
								wrap="balance"
								onBackground="neutral-weak"
								variant="body-default-xl">
								{home.subline}
							</Text>
						</RevealFx>
						<RevealFx translateY="12" delay={1.5} >
							<Button
								data-border="rounded"
								href={`/${locale}/about`}
								variant="tertiary"
								suffixIcon="chevronRight"
								size="m">
								<Flex
									gap="8"
									alignItems="center">
									{about.avatar.display && (
										<Avatar
											style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
											src={person.avatar}
											size="m"/>
										)}
										{t("about.title")}
								</Flex>
							</Button>
						</RevealFx>
					</Flex>
				
			</Flex>
			<RevealFx translateY="16" delay={0.6}>
				<Projects range={[1,2]} locale={locale}/>
			</RevealFx>
			{/* {routes['/blog'] && (
				<Flex fillWidth paddingX="20">
					<Posts range={[1,2]} columns="2" locale={locale}/>
				</Flex>
			)} */}
			{/* <Projects range={[2]} locale={locale}/> */}
			{/* { newsletter.display &&
				<Mailchimp newsletter={newsletter} />
			} */}
		</Flex>
	);
}
