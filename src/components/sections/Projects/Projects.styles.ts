export const projectsSectionStyles = `
relative
isolate
!w-full
!max-w-none
overflow-hidden
!bg-transparent
!p-0
!py-14
!shadow-none
sm:!py-[4.5rem]
lg:!py-[5.5rem]
`;

export const projectsShellStyles = `
relative
overflow-hidden
rounded-[2rem]
border
border-pink-200
bg-[radial-gradient(circle_at_10%_18%,rgba(244,114,182,0.1),transparent_18%),radial-gradient(circle_at_92%_30%,rgba(244,114,182,0.14),transparent_18%),linear-gradient(135deg,#fff8fb_0%,#ffffff_48%,#fff3f8_100%)]
px-5
py-11
shadow-[0_24px_70px_rgba(244,114,182,0.13),0_1px_0_rgba(255,255,255,0.8)_inset]
sm:px-8
lg:px-12
xl:px-16
lg:py-14
[html[data-theme='dark']_&]:border-blue-500/45
[html[data-theme='dark']_&]:bg-[radial-gradient(circle_at_10%_18%,rgba(37,99,235,0.12),transparent_18%),radial-gradient(circle_at_92%_30%,rgba(37,99,235,0.16),transparent_18%),linear-gradient(135deg,#020817_0%,#071226_52%,#020817_100%)]
[html[data-theme='dark']_&]:shadow-[0_24px_76px_rgba(37,99,235,0.12),0_1px_0_rgba(96,165,250,0.18)_inset]
`;

export const projectsDecorLayerStyles = `
pointer-events-none
absolute
inset-0
overflow-hidden
`;

export const projectsHeaderStyles = `
relative
z-10
mx-auto
flex
max-w-[48rem]
flex-col
items-center
text-center
`;

export const projectsLabelStyles = `
mb-5
inline-flex
items-center
gap-3
text-sm
font-bold
uppercase
tracking-[0.14em]
text-pink-500
[html[data-theme='dark']_&]:text-blue-400
`;

export const projectsLabelDotStyles = `
h-3
w-3
rounded-full
bg-pink-500
[html[data-theme='dark']_&]:bg-blue-500
`;

export const projectsHeadingStyles = `
text-[clamp(2.35rem,4vw,4rem)]
font-black
leading-[1.12]
tracking-normal
text-slate-950
[html[data-theme='dark']_&]:text-white
`;

export const projectsHeadingAccentStyles = `
bg-gradient-to-r
from-pink-500
to-pink-600
bg-clip-text
text-transparent
[html[data-theme='dark']_&]:from-blue-400
[html[data-theme='dark']_&]:to-blue-600
`;

export const projectsAccentRuleStyles = `
mt-5
h-[3px]
w-28
rounded-full
bg-gradient-to-r
from-transparent
via-pink-300
to-transparent
[html[data-theme='dark']_&]:via-blue-500
`;

export const projectsDescriptionStyles = `
mt-6
max-w-[42rem]
text-lg
leading-8
text-slate-600
[html[data-theme='dark']_&]:text-slate-200
`;

export const projectsGridStyles = `
relative
z-10
mt-11
grid
grid-cols-1
gap-6
md:grid-cols-2
xl:grid-cols-3
`;

export const projectCardStyles = `
min-h-56
rounded-2xl
border-pink-200
bg-white/76
p-5
sm:p-6
shadow-[0_16px_32px_rgba(244,114,182,0.09),0_1px_0_rgba(255,255,255,0.86)_inset]
backdrop-blur-xl
transition
duration-300
ease-out
hover:-translate-y-1
hover:border-pink-300
hover:bg-white/86
hover:shadow-[0_24px_46px_rgba(244,114,182,0.16),0_1px_0_rgba(255,255,255,0.9)_inset]
focus-within:border-pink-400
focus-within:shadow-[0_0_0_3px_rgba(236,72,153,0.16),0_22px_42px_rgba(244,114,182,0.14)]
motion-reduce:transition-none
motion-reduce:hover:translate-y-0
[html[data-theme='dark']_&]:border-blue-500/45
[html[data-theme='dark']_&]:bg-blue-950/38
[html[data-theme='dark']_&]:shadow-[0_16px_34px_rgba(0,0,0,0.16),0_1px_0_rgba(96,165,250,0.16)_inset]
[html[data-theme='dark']_&]:hover:border-blue-400/70
[html[data-theme='dark']_&]:hover:bg-blue-950/48
[html[data-theme='dark']_&]:hover:shadow-[0_24px_50px_rgba(37,99,235,0.16),0_1px_0_rgba(96,165,250,0.2)_inset]
[html[data-theme='dark']_&]:focus-within:border-blue-400
[html[data-theme='dark']_&]:focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.18),0_22px_42px_rgba(0,0,0,0.18)]
`;

export const projectFeaturedCardStyles = `
border-pink-400
bg-white/88
shadow-[0_22px_48px_rgba(244,114,182,0.18),0_0_0_1px_rgba(236,72,153,0.14)_inset,0_1px_0_rgba(255,255,255,0.9)_inset]
[html[data-theme='dark']_&]:border-blue-400/80
[html[data-theme='dark']_&]:bg-blue-950/52
[html[data-theme='dark']_&]:shadow-[0_22px_52px_rgba(37,99,235,0.18),0_0_0_1px_rgba(96,165,250,0.18)_inset,0_1px_0_rgba(96,165,250,0.2)_inset]
`;

export const projectCardMediaStyles = `
mb-5
h-32
overflow-hidden
rounded-xl
border
border-pink-100
bg-gradient-to-br
from-pink-50
to-white
[html[data-theme='dark']_&]:border-blue-500/35
[html[data-theme='dark']_&]:from-blue-950/55
[html[data-theme='dark']_&]:to-slate-950/30
`;

export const projectFeaturedMediaStyles = `
border-pink-300
from-pink-100
to-white
[html[data-theme='dark']_&]:border-blue-400/60
[html[data-theme='dark']_&]:from-blue-900/60
[html[data-theme='dark']_&]:to-slate-950/40
`;

export const projectImageStyles = `
h-full
w-full
object-cover
`;

export const projectTitleStyles = `
text-xl
font-bold
leading-7
text-slate-950
[html[data-theme='dark']_&]:text-white
`;

export const projectDescriptionStyles = `
mt-3
text-base
leading-7
text-slate-600
[html[data-theme='dark']_&]:text-slate-300
`;

export const projectTechnologyListStyles = `
mt-5
flex
flex-wrap
gap-2.5
`;

export const projectTechnologyBadgeStyles = `
border
border-pink-200
bg-pink-50
px-3
py-1.5
text-xs
font-semibold
text-pink-600
[html[data-theme='dark']_&]:border-blue-500/45
[html[data-theme='dark']_&]:bg-blue-500/12
[html[data-theme='dark']_&]:text-blue-300
`;

export const projectActionsStyles = `
mt-6
grid
grid-cols-1
gap-3
sm:grid-cols-2
`;

export const projectGithubButtonStyles = `
w-full
rounded-lg
border
border-pink-500
bg-white/60
text-pink-600
transition
duration-200
ease-out
hover:-translate-y-0.5
hover:border-pink-600
hover:bg-pink-50
hover:opacity-100
hover:shadow-[0_12px_24px_rgba(244,114,182,0.12)]
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-pink-400
focus-visible:ring-offset-2
focus-visible:ring-offset-white
disabled:border-pink-200
disabled:bg-pink-50/60
disabled:text-pink-300
disabled:hover:translate-y-0
disabled:hover:shadow-none
motion-reduce:transition-none
motion-reduce:hover:translate-y-0
[html[data-theme='dark']_&]:border-blue-500
[html[data-theme='dark']_&]:bg-transparent
[html[data-theme='dark']_&]:text-blue-300
[html[data-theme='dark']_&]:hover:border-blue-400
[html[data-theme='dark']_&]:hover:bg-blue-500/12
[html[data-theme='dark']_&]:hover:shadow-[0_12px_24px_rgba(37,99,235,0.14)]
[html[data-theme='dark']_&]:focus-visible:ring-blue-400
[html[data-theme='dark']_&]:focus-visible:ring-offset-slate-950
[html[data-theme='dark']_&]:disabled:border-blue-500/25
[html[data-theme='dark']_&]:disabled:bg-blue-950/20
[html[data-theme='dark']_&]:disabled:text-blue-500/45
`;

export const projectDemoButtonStyles = `
w-full
rounded-lg
bg-pink-500
text-white
transition
duration-200
ease-out
hover:-translate-y-0.5
hover:bg-pink-600
hover:opacity-100
hover:shadow-[0_12px_24px_rgba(236,72,153,0.22)]
focus-visible:outline-none
focus-visible:ring-pink-400
focus-visible:ring-offset-2
focus-visible:ring-offset-white
disabled:bg-pink-200
disabled:text-white/80
disabled:hover:translate-y-0
disabled:hover:shadow-none
motion-reduce:transition-none
motion-reduce:hover:translate-y-0
[html[data-theme='dark']_&]:bg-blue-500
[html[data-theme='dark']_&]:text-white
[html[data-theme='dark']_&]:hover:bg-blue-600
[html[data-theme='dark']_&]:hover:shadow-[0_12px_24px_rgba(37,99,235,0.24)]
[html[data-theme='dark']_&]:focus-visible:ring-blue-400
[html[data-theme='dark']_&]:focus-visible:ring-offset-slate-950
[html[data-theme='dark']_&]:disabled:bg-blue-500/25
[html[data-theme='dark']_&]:disabled:text-blue-100/50
`;
