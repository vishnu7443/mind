import { MobileWindowHeader } from '#components/mobile/WindowHeader';
import { techStack } from '#constants';
import { MobileWindowWrapper } from '#hoc';
import { Check, ChevronRight, Flag } from 'lucide-react';
import type { ReactElement } from 'react';

/**
 * Mobile terminal window that presents the tech stack in a compact pill layout.
 *
 * @returns {ReactElement} Mobile terminal content.
 */
const MobileTerminal = (): ReactElement => {
	return (
		<>
			<MobileWindowHeader windowKey="terminal" title="Tech Stack" />
			<div className="techstack">
				<p className="mb-4 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs dark:border-white/10 dark:bg-white/[0.04]">
					<span className="font-semibold text-[#00A154] dark:text-emerald-400">
						vishnu@macbook
					</span>{' '}
					<span className="text-blue-600 dark:text-blue-400">%</span>{' '}
					show tech-stack --all
				</p>
				<ul className="content">
					{techStack.map(({ category, items }) => (
						<li key={category} className="flex flex-col gap-2">
							<div className="flex flex-row items-center">
								<ChevronRight className="check" size={18} />
								<h3>{category}</h3>
							</div>
							<ul>
								{items.map((item, index) => (
									<li
										key={`${category}-${String(index)}-${item}`}
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
						<Check size={16} /> {techStack.length} of{' '}
						{techStack.length} stacks loaded successfully (100%)
					</p>
					<p className="text-neutral-700 dark:text-neutral-300">
						<Flag size={14} className="text-inherit" /> Render time:
						9ms
					</p>
				</div>
			</div>
		</>
	);
};

/**
 * Public mobile terminal window export used by the window registry.
 *
 * @returns {ReactElement} Mobile terminal window wrapper component.
 */
const MobileTerminalWindow = MobileWindowWrapper(MobileTerminal, 'terminal');
export default MobileTerminalWindow;
