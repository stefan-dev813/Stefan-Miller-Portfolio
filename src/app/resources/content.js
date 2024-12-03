import { InlineCode, LetterFx } from "@/once-ui/components";

const person = {
    firstName: 'Stefan',
    lastName:  'Miller',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full-Stack Developer',
    avatar:    '/images/photo.jpg',
    location:  'Pensacola, FL, US', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/stefan-miller-517b242a0/',
    },
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/stefan-dev813',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:stefano.mori.dev@gmail.com',
    }, 
    // {
    //     name: '+1 (561) 501 1550',
    //     icon: 'phone',
    //     link: 'tel:+15615011550',
    // },
    // {
    //     name: 'Skype',
    //     icon: 'skype',
    //     link: 'skype:live:.cid.3877235d4216d91f?chat',
    // },
    // {
    //     name: 'Discord',
    //     icon: 'discord',
    //     link: 'HiddenEye',
    // },
    
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <span style={{ fontFamily: 'var(--font-family-code)' }}>
                <LetterFx
                    speed="medium"
                    trigger="instant"
                    charset={[
                        'A', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
                    ]}
                >
                    Driving Innovation and Excellence Through Expertly Crafted Digital Solutions and IT Strategies
                </LetterFx>
            </span>,
    subline: <>I’m a results-driven <InlineCode>Full Stack Developer</InlineCode> and <InlineCode>IT Solutions Architect</InlineCode> passionate about turning complex challenges into innovative opportunities. With extensive experience in delivering expertly crafted digital solutions and IT strategies, I focus on creating seamless, impactful, and future-ready systems. My mindset is anchored in continuous growth, problem-solving, and delivering excellence that empowers businesses to thrive in a rapidly evolving digital landscape. Every project I take on reflects my commitment to precision, innovation, and exceeding expectations.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com/stefanmiller'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: [<>I’m a visionary Full Stack Developer and IT Solutions Expert committed to driving innovation and delivering excellence. With years of experience in creating tailored digital solutions, I specialize in bridging technology and strategy to empower businesses. My approach is grounded in precision, creativity, and a deep understanding of diverse needs, ensuring every solution is not only efficient but impactful. Whether designing user-focused applications or optimizing IT strategies, I am dedicated to transforming complex ideas into seamless, cutting-edge results.
        </>]
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Freelancer',
                timeframe: '2019 - Present',
                role: 'Senior Full-Stack Developer | Strong Problem-Solver',
                achievements: [
                    <>Designed and developed fully responsive, user-friendly web applications with an emphasis on seamless UI/UX design to meet clients' unique business goals and branding guidelines.</>,
                    <>Built and maintained robust backend systems using technologies like Node.js, PHP, and Python, with efficient database management utilizing MySQL, MongoDB, and PostgreSQL.</>,
                    <>Enhanced website visibility and performance by implementing SEO best practices, ensuring optimal search engine rankings and improved user engagement.</>,
                    <>Streamlined development workflows through the adoption of CI/CD pipelines, facilitating faster and error-free deployments with tools like Jenkins, GitHub Actions, and Docker.</>,
                    <>Delivered dynamic and interactive front-end experiences using modern frameworks such as React, Vue.js, and Next.js, integrated with backend APIs for a seamless user experience.</>,
                    <>Provided customized problem-solving solutions by analyzing client requirements, troubleshooting issues, and implementing innovative approaches to ensure project success.</>,
                    <>Maintained attention to detail to ensure high-quality code, optimized performance, and flawless functionality across different devices and browsers.</>,
                    <>Offered continuous support and maintenance, including performance optimization, security updates, and new feature development, ensuring long-term client satisfaction and project sustainability.</>,
                    <>Collaborated with clients to define clear objectives, managed project timelines effectively, and delivered results that consistently exceeded expectations.</>
                ],
                images: []
            },
            {
                company: 'LaunchPad Lab',
                timeframe: '2021 - 2022',
                role: 'Senior Mobile & Back-End Developer',
                achievements: [
                    <>Led a comprehensive blueprinting workshop to understand the business model and challenges, leading to the identificatio of key app to enhance customer experience</>,
                    <>Developed a strategic technology roadmap and delivered a fully functional MVP in under four months, which re-engaged customers through an intuitive mobile interface</>,
                    <>Engineered the app's architecture using a robust technology stack, including Heroku, PostgreSQL, Salesfore CRM, Ionic, and React.js, to ensure rapid development and seamless integration</>,
                    <>Successfully launched the app, enabling features such as push notifications, customized energy dashboards, and a referral program, enhancing user engagements and providing valuable insights into solar energy production</>,
                    
                ],
                images: []
            },
            {
                company: 'FurnitureFinders LLC',
                timeframe: '2019 - 2021',
                role: 'Senior Full-Stack Developer | Team Lead',
                achievements: [
                    <>Re-design, implementation and ongoing maintence of the customer-to-dealer sytem targeting the US used office furniture market</>,
                    <>Developmen of websites for furniture dealers using a custom Deamweaver-compliant framework</>,
                    <>Implementation of content syndications tools based on JavaScript</>,
                    <>Implementation of auxiliary tools in PHP/MySQL and Java/Swing for data processing</>,
                ],
                images: []
            },
            {
                company: 'Digiscorp',
                timeframe: '2017 - 2019',
                role: 'Senior Full-Stack Developer | Team Lead',
                achievements: [
                    <>Introduced community chats and groups for enhanced user collaboration</>,
                    <>Underwent a full rebranding with a modern desgin to emphasize innovation</>,
                    <>Launched a sophisticated recommendation system for tailored user connections</>,
                    <>Integreated deep linking for direct access to events and communities</>
                ],
                images: []
            },
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'New College of Florida',
                description: <>Bachelor's Degree in Computer Science</>,
            },
            {
                name: 'Codesmith',
                description: <>Advanced Residency for Software Engineering</>,
            },
            {
                name: 'HackerRank',
                description: <>Advanced Residency for Software Engineering</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Programming Languages',
                description: <>HTML | CSS | JavaScript | TypeScript | C# | PHP | Python</>,
                images: [] 
            },
            {
                title: 'Front-End Frameworks',
                description: <>React | Next.js | Vue.js | Nuxt.js | Angular | Svelte</>,
                images: [] 
            },
            {
                title: 'Back-End Frameworks',
                description: <>Node.js | Express.js | Nest.js | .NET | ASP.NET | Laravel | Django | Flask | FastAPI</>,
                images: []
            },
            {
                title: 'Database Development',
                description: <>SQL (MySQL, PostgreSQL, Oracle) | MongoDB</>,
                images: []
            },
            {
                title: 'Mobile Development',
                description: <>React Native | Ionic | Flutter</>,
                images: []
            },
            {
                title: 'Automation & Workflow Optimization',
                description: <>Webpack | Vite | Gulp | NPM | Continuous integration (CI/CD) with GitHub Actions </>,
                images: []
            },
            {
                title: 'Responsive Design',
                description: <>CSS Grid | Flexbox | Media Queries | Mobile-First design</>,
                images: []
            },
            {
                title: 'UI Libraries & Frameworks',
                description: <>Bootstrap | Tailwind CSS | Material-UI | Once-UI</>,
                images: []
            },
            {
                title: 'Deployment Platforms',
                description: <>AWS | Vercel | Netlify | Heroku | XServer</>,
                images: []
            },
            {
                title: 'Version Control & Collaboration',
                description: <>Git | GitHub | GitLab</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about stuff...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/rsp-01.png', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/a-record-creator.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/ksmain-01.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
      
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };