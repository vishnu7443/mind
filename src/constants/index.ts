import type {
	BlogPost,
	DockApp,
	FinderNode,
	FinderLocation,
	GalleryItem,
	LocationType,
	LocationsMap,
	NavIcon,
	NavLink,
	SafariBookmark,
	SocialLink,
	TechStackCategory,
	WindowConfig,
} from '#types';

/**
 * Top-nav link labels and their window targets.
 */
const navLinks = [
	{
		id: 1,
		name: 'Projects',
		type: 'finder',
	},
	{
		id: 3,
		name: 'Contact',
		type: 'contact',
	},
	{
		id: 4,
		name: 'Resume',
		type: 'resume',
	},
] satisfies NavLink[];

/**
 * Status/action icons shown in the top nav.
 */
const navIcons = [
	{
		id: 1,
		type: 'status',
		img: '/icons/wifi.svg',
	},
	{
		id: 2,
		type: 'status',
		img: '/icons/search.svg',
	},
	{
		id: 3,
		type: 'status',
		img: '/icons/user.svg',
	},
	{
		id: 4,
		type: 'theme',
		img: '/icons/mode.svg',
	},
] satisfies NavIcon[];

/**
 * Dock icon config. `id` must map to a window key when `canOpen` is true.
 */
const dockApps = [
	{
		id: 'finder',
		name: 'Portfolio',
		icon: 'finder.png',
		canOpen: true,
		showOnMobile: true,
	},
	{
		id: 'safari',
		name: 'Articles',
		icon: 'safari.png',
		canOpen: true,
		showOnMobile: true,
	},
	{
		id: 'photos',
		name: 'Certifications',
		icon: 'photos.png',
		canOpen: true,
		showOnMobile: true,
	},
	{
		id: 'contact',
		name: 'Contact',
		icon: 'contact.png',
		canOpen: true,
		showOnMobile: true,
	},
	{
		id: 'terminal',
		name: 'Skills',
		icon: 'terminal.png',
		canOpen: true,
		showOnMobile: false,
	},
	{
		id: 'trash',
		name: 'Archive',
		icon: 'trash.png',
		canOpen: false,
		showOnMobile: false,
	},
] satisfies DockApp[];

/**
 * Article cards shown in the Safari/Articles window.
 */
const blogPosts = [
	{
		id: 1,
		date: 'Aug 2026',
		title: 'MCP Governance Gateway: Zero-Copy Inspection & 901x Latency Speedup',
		image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
		link: 'https://github.com/vishnu7443',
	},
	{
		id: 2,
		date: 'Jul 2026',
		title: 'Intelligent Inference Gateway: Heuristic Routing & FAISS Semantic Caching',
		image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
		link: 'https://github.com/vishnu7443',
	},
	{
		id: 3,
		date: 'Feb 2026',
		title: 'Architecting Multi-Agent AI Systems with LangGraph & Claude AI',
		image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
		link: 'https://github.com/vishnu7443',
	},
	{
		id: 4,
		date: 'Nov 2025',
		title: 'Production-Grade RAG: Hybrid BM25 & Cross-Encoder Reranking',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
		link: 'https://github.com/vishnu7443',
	},
	{
		id: 5,
		date: 'Jul 2025',
		title: 'Graph-Native Financial Fraud Detection with Neo4j & FastAPI',
		image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
		link: 'https://github.com/vishnu7443',
	},
] satisfies BlogPost[];

/**
 * Curated bookmarks shown in Safari bookmark menus.
 */
const safariBookmarks = [
	{
		id: 1,
		category: 'Portfolio',
		title: "Vishnu's GitHub",
		url: 'https://github.com/vishnu7443',
	},
	{
		id: 2,
		category: 'Portfolio',
		title: "Vishnu's LinkedIn",
		url: 'https://www.linkedin.com/in/vishnuvardhanrg76/',
	},
	{
		id: 3,
		category: 'Coding',
		title: 'LeetCode',
		url: 'https://leetcode.com/u/vishnuvaardhan/',
	},
	{
		id: 4,
		category: 'Coding',
		title: 'HackerRank',
		url: 'https://www.hackerrank.com/profile/visshnu2007',
	},
	{
		id: 5,
		category: 'Academics',
		title: 'Sri Ramakrishna Institute of Technology',
		url: 'https://srit.org/',
	},
] satisfies SafariBookmark[];

/**
 * Tech stack grouped by category.
 */
const techStack = [
	{
		category: 'AI / Agentic',
		items: [
			'CrewAI',
			'LangChain',
			'LangGraph',
			'N8N',
			'Claude AI',
			'Hugging Face',
			'RAG Pipelines',
			'Generative AI',
			'Prompt Engineering',
			'Vector Databases',
			'AI Observability',
		],
	},
	{
		category: 'ML / Data',
		items: [
			'Scikit-learn',
			'Pandas',
			'NumPy',
			'Model Training & Evaluation',
			'Hyperparameter Tuning',
			'Feature Engineering',
			'EDA',
			'Collaborative Filtering',
			'Regression',
			'Classification',
		],
	},
	{
		category: 'System Design',
		items: [
			'Microservices Architecture',
			'REST API Design',
			'Rate Limiting',
			'Caching Strategies',
			'Load Balancing',
			'Message Queues',
			'Scalability Patterns',
			'Database Sharding',
		],
	},
	{
		category: 'Frontend',
		items: [
			'React.js',
			'Next.js',
			'Tailwind CSS',
			'HTML5',
			'CSS3',
			'Bootstrap',
			'Responsive Design',
			'Component Libraries',
			'Dark Mode UI',
		],
	},
	{
		category: 'Backend',
		items: [
			'Node.js',
			'Express.js',
			'Firebase',
			'REST APIs',
			'JWT Authentication',
			'Middleware Design',
			'WebSockets',
		],
	},
	{
		category: 'Database',
		items: [
			'MongoDB',
			'MySQL',
			'Firebase Firestore',
			'Redis',
			'Schema Design',
			'Indexing',
			'Query Optimisation',
		],
	},
	{
		category: 'Languages',
		items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'C'],
	},
	{
		category: 'Cloud & DevOps',
		items: [
			'AWS (S3, Bedrock)',
			'Docker',
			'Azure AI',
			'Git',
			'GitHub',
			'CI/CD',
			'Vercel',
			'Render',
		],
	},
	{
		category: 'Tools',
		items: [
			'VS Code',
			'Cursor',
			'Claude Code',
			'GitHub',
			'Postman',
			'Figma',
			'Canva',
		],
	},
] satisfies TechStackCategory[];

/**
 * Social links with icon and accent color.
 */
const socials = [
	{
		id: 1,
		text: 'Github',
		icon: '/icons/github.svg',
		bg: '#f4656b',
		link: 'https://github.com/vishnu7443',
	},
	{
		id: 2,
		text: 'LeetCode',
		icon: '/icons/atom.svg',
		bg: '#4bcb63',
		link: 'https://leetcode.com/u/vishnuvaardhan/',
	},
	{
		id: 3,
		text: 'HackerRank',
		icon: '/icons/twitter.svg',
		bg: '#ff866b',
		link: 'https://www.hackerrank.com/profile/visshnu2007',
	},
	{
		id: 4,
		text: 'LinkedIn',
		icon: '/icons/linkedin.svg',
		bg: '#05b6f6',
		link: 'https://www.linkedin.com/in/vishnuvardhanrg76/',
	},
] satisfies SocialLink[];

/** Certification issuers mapped to authoritative reference URLs. */
const ISSUER_URLS = {
	'DataCamp': 'https://www.datacamp.com/',
	'AWS': 'https://aws.amazon.com/training/',
	'Microsoft Learn': 'https://learn.microsoft.com/',
	'Hugging Face': 'https://huggingface.co/',
	'Google Cloud': 'https://cloud.google.com/learn',
	'Anthropic': 'https://www.anthropic.com/',
	'OpenAI': 'https://openai.com/',
	'Infosys Springboard': 'https://infyspringboard.onwingspan.com/',
	'GUVI': 'https://www.guvi.in/',
	'GUVI × HCL': 'https://www.guvi.in/',
	'Accenture': 'https://www.accenture.com/',
	'Digital Workforce Services': 'https://digitalworkforce.com/',
	'DeepLearning.AI': 'https://www.deeplearning.ai/',
	'AlgoUniversity': 'https://algouniversity.com/',
	'Growthschool': 'https://growthschool.io/',
	'Skill India': 'https://www.skillindiadigital.gov.in/',
	'Corizo': 'https://corizo.in/',
	'SRIT': 'https://srit.org/',
	'Python Institute': 'https://pythoninstitute.org/',
	'Vibe State': 'https://github.com/vishnu7443',
} as const;

/** Complete set of 46 certifications populated from public/files. */
const GALLERY_IMAGES = [
	// ─── AI & AGENTS ───
	{
		title: 'Agentic AI Fundamentals',
		issuer: 'Hugging Face',
		issuerUrl: ISSUER_URLS['Hugging Face'],
		category: 'AI / Agents',
		imageUrl: '/files/Hugging Face.png',
	},
	{
		title: 'Introduction to AI Agents',
		issuer: 'DataCamp',
		issuerUrl: ISSUER_URLS.DataCamp,
		category: 'AI / Agents',
		imageUrl: '/files/Introduction to AI Agents.pdf',
	},
	{
		title: 'Agentic AI',
		issuer: 'Digital Workforce Services',
		issuerUrl: ISSUER_URLS['Digital Workforce Services'],
		category: 'AI / Agents',
		imageUrl: '/files/Agentic Ai.pdf',
	},
	{
		title: 'Claude 101',
		issuer: 'Anthropic',
		issuerUrl: ISSUER_URLS.Anthropic,
		category: 'AI / Agents',
		imageUrl: '/files/claude 101.pdf',
	},
	{
		title: 'Claude Model Context Protocol (MCP)',
		issuer: 'Anthropic',
		issuerUrl: ISSUER_URLS.Anthropic,
		category: 'AI / Agents',
		imageUrl: '/files/Claude MCP.pdf',
	},
	{
		title: 'Introduction to Subagents',
		issuer: 'Anthropic',
		issuerUrl: ISSUER_URLS.Anthropic,
		category: 'AI / Agents',
		imageUrl: '/files/Claude Introduction to Subagents.pdf',
	},
	{
		title: 'Introduction to Agent Skills',
		issuer: 'Anthropic',
		issuerUrl: ISSUER_URLS.Anthropic,
		category: 'AI / Agents',
		imageUrl: '/files/Introduction to Agent Skills.pdf',
	},
	{
		title: 'Introduction to Agent Skills',
		issuer: 'DataCamp',
		issuerUrl: ISSUER_URLS.DataCamp,
		category: 'AI / Agents',
		imageUrl: '/files/Introduction to Agent Skills(1).pdf',
	},
	{
		title: 'Claude Code in Action',
		issuer: 'Anthropic',
		issuerUrl: ISSUER_URLS.Anthropic,
		category: 'AI / Agents',
		imageUrl: '/files/Claude code in action_.pdf',
	},
	{
		title: 'Claude Cowork & Collaboration',
		issuer: 'Anthropic',
		issuerUrl: ISSUER_URLS.Anthropic,
		category: 'AI / Agents',
		imageUrl: '/files/Claude cowork.pdf',
	},
	{
		title: 'AI Fluency',
		issuer: 'Anthropic',
		issuerUrl: ISSUER_URLS.Anthropic,
		category: 'AI / Agents',
		imageUrl: '/files/AI Fluency.pdf',
	},
	{
		title: 'AI Agents and Workflows',
		issuer: 'OpenAI',
		issuerUrl: ISSUER_URLS.OpenAI,
		category: 'AI / Agents',
		imageUrl: '/files/OpenAI AI Agents and Workflows.pdf',
	},
	{
		title: 'Developing AI Systems with the OpenAI API',
		issuer: 'DataCamp',
		issuerUrl: ISSUER_URLS.DataCamp,
		category: 'AI / Agents',
		imageUrl: '/files/Developing AI Systems with the OpenAI API.pdf',
	},
	{
		title: 'Software Development with Cursor',
		issuer: 'DataCamp',
		issuerUrl: ISSUER_URLS.DataCamp,
		category: 'AI / Agents',
		imageUrl: '/files/Software Development with Cursor.pdf',
	},
	{
		title: 'Build & Deploy Apps with Google AI Studio',
		issuer: 'GUVI',
		issuerUrl: ISSUER_URLS.GUVI,
		category: 'AI / Agents',
		imageUrl: '/files/GUVI AI.png',
	},
	{
		title: 'Google AI Studio Certification',
		issuer: 'GUVI × HCL',
		issuerUrl: ISSUER_URLS['GUVI × HCL'],
		category: 'AI / Agents',
		imageUrl: '/files/HCL GUVI Certification.png',
	},
	{
		title: 'AI Foundations',
		issuer: 'OpenAI',
		issuerUrl: ISSUER_URLS.OpenAI,
		category: 'AI / Agents',
		imageUrl: '/files/OpenAI AI Foundations.pdf',
	},
	{
		title: 'Applied AI Foundations',
		issuer: 'OpenAI',
		issuerUrl: ISSUER_URLS.OpenAI,
		category: 'AI / Agents',
		imageUrl: '/files/OpenAI Applied AI Foundations.pdf',
	},
	{
		title: 'Digital Skills: Artificial Intelligence',
		issuer: 'Accenture',
		issuerUrl: ISSUER_URLS.Accenture,
		category: 'AI / Agents',
		imageUrl: '/files/AccentureAI.pdf',
	},
	{
		title: 'Foundations of Prompt Engineering',
		issuer: 'AWS',
		issuerUrl: ISSUER_URLS.AWS,
		category: 'AI / Agents',
		imageUrl: '/files/Foundations of Prompt Engineering.pdf',
	},
	{
		title: 'Vertex AI Prompt Design',
		issuer: 'Google Cloud',
		issuerUrl: ISSUER_URLS['Google Cloud'],
		category: 'AI / Agents',
		imageUrl: '/files/Google Vertex AI Prompt Design.pdf',
	},
	{
		title: 'Multimodality Documents RAG',
		issuer: 'DeepLearning.AI',
		issuerUrl: ISSUER_URLS['DeepLearning.AI'],
		category: 'AI / Agents',
		imageUrl: '/files/Multimodality Documents RAG.pdf',
	},
	{
		title: 'Develop a GenAI Application using Streamlit',
		issuer: 'DeepLearning.AI',
		issuerUrl: ISSUER_URLS['DeepLearning.AI'],
		category: 'AI / Agents',
		imageUrl: '/files/Develop an GenAI Application using Streamlit.pdf',
	},
	{
		title: 'Learn & Practice Generative AI Tools',
		issuer: 'SRIT',
		issuerUrl: ISSUER_URLS.SRIT,
		category: 'AI / Agents',
		imageUrl: '/files/GenAI Tools.pdf',
	},
	{
		title: 'Generative AI Workshop',
		issuer: 'Growthschool',
		issuerUrl: ISSUER_URLS.Growthschool,
		category: 'AI / Agents',
		imageUrl: '/files/GenAI-Bootcamp_cert.pdf',
	},
	{
		title: 'Generative AI Bootcamp',
		issuer: 'Skill India',
		issuerUrl: ISSUER_URLS['Skill India'],
		category: 'AI / Agents',
		imageUrl: '/files/Generative AI Bootcamp - Skill India.pdf',
	},
	{
		title: 'Introduction to Generative AI - Art of the Possible',
		issuer: 'AWS',
		issuerUrl: ISSUER_URLS.AWS,
		category: 'AI / Agents',
		imageUrl: '/files/Introduction to Generative AI - Art of the Possible.pdf',
	},
	{
		title: 'Exploring AI Use Cases and Applications',
		issuer: 'AWS',
		issuerUrl: ISSUER_URLS.AWS,
		category: 'AI / Agents',
		imageUrl: '/files/AWS Exploring Artificial Intelligence Use Cases and Applications.pdf',
	},
	{
		title: 'Get Started with AI in Azure',
		issuer: 'Microsoft Learn',
		issuerUrl: ISSUER_URLS['Microsoft Learn'],
		category: 'AI / Agents',
		imageUrl: '/files/Azure Fundamentals.pdf',
	},
	{
		title: 'Pricing & Packaging Generative AI in SaaS',
		issuer: 'AWS',
		issuerUrl: ISSUER_URLS.AWS,
		category: 'AI / Agents',
		imageUrl: '/files/Pricing and Packaging Generative AI in SaaS.pdf',
	},

	// ─── MACHINE LEARNING ───
	{
		title: 'Fundamentals of Machine Learning & AI',
		issuer: 'AWS',
		issuerUrl: ISSUER_URLS.AWS,
		category: 'Machine Learning',
		imageUrl: '/files/Fundamentals of ML AWS.pdf',
	},
	{
		title: 'AI & Machine Learning Industrial Program',
		issuer: 'SRIT',
		issuerUrl: ISSUER_URLS.SRIT,
		category: 'Machine Learning',
		imageUrl: '/files/AIML IV.png',
	},

	// ─── CLOUD & DEVOPS ───
	{
		title: 'AWS Certified Solutions Architect - Professional',
		issuer: 'AWS',
		issuerUrl: ISSUER_URLS.AWS,
		category: 'Cloud & DevOps',
		imageUrl: '/files/aws_solutions_architect_professional.pdf',
	},
	{
		title: 'Amazon RDS Service Primer',
		issuer: 'AWS',
		issuerUrl: ISSUER_URLS.AWS,
		category: 'Cloud & DevOps',
		imageUrl: '/files/AWS RDS Primer.pdf',
	},
	{
		title: 'Getting Started with Gateway Load Balancer',
		issuer: 'AWS',
		issuerUrl: ISSUER_URLS.AWS,
		category: 'Cloud & DevOps',
		imageUrl: '/files/Getting Started with Gateway Load Balancer.pdf',
	},
	{
		title: 'Secure & Easy Data Management with AWS DMS',
		issuer: 'AWS',
		issuerUrl: ISSUER_URLS.AWS,
		category: 'Cloud & DevOps',
		imageUrl: '/files/Secure and Easy Data Management with DMS_.pdf',
	},
	{
		title: 'Intermediate Git',
		issuer: 'DataCamp',
		issuerUrl: ISSUER_URLS.DataCamp,
		category: 'Cloud & DevOps',
		imageUrl: '/files/Intermediate Git.pdf',
	},
	{
		title: 'Introduction to Git',
		issuer: 'DataCamp',
		issuerUrl: ISSUER_URLS.DataCamp,
		category: 'Cloud & DevOps',
		imageUrl: '/files/Introduction to Git.pdf',
	},

	// ─── FULL-STACK & LANGUAGES ───
	{
		title: 'Full Stack Web Developer',
		issuer: 'Corizo',
		issuerUrl: ISSUER_URLS.Corizo,
		category: 'Full-Stack & Languages',
		imageUrl: '/files/Full Stack Web Developer_.jpg',
	},
	{
		title: 'Python Programming Certification',
		issuer: 'Python Institute',
		issuerUrl: ISSUER_URLS['Python Institute'],
		category: 'Full-Stack & Languages',
		imageUrl: '/files/Python.png',
	},
	{
		title: 'Introduction to Python',
		issuer: 'Infosys Springboard',
		issuerUrl: ISSUER_URLS['Infosys Springboard'],
		category: 'Full-Stack & Languages',
		imageUrl: '/files/Intro to Python.pdf',
	},
	{
		title: 'Introduction to Java',
		issuer: 'Infosys Springboard',
		issuerUrl: ISSUER_URLS['Infosys Springboard'],
		category: 'Full-Stack & Languages',
		imageUrl: '/files/Introduction to Java.pdf',
	},
	{
		title: 'Java Certified Foundations: Operators & Strings',
		issuer: 'Infosys Springboard',
		issuerUrl: ISSUER_URLS['Infosys Springboard'],
		category: 'Full-Stack & Languages',
		imageUrl: '/files/Java Certified Foundations Associate_ Java Operators.pdf',
	},
	{
		title: 'Graph Theory & Algorithms',
		issuer: 'AlgoUniversity',
		issuerUrl: ISSUER_URLS.AlgoUniversity,
		category: 'Full-Stack & Languages',
		imageUrl: '/files/GraphTheory AlgoUniversity.pdf',
	},

	// ─── WORKSHOPS & HACKATHONS ───
	{
		title: 'Hands-on Robotics Workshop',
		issuer: 'SRIT',
		issuerUrl: ISSUER_URLS.SRIT,
		category: 'Workshops & Hackathons',
		imageUrl: '/files/Robotics Workshop.pdf',
	},
	{
		title: 'Vibe State 2025 Hackathon',
		issuer: 'Vibe State',
		issuerUrl: ISSUER_URLS['Vibe State'],
		category: 'Workshops & Hackathons',
		imageUrl: '/files/Vibe State 25.pdf',
	},
] as const;

/**
 * Finder icon positions for photos root.
 * Layout is designed for 4 tiles; extra images reuse slots.
 */
const GALLERY_POSITIONS = [
	'top-10 left-10',
	'top-10 left-56',
	'top-56 left-10',
	'top-56 left-56',
] as const;

/**
 * Gallery image tiles for the Photos window.
 */
const gallery = GALLERY_IMAGES.map((img, index) => ({
	id: index + 1,
	title: img.title,
	issuer: img.issuer,
	issuerUrl: img.issuerUrl,
	category: img.category,
	img: img.imageUrl,
})) satisfies GalleryItem[];

/** Avatar URL shown in the Contact window. */
const CONTACT_AVATAR_URL = 'https://github.com/vishnu7443.png';

/** Primary email shown in the Contact window. */
const CONTACT_EMAIL = 'visshnu2007@gmail.com';

export {
	blogPosts,
	CONTACT_AVATAR_URL,
	CONTACT_EMAIL,
	dockApps,
	gallery,
	navIcons,
	navLinks,
	safariBookmarks,
	socials,
	techStack,
};

/**
 * Finder root: Work projects and related assets.
 */
const WORK_LOCATION = {
	id: 1,
	type: 'work',
	name: 'Work',
	icon: '/icons/work.svg',
	kind: 'folder',
	scope: 'root',
	children: [
		// ▶ Project 1
		{
			id: 5,
			name: 'AgentGuard',
			icon: '/images/folder.png',
			kind: 'folder',
			scope: 'nested',
			position: 'top-8 left-12',
			windowPosition: 'top-[5.25rem] right-8',
			children: [
				{
					id: 1,
					name: 'AgentGuard Project.txt',
					icon: '/images/txt.png',
					kind: 'file',
					fileType: 'txt',
					position: 'top-5 left-10',
					description: [
						'AI Agent Observability & Compliance Platform built with Python, LangGraph, Claude AI, React.js, MongoDB, and Node.js (2025 – 2026).',
						'Architected a production-grade AI observability platform analogous to Sentry for AI agents, providing real-time tracing, anomaly detection, and policy compliance monitoring.',
						'Engineered a multi-layer guardrail engine capable of intercepting agent actions pre- and post-execution with sub-100ms latency overhead.',
						'Built an interactive glassmorphic React dashboard with live agent trace visualisation, token usage analytics, and alert management.',
						'Designed a RESTful audit log API with MongoDB-backed persistent storage for forensic replay and compliance reporting.',
					],
				},
				{
					id: 2,
					name: 'GitHub Repository.url',
					icon: '/images/safari.png',
					kind: 'file',
					fileType: 'url',
					href: 'https://github.com/vishnu7443',
					position: 'top-10 right-20',
				},
			],
		},

		// ▶ Project 2
		{
			id: 6,
			name: 'MCP Governance Gateway',
			icon: '/images/folder.png',
			kind: 'folder',
			scope: 'nested',
			position: 'top-8 left-72',
			windowPosition: 'top-[17.75rem] right-8',
			children: [
				{
					id: 1,
					name: 'MCP Gateway Project.txt',
					icon: '/images/txt.png',
					kind: 'file',
					fileType: 'txt',
					position: 'top-5 right-10',
					description: [
						'Distributed AI Infrastructure & Security Proxy built with Python 3.12, JSON-RPC 2.0, Server-Sent Events (SSE), SQLite (WAL), Docker, and Render Cloud (2026).',
						'Architected and deployed an enterprise-grade MCP Governance Gateway Proxy that intercepts, inspects, and audits autonomous AI agent tool calls between LLM clients (Claude, Cursor) and backend infrastructure.',
						'Engineered a stateful Hot-Server Connection Pool (MCPServerPool) using asyncio subprocess streams, reducing sequential tool-loop latency from 172.8ms to 0.10ms (901x speedup).',
						'Implemented an intent-aware Payload Distillation Engine (ContextOptimizer) achieving 99.1% token reduction on oversized tool outputs.',
						'Developed a Distributed Circuit Breaker (MCPCircuitBreaker) and Zero-Copy Byte Stream Inspector (1.33 μs/op) with SQLite WAL + SHA256 audit logging.',
					],
				},
				{
					id: 2,
					name: 'GitHub Repository.url',
					icon: '/images/safari.png',
					kind: 'file',
					fileType: 'url',
					href: 'https://github.com/vishnu7443',
					position: 'top-20 left-20',
				},
			],
		},

		// ▶ Project 3
		{
			id: 7,
			name: 'Intelligent Inference Gateway',
			icon: '/images/folder.png',
			kind: 'folder',
			scope: 'nested',
			position: 'top-36 left-12',
			windowPosition: 'top-[30.25rem] right-8',
			children: [
				{
					id: 1,
					name: 'Inference Gateway Project.txt',
					icon: '/images/txt.png',
					kind: 'file',
					fileType: 'txt',
					position: 'top-5 left-10',
					description: [
						'Distributed Systems & AI Infrastructure Tool built with Python, PyTorch, FAISS, Docker, REST API, and Local Machine Learning (2025 – 2026).',
						'Architected and deployed an Intelligent Inference Gateway and Router that dynamically optimizes enterprise LLM traffic across multi-vendor networks (OpenAI, Anthropic, Groq).',
						'Engineered an ultra-low latency (<2ms) Statistical Heuristic Classifier Engine using Shannon Entropy, token density analysis, and regex patterns.',
						'Implemented a Semantic Caching Engine using local PyTorch embeddings (all-MiniLM-L6-v2) and FAISS similarity search to eliminate duplicate API costs.',
						'Developed a Distributed Resiliency Framework with multi-provider fallback chains, singleflight request coalescing, and circuit breakers packaged in Docker.',
					],
				},
				{
					id: 2,
					name: 'Source Code.url',
					icon: '/images/plain.png',
					kind: 'file',
					fileType: 'url',
					href: 'https://github.com/vishnu7443',
					position: 'top-20 left-20',
				},
			],
		},

		// ▶ Project 4
		{
			id: 8,
			name: 'Production-Grade RAG Pipeline',
			icon: '/images/folder.png',
			kind: 'folder',
			scope: 'nested',
			position: 'top-36 left-72',
			windowPosition: 'top-[36.5rem] right-8',
			children: [
				{
					id: 1,
					name: 'RAG Pipeline Project.txt',
					icon: '/images/txt.png',
					kind: 'file',
					fileType: 'txt',
					position: 'top-5 left-10',
					description: [
						'Built with Python, LangChain, Claude AI, Qdrant, FastAPI, and React.js (2025).',
						'Engineered an end-to-end Retrieval-Augmented Generation pipeline with semantic chunking, dense vector retrieval via Qdrant, and cross-encoder reranking (~35% relevance boost).',
						'Integrated hybrid search combining BM25 sparse retrieval with dense embeddings across keyword-specific and ambiguous queries.',
						'Exposed via a FastAPI microservice with streaming responses and built a React chat interface with source citations and confidence scores.',
					],
				},
				{
					id: 5,
					name: 'Source Code.url',
					icon: '/images/plain.png',
					kind: 'file',
					fileType: 'url',
					href: 'https://github.com/vishnu7443',
					position: 'top-60 left-5',
				},
			],
		},

		// ▶ Project 5
		{
			id: 9,
			name: 'Innovation Marketplace',
			icon: '/images/folder.png',
			kind: 'folder',
			scope: 'nested',
			position: 'top-64 left-12',
			windowPosition: 'top-[11.5rem] right-8',
			children: [
				{
					id: 1,
					name: 'Innovation Marketplace.txt',
					icon: '/images/txt.png',
					kind: 'file',
					fileType: 'txt',
					position: 'top-5 left-10',
					description: [
						'Project Development & Innovation Marketplace built with React.js, FastAPI, PostgreSQL, Docker, AWS, Cloudinary, and Razorpay (2026).',
						'Architected a scalable multi-tenant SaaS platform connecting students, developers, startups, mentors, and businesses for software solutions, research, and internships.',
						'Developed a production-ready authentication and RBAC framework with JWT, refresh tokens, and role-based authorization.',
						'Engineered a digital marketplace ecosystem with project publishing, verification workflows, Razorpay payment integration, and vendor analytics.',
						'Designed a modular learning and innovation management system deployed with Docker and AWS.',
					],
				},
				{
					id: 2,
					name: 'Source Code.url',
					icon: '/images/plain.png',
					kind: 'file',
					fileType: 'url',
					href: 'https://github.com/vishnu7443',
					position: 'top-20 left-20',
				},
			],
		},

		// ▶ Project 6
		{
			id: 10,
			name: 'FraudGraph Shield',
			icon: '/images/folder.png',
			kind: 'folder',
			scope: 'nested',
			position: 'top-64 left-72',
			windowPosition: 'top-[24rem] right-8',
			children: [
				{
					id: 1,
					name: 'FraudGraph Shield Project.txt',
					icon: '/images/txt.png',
					kind: 'file',
					fileType: 'txt',
					position: 'top-5 left-10',
					description: [
						'Graph-Based Financial Fraud Detection System using Python, Neo4j, LangGraph, Scikit-learn, FastAPI, and React.js (2026).',
						'Designing a graph-native fraud detection engine leveraging Neo4j to model transaction networks and surface ring-fraud clusters.',
						'Architecting a LangGraph-powered agentic reasoning layer that autonomously investigates flagged subgraphs and generates structured reports.',
						'Implementing a real-time transaction scoring API using FastAPI with sub-200ms inference latency targets and an interactive React investigation dashboard.',
					],
				},
				{
					id: 2,
					name: 'Source Code.url',
					icon: '/images/plain.png',
					kind: 'file',
					fileType: 'url',
					href: 'https://github.com/vishnu7443',
					position: 'top-20 left-20',
				},
			],
		},
	],
} as const satisfies FinderLocation;

/**
 * Finder root: About me content.
 */
const ABOUT_LOCATION = {
	id: 2,
	type: 'about',
	name: 'About me',
	icon: '/icons/info.svg',
	kind: 'folder',
	scope: 'root',
	children: [
		{
			id: 1,
			name: 'about-me.txt',
			icon: '/images/txt.png',
			kind: 'file',
			fileType: 'txt',
			position: 'top-10 left-10',
			subtitle: 'AI-Focused Full-Stack Developer • AI Infrastructure Engineer',
			image: 'https://github.com/vishnu7443.png',
			description: [
				"I'm Vishnu Vardhan R G, an AI-focused Full-Stack Developer with hands-on experience building production-grade AI systems, agentic workflows, and scalable web applications.",
				'Experienced in developing RAG pipelines, AI observability platforms, MCP governance proxies, inference gateways, and full-stack SaaS products using React, Node.js, FastAPI, and modern LLM frameworks.',
				'Certified across 46 industry programs including Agentic AI (Hugging Face), Anthropic Claude, OpenAI, AWS, Microsoft Azure AI, and Google Cloud.',
				'Passionate about building reliable AI infrastructure and scalable backend systems where AI engineering and full-stack development intersect.',
			],
		},
		{
			id: 2,
			name: 'education.txt',
			icon: '/images/txt.png',
			kind: 'file',
			fileType: 'txt',
			position: 'top-10 left-52',
			subtitle: 'B.E CSE • SRIT Branch Topper (9.3 CGPA)',
			description: [
				'Sri Ramakrishna Institute of Technology (SRIT), Coimbatore, Tamil Nadu (2024 – 2028).',
				'B.E in Computer Science and Engineering with a 9.3 / 10.0 CGPA.',
				'CSE Branch Topper: Consistently ranked #1 across the entire department cohort.',
				'Ponnaiyah Ramajayam Public School (2023 – 2024) — Higher Secondary Certificate (XII Std) with 89%.',
			],
		},
		{
			id: 3,
			name: 'experience.txt',
			icon: '/images/txt.png',
			kind: 'file',
			fileType: 'txt',
			position: 'top-52 left-10',
			subtitle: 'Internships • Industry Experience',
			description: [
				'Data Analytics Intern — TechnoCovai (May 15 – 30, 2026, Coimbatore): Analysed structured business datasets using Python (Pandas, NumPy) and built interactive dashboards, improving data quality by ~40%.',
				'Frontend Developer Intern — Corizo (2025, Remote): Engineered 8 responsive React.js pages and 3 reusable component libraries, optimizing critical rendering paths for 20+ Lighthouse score improvements.',
			],
		},
		{
			id: 4,
			name: 'highlights.txt',
			icon: '/images/txt.png',
			kind: 'file',
			fileType: 'txt',
			position: 'top-52 left-52',
			subtitle: 'Leadership • Hackathons • Competitive Programming',
			description: [
				'Chairperson, Computer Society of India (CSI) Student Chapter at SRIT, leading technical events and peer learning initiatives.',
				'Shipped 4 AI/full-stack projects end-to-end spanning ML, agentic AI, and production React development.',
				'Competed at MUJ HackX 3.0, Manipal University Jaipur — one of India’s top student hackathons.',
				'Active competitive programmer on LeetCode and HackerRank across data structures and algorithms.',
			],
		},
	],
} as const satisfies FinderLocation;

/**
 * Finder root: Resume files (pdf or external links).
 */
const RESUME_LOCATION = {
	id: 3,
	type: 'resume',
	name: 'Resume',
	icon: '/icons/file.svg',
	kind: 'folder',
	scope: 'root',
	children: [
		{
			id: 1,
			name: 'Vishnu_Vardhan_Resume.pdf',
			icon: '/images/pdf.png',
			kind: 'file',
			fileType: 'pdf',
			href: '/files/resume.pdf',
		},
	],
} as const satisfies FinderLocation;

/**
 * Finder root: Photos gallery files (populated with all 46 certificates).
 */
const PHOTOS_LOCATION = {
	id: 4,
	type: 'photos',
	name: 'Certifications',
	icon: '/icons/file.svg',
	kind: 'folder',
	scope: 'root',
	children: GALLERY_IMAGES.map((certificate, index) => ({
		id: index + 1,
		name: certificate.title,
		subtitle: certificate.issuer,
		issuerUrl: certificate.issuerUrl,
		category: certificate.category,
		icon: certificate.imageUrl.endsWith('.pdf')
			? '/images/pdf.png'
			: '/images/image.png',
		kind: 'file',
		fileType: 'img',
		position: GALLERY_POSITIONS[index % GALLERY_POSITIONS.length],
		imageUrl: certificate.imageUrl,
	})),
} as const satisfies FinderLocation;

/**
 * Finder root: Trash items (non-openable by default).
 */
const TRASH_LOCATION = {
	id: 5,
	type: 'trash',
	name: 'Trash',
	icon: '/icons/trash.svg',
	kind: 'folder',
	scope: 'root',
	children: [
		{
			id: 1,
			name: 'trash1.png',
			icon: '/images/image.png',
			kind: 'file',
			fileType: 'img',
			position: 'top-10 left-10',
			imageUrl: '/images/trash-1.png',
		},
		{
			id: 2,
			name: 'trash2.png',
			icon: '/images/image.png',
			kind: 'file',
			fileType: 'img',
			position: 'top-40 left-80',
			imageUrl: '/images/trash-2.png',
		},
	],
} as const satisfies FinderLocation;

/**
 * Finder root map by location key.
 */
export const locations = {
	work: WORK_LOCATION,
	about: ABOUT_LOCATION,
	resume: RESUME_LOCATION,
	photos: PHOTOS_LOCATION,
	trash: TRASH_LOCATION,
} as const satisfies LocationsMap;

interface HomeItemRef {
	location: LocationType;
	// Path of node IDs from the location root to the item to render on Home.
	path: number[];
}

const homeItemRefs = [
	{ location: 'work', path: [5] }, // AgentGuard
	{ location: 'work', path: [6] }, // MCP Governance Gateway
	{ location: 'work', path: [7] }, // Intelligent Inference Gateway
	{ location: 'work', path: [8] }, // Production-Grade RAG Pipeline
	{ location: 'work', path: [9] }, // Innovation Marketplace
	{ location: 'work', path: [10] }, // FraudGraph Shield
] satisfies HomeItemRef[];

const resolveHomeItem = ({
	location,
	path,
}: HomeItemRef): FinderNode | null => {
	let current: FinderNode = locations[location];

	for (const nodeId of path) {
		if (current.kind !== 'folder') return null;
		const next: FinderNode | undefined = current.children.find(
			(child: FinderNode) => child.id === nodeId,
		);
		if (!next) return null;
		current = next;
	}

	return current;
};

/** Curated Finder nodes rendered as desktop shortcuts on Home. */
export const homeItems = homeItemRefs
	.map((ref, index) => {
		const item = resolveHomeItem(ref);
		if (!item) {
			console.warn('Invalid home item reference', { index, ref });
		}
		return item;
	})
	.filter((item): item is FinderNode => item !== null);

/**
 * Baseline z-index for unfocused windows.
 */
const INITIAL_Z_INDEX = 1000;

/**
 * Initial window state for all supported window ids.
 */
const WINDOW_CONFIG: WindowConfig = {
	finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
