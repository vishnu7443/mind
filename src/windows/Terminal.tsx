import { WindowControls } from '#components';
import { techStack } from '#constants';
import { WindowWrapper } from '#hoc';
import { Check, Flag, Terminal as TerminalIcon } from 'lucide-react';
import type { ReactElement } from 'react';

/**
 * Desktop terminal window that renders the categorized tech stack summary.
 *
 * @returns {ReactElement} Terminal-like tech stack view for desktop.
 */
const Terminal = (): ReactElement => {
	const loadedCount = techStack.length;
	const totalSkills = techStack.reduce(
		(count, category) => count + category.items.length,
		0,
	);

	return (
		<>
			<div className="window-header">
				<WindowControls target="terminal" />
				<h2>Tech Stack</h2>
				<div className="flex items-center justify-end gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
					<TerminalIcon className="size-3.5" aria-hidden="true" />
					<span className="font-roboto whitespace-nowrap">
						zsh — skills.sh
					</span>
				</div>
			</div>
			<div className="techstack">
				<div className="prompt-bar">
					<p className="flex flex-wrap items-center gap-1.5">
						<span className="font-semibold text-[#00A154] dark:text-emerald-400">
							vishnu@macbook
						</span>
						<span className="text-gray-400 dark:text-gray-500">
							~/portfolio
						</span>
						<span className="font-semibold text-blue-600 dark:text-blue-400">
							%
						</span>
						<span className="text-gray-800 dark:text-gray-100">
							show tech-stack --all
						</span>
					</p>
					<span className="skill-count-pill">
						{totalSkills} skills
					</span>
				</div>

				<div className="label">
					<p className="w-48 shrink-0">Category</p>
					<p>Technologies</p>
				</div>

				<ul className="content">
					{techStack.map(({ category, items }) => (
						<li key={category} className="stack-row">
							<div className="stack-category">
								<Check
									className="check"
									size={16}
									aria-hidden="true"
								/>
								<h3>{category}</h3>
							</div>
							<ul className="stack-items">
								{items.map((item, i) => (
									<li
										key={`${category}-${String(i)}-${item}`}
										className="skill-pill"
									>
										{item}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>

				<div className="footnote">
					<p>
						<Check size={16} aria-hidden="true" />
						<span>
							{loadedCount} of {techStack.length} stacks loaded
							successfully (100%)
						</span>
					</p>

					<p className="text-neutral-700 dark:text-neutral-300">
						<Flag size={14} aria-hidden="true" />
						<span>Render time: 9ms</span>
					</p>
				</div>
			</div>
		</>
	);
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;
