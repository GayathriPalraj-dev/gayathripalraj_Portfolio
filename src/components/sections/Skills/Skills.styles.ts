export const skillsSectionStyles = `
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

export const skillsShellStyles = `
relative
overflow-hidden
rounded-[2rem]
border
border-pink-200
bg-[radial-gradient(circle_at_10%_16%,rgba(244,114,182,0.1),transparent_18%),radial-gradient(circle_at_92%_22%,rgba(244,114,182,0.14),transparent_18%),linear-gradient(135deg,#fff8fb_0%,#ffffff_48%,#fff3f8_100%)]
px-5
py-11
shadow-[0_24px_70px_rgba(244,114,182,0.13),0_1px_0_rgba(255,255,255,0.8)_inset]
sm:px-8
lg:px-12
xl:px-16
lg:py-14
[html[data-theme='dark']_&]:border-blue-500/45
[html[data-theme='dark']_&]:bg-[radial-gradient(circle_at_10%_16%,rgba(37,99,235,0.12),transparent_18%),radial-gradient(circle_at_92%_22%,rgba(37,99,235,0.16),transparent_18%),linear-gradient(135deg,#020817_0%,#071226_52%,#020817_100%)]
[html[data-theme='dark']_&]:shadow-[0_24px_76px_rgba(37,99,235,0.12),0_1px_0_rgba(96,165,250,0.18)_inset]
`;

export const skillsDecorLayerStyles = `
pointer-events-none
absolute
inset-0
overflow-hidden
`;

export const skillsHeaderStyles = `
relative
z-10
mx-auto
flex
max-w-[54rem]
flex-col
items-center
text-center
`;

export const skillsLabelStyles = `
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

export const skillsLabelDotStyles = `
h-3
w-3
rounded-full
bg-pink-500
[html[data-theme='dark']_&]:bg-blue-500
`;

export const skillsHeadingStyles = `
text-[clamp(2.35rem,4vw,4rem)]
font-black
leading-[1.12]
tracking-normal
text-slate-950
[html[data-theme='dark']_&]:text-white
`;

export const skillsHeadingAccentStyles = `
bg-gradient-to-r
from-pink-500
to-pink-600
bg-clip-text
text-transparent
[html[data-theme='dark']_&]:from-blue-400
[html[data-theme='dark']_&]:to-blue-600
`;

export const skillsAccentRuleStyles = `
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

export const skillsDescriptionStyles = `
mt-6
max-w-[46rem]
text-lg
leading-8
text-slate-600
[html[data-theme='dark']_&]:text-slate-200
`;

export const skillsGridStyles = `
relative
z-10
mt-11
grid
grid-cols-1
gap-6
md:grid-cols-2
xl:grid-cols-3
`;

export const skillCardStyles = `
flex
min-h-72
flex-col
rounded-2xl
border-pink-200
bg-white/76
p-6
shadow-[0_16px_32px_rgba(244,114,182,0.09),0_1px_0_rgba(255,255,255,0.86)_inset]
backdrop-blur-xl
transition
duration-300
ease-out
hover:-translate-y-1
hover:border-pink-300
hover:bg-white/86
hover:shadow-[0_24px_46px_rgba(244,114,182,0.16),0_1px_0_rgba(255,255,255,0.9)_inset]
focus-visible:outline
focus-visible:outline-2
focus-visible:outline-offset-4
focus-visible:outline-pink-400
motion-reduce:transition-none
motion-reduce:hover:translate-y-0
[html[data-theme='dark']_&]:border-blue-500/45
[html[data-theme='dark']_&]:bg-blue-950/38
[html[data-theme='dark']_&]:shadow-[0_16px_34px_rgba(0,0,0,0.16),0_1px_0_rgba(96,165,250,0.16)_inset]
[html[data-theme='dark']_&]:hover:border-blue-400/70
[html[data-theme='dark']_&]:hover:bg-blue-950/48
[html[data-theme='dark']_&]:hover:shadow-[0_24px_50px_rgba(37,99,235,0.16),0_1px_0_rgba(96,165,250,0.2)_inset]
[html[data-theme='dark']_&]:focus-visible:outline-blue-400
`;

export const skillCardHeaderStyles = `
flex
items-center
gap-4
`;

export const skillIconWrapStyles = `
flex
h-12
w-12
shrink-0
items-center
justify-center
rounded-xl
border
border-pink-200
bg-pink-50
text-pink-500
shadow-[0_10px_22px_rgba(244,114,182,0.1)]
[html[data-theme='dark']_&]:border-blue-500/45
[html[data-theme='dark']_&]:bg-blue-500/12
[html[data-theme='dark']_&]:text-blue-300
[html[data-theme='dark']_&]:shadow-[0_10px_22px_rgba(37,99,235,0.12)]
`;

export const skillTitleStyles = `
text-xl
font-black
leading-7
text-slate-950
[html[data-theme='dark']_&]:text-white
`;

export const skillBadgeListStyles = `
mt-6
flex
flex-wrap
gap-2.5
`;

export const skillBadgeStyles = `
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
