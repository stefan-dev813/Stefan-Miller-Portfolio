"use client";

import { AvatarGroup, Flex, Heading, RevealFx, SmartImage, SmartLink, Text } from "@/once-ui/components";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import { PiTextAlignCenter } from "react-icons/pi";
import styles from './Projects.module.scss'

interface ProjectCardProps {
    href: string;
    images: string[];
    title: string;
    content: string;
    description: string;
    avatars: { src: string }[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    href,
    images = [],
    title,
    content,
    description,
    avatars
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const t = useTranslations();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleImageClick = () => {
        if(images.length > 1) {
            setIsTransitioning(false);
            const nextIndex = (activeIndex + 1) % images.length;
            handleControlClick(nextIndex);

        }
    };

    const handleControlClick = (index: number) => {
        if (index !== activeIndex) {
            setIsTransitioning(false);
            setTimeout(() => {
                setActiveIndex(index);
                setIsTransitioning(true);
            }, 630);
        }
    };

    return (
        <Flex
            fillWidth gap="m"
            direction="column">
                <Flex
                mobileDirection="column"
                fillWidth paddingX="l" paddingTop="xs" paddingBottom="m" gap="l">
                {title && (
                    <Flex
                        flex={12} >
                        <Heading
                            as="h2"
                            wrap="inherit"
                            align="center"
                            variant="display-strong-xs">
                            {title}
                        </Heading>
                    </Flex>
                )}
                
            </Flex>

            <Flex onClick={handleImageClick}>
                <RevealFx
                    style={{width: '100%'}}
                    delay={0.4}
                    trigger={isTransitioning}
                    speed="fast">
                    <SmartImage
                        tabIndex={0}
                        radius="l"
                        alt={title}
                        aspectRatio="16 / 11"
                        src={images[activeIndex]}
                        style={{
                            border: '1px solid var(--neutral-alpha-weak)',
                            ...(images.length > 1 && {
                                cursor: 'pointer',
                            }),
                        }}/>
                </RevealFx>
            </Flex>
            
            {images.length > 1 && (
                <Flex
                    gap="4" paddingX="s" marginBottom="xl"
                    fillWidth maxWidth={100}
                    justifyContent="center">
                    {images.map((_, index) => (
                        <Flex
                            key={index}
                            onClick={() => handleControlClick(index)}
                            style={{
                                background: activeIndex === index 
                                    ? 'var(--neutral-on-background-strong)' 
                                    : 'var(--neutral-alpha-medium)',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease',

                            }}
                            fillWidth
                            alignItems="center"
                            height="4">
                        </Flex>
                    ))}
                </Flex>
            )}
        </Flex>
    );
};
