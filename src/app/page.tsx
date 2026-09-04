import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="bg-linear-to-br from-black via-slate-950 to-indigo-950">
			<div className="w-screen h-screen flex flex-col items-center justify-center relative">
				<div className="absolute glow-orb"></div>

				<div className="relative z-10 text-center px-4">
					<h1 className="brand-name text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.25em] sm:tracking-[0.3em] mb-6 sm:mb-8">
						M3H3D1 HA2AN
					</h1>

					<div className="subtitle h-px w-32 sm:w-48 bg-linear-to-r from-transparent via-indigo-400 to-transparent mx-auto mb-6"></div>

					<p className="subtitle text-indigo-300 text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase font-light">
						Launching Soon
					</p>
				</div>
			</div>
		</div>
	);
}
