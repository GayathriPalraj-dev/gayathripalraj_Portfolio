export const experienceSectionStyles = `
relative
isolate
!w-full
!max-w-none
overflow-hidden
!bg-transparent
!p-0
!py-16
!shadow-none
sm:!py-20
lg:!py-24
`;

export const experienceShellStyles = `
relative
overflow-hidden
rounded-[2rem]
border
border-pink-200
bg-[radial-gradient(circle_at_8%_18%,rgba(244,114,182,0.1),transparent_18%),radial-gradient(circle_at_96%_16%,rgba(244,114,182,0.16),transparent_16%),linear-gradient(135deg,#fff8fb_0%,#ffffff_48%,#fff3f8_100%)]
px-5
py-10
shadow-[0_24px_70px_rgba(244,114,182,0.13),0_1px_0_rgba(255,255,255,0.8)_inset]
sm:px-8
lg:px-16
lg:py-16
[html[data-theme='dark']_&]:border-blue-500/45
[html[data-theme='dark']_&]:bg-[radial-gradient(circle_at_8%_18%,rgba(37,99,235,0.12),transparent_18%),radial-gradient(circle_at_96%_16%,rgba(37,99,235,0.16),transparent_16%),linear-gradient(135deg,#020817_0%,#071226_52%,#020817_100%)]
[html[data-theme='dark']_&]:shadow-[0_24px_76px_rgba(37,99,235,0.12),0_1px_0_rgba(96,165,250,0.18)_inset]
`;

export const experienceDecorLayerStyles = `
pointer-events-none
absolute
inset-0
overflow-hidden
`;

export const experienceHeaderStyles = `
relative
z-10
mx-auto
flex
max-w-[54rem]
flex-col
items-center
text-center
`;

export const experienceLabelStyles = `
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

export const experienceLabelDotStyles = `
h-3
w-3
rounded-full
bg-pink-500
[html[data-theme='dark']_&]:bg-blue-500
`;

export const experienceHeadingStyles = `
text-[clamp(2.35rem,4vw,4rem)]
font-black
leading-[1.12]
tracking-normal
text-slate-950
[html[data-theme='dark']_&]:text-white
`;

export const experienceHeadingAccentStyles = `
bg-gradient-to-r
from-pink-500
to-pink-600
bg-clip-text
text-transparent
[html[data-theme='dark']_&]:from-blue-400
[html[data-theme='dark']_&]:to-blue-600
`;

export const experienceAccentRuleStyles = `
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

export const experienceDescriptionStyles = `
mt-6
max-w-[46rem]
text-lg
leading-8
text-slate-600
[html[data-theme='dark']_&]:text-slate-200
`;

export const experienceContentGridStyles = `
relative
z-10
mt-12
grid
grid-cols-1
gap-6
xl:grid-cols-[1fr_0.55fr]
xl:items-start
`;

export const experienceTimelineStyles = `
relative
grid
gap-6
pl-0
sm:pl-8
`;

export const experienceTimelineLineStyles = `
absolute
bottom-5
left-3
top-5
hidden
w-px
bg-gradient-to-b
from-pink-300
via-pink-200
to-transparent
sm:block
[html[data-theme='dark']_&]:from-blue-500
[html[data-theme='dark']_&]:via-blue-500/40
`;

export const experienceTimelineItemStyles = `
relative
`;

export const experienceTimelineMarkerStyles = `
absolute
left-[-1.6rem]
top-8
hidden
h-3.5
w-3.5
rounded-full
border
border-white
bg-pink-500
shadow-[0_0_0_5px_rgba(244,114,182,0.16)]
sm:block
[html[data-theme='dark']_&]:border-slate-950
[html[data-theme='dark']_&]:bg-blue-500
[html[data-theme='dark']_&]:shadow-[0_0_0_5px_rgba(59,130,246,0.18)]
`;

export const experienceCardStyles = `
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

export const experienceCardHeaderStyles = `
flex
flex-col
gap-4
lg:flex-row
lg:items-start
lg:justify-between
`;

export const experienceTypeStyles = `
inline-flex
w-fit
items-center
rounded-full
border
border-pink-200
bg-pink-50
px-3
py-1.5
text-xs
font-bold
uppercase
tracking-[0.12em]
text-pink-600
[html[data-theme='dark']_&]:border-blue-500/45
[html[data-theme='dark']_&]:bg-blue-500/12
[html[data-theme='dark']_&]:text-blue-300
`;

export const experienceRoleStyles = `
mt-4
text-2xl
font-black
leading-tight
text-slate-950
[html[data-theme='dark']_&]:text-white
`;

export const experienceCompanyStyles = `
mt-2
text-base
font-bold
leading-6
text-pink-500
[html[data-theme='dark']_&]:text-blue-400
`;

export const experienceMetaStyles = `
grid
gap-2
text-sm
font-semibold
leading-6
text-slate-500
lg:min-w-44
lg:text-right
[html[data-theme='dark']_&]:text-slate-300
`;

export const experienceBodyStyles = `
mt-5
text-base
leading-8
text-slate-600
[html[data-theme='dark']_&]:text-slate-300
`;

export const experienceBadgeListStyles = `
mt-5
flex
flex-wrap
gap-2.5
`;

export const experienceBadgeStyles = `
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

export const educationCardStyles = `
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

export const educationLabelStyles = `
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

export const educationDegreeStyles = `
mt-5
text-2xl
font-black
leading-tight
text-slate-950
[html[data-theme='dark']_&]:text-white
`;

export const educationSpecializationStyles = `
mt-2
text-base
font-bold
leading-6
text-pink-500
[html[data-theme='dark']_&]:text-blue-400
`;

export const educationMetaListStyles = `
mt-5
grid
gap-3
text-sm
font-semibold
leading-6
text-slate-600
[html[data-theme='dark']_&]:text-slate-300
`;

export const educationScoreStyles = `
mt-5
inline-flex
rounded-full
border
border-pink-200
bg-pink-50
px-4
py-2
text-sm
font-bold
text-pink-600
[html[data-theme='dark']_&]:border-blue-500/45
[html[data-theme='dark']_&]:bg-blue-500/12
[html[data-theme='dark']_&]:text-blue-300
`;
