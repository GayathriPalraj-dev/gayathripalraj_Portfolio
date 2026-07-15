export const aboutSectionStyles = `
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

export const aboutShellStyles = `
relative
overflow-hidden
rounded-[2rem]
border
border-pink-200
bg-[radial-gradient(circle_at_4%_24%,rgba(244,114,182,0.11),transparent_18%),radial-gradient(circle_at_98%_8%,rgba(244,114,182,0.16),transparent_16%),linear-gradient(135deg,#fff8fb_0%,#ffffff_48%,#fff3f8_100%)]
px-5
py-11
shadow-[0_24px_70px_rgba(244,114,182,0.13),0_1px_0_rgba(255,255,255,0.8)_inset]
sm:px-8
lg:px-12
xl:px-16
lg:py-14
[html[data-theme='dark']_&]:border-blue-500/45
[html[data-theme='dark']_&]:bg-[radial-gradient(circle_at_4%_24%,rgba(37,99,235,0.12),transparent_18%),radial-gradient(circle_at_98%_8%,rgba(37,99,235,0.16),transparent_16%),linear-gradient(135deg,#020817_0%,#071226_52%,#020817_100%)]
[html[data-theme='dark']_&]:shadow-[0_24px_76px_rgba(37,99,235,0.12),0_1px_0_rgba(96,165,250,0.18)_inset]
`;

export const aboutDecorLayerStyles = `
pointer-events-none
absolute
inset-0
overflow-hidden
`;

export const aboutGridStyles = `
relative
z-10
grid
items-center
gap-12
lg:grid-cols-[0.95fr_1.05fr]
lg:gap-16
`;

export const aboutImageColumnStyles = `
relative
mx-auto
flex
w-full
max-w-[35rem]
items-center
justify-center
lg:max-w-none
`;

export const aboutImageBackdropStyles = `
absolute
inset-x-4
bottom-0
top-10
rounded-[48%]
bg-pink-200/62
[html[data-theme='dark']_&]:bg-blue-950/70
`;

export const aboutImageRingStyles = `
absolute
inset-x-0
bottom-6
top-0
rounded-[50%]
border
border-pink-200
[html[data-theme='dark']_&]:border-blue-500/45
`;

export const aboutProfileImageStyles = `
relative
z-10
w-full
max-w-[34rem]
select-none
object-contain
object-bottom
drop-shadow-[0_28px_34px_rgba(15,23,42,0.16)]
transition
duration-500
ease-out
hover:scale-[1.015]
hover:drop-shadow-[0_34px_42px_rgba(15,23,42,0.18)]
motion-reduce:transition-none
motion-reduce:hover:scale-100
[html[data-theme='dark']_&]:drop-shadow-[0_28px_36px_rgba(0,0,0,0.35)]
[html[data-theme='dark']_&]:hover:drop-shadow-[0_34px_46px_rgba(0,0,0,0.42)]
`;

export const aboutContentStyles = `
relative
z-10
flex
flex-col
items-start
text-left
`;

export const aboutLabelStyles = `
mb-6
inline-flex
items-center
gap-3
text-sm
font-bold
uppercase
tracking-[0.14em]
text-pink-700
[html[data-theme='dark']_&]:text-blue-400
`;

export const aboutLabelDotStyles = `
h-3
w-3
rounded-full
bg-pink-700
[html[data-theme='dark']_&]:bg-blue-500
`;

export const aboutHeadingStyles = `
max-w-[43rem]
text-[clamp(2.3rem,4vw,4rem)]
font-black
leading-[1.14]
tracking-normal
text-slate-950
[html[data-theme='dark']_&]:text-white
`;

export const aboutHeadingAccentStyles = `
bg-gradient-to-r
from-pink-600
to-pink-600
bg-clip-text
text-transparent
[html[data-theme='dark']_&]:from-blue-400
[html[data-theme='dark']_&]:to-blue-600
`;

export const aboutAccentRuleStyles = `
mt-7
h-[3px]
w-32
rounded-full
bg-gradient-to-r
from-pink-400
via-pink-300
to-transparent
[html[data-theme='dark']_&]:from-blue-500
[html[data-theme='dark']_&]:via-cyan-300
`;

export const aboutDescriptionGroupStyles = `
mt-7
flex
max-w-[43rem]
flex-col
gap-5
`;

export const aboutDescriptionStyles = `
text-lg
leading-9
text-slate-600
[html[data-theme='dark']_&]:text-slate-200
`;

export const aboutStatsPlaceholderStyles = `
mt-10
grid
w-full
grid-cols-1
gap-5
sm:grid-cols-2
lg:grid-cols-4
`;

export const aboutStatCardStyles = `
min-h-40
rounded-2xl
border-pink-200
bg-white/76
p-6
text-center
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

export const aboutStatValueStyles = `
text-[clamp(1.65rem,2.5vw,2.15rem)]
font-black
leading-tight
text-pink-700
[html[data-theme='dark']_&]:text-blue-400
`;

export const aboutStatLabelStyles = `
mt-3
text-base
font-bold
leading-6
text-slate-950
[html[data-theme='dark']_&]:text-white
`;

export const aboutStatDescriptionStyles = `
mt-2
text-sm
leading-6
text-slate-600
[html[data-theme='dark']_&]:text-slate-300
`;

export const aboutTechnologySectionStyles = `
mt-10
w-full
rounded-[1.35rem]
border
border-pink-200
bg-white/62
p-6
shadow-[0_16px_38px_rgba(244,114,182,0.09),0_1px_0_rgba(255,255,255,0.76)_inset]
backdrop-blur-xl
sm:p-7
[html[data-theme='dark']_&]:border-blue-500/45
[html[data-theme='dark']_&]:bg-blue-950/32
[html[data-theme='dark']_&]:shadow-[0_16px_40px_rgba(0,0,0,0.16),0_1px_0_rgba(96,165,250,0.14)_inset]
`;

export const aboutTechnologyHeaderStyles = `
mb-6
flex
items-center
gap-3
text-sm
font-bold
uppercase
tracking-[0.14em]
text-pink-700
[html[data-theme='dark']_&]:text-blue-400
`;

export const aboutTechnologyGridStyles = `
grid
grid-cols-1
gap-5
xl:grid-cols-3
`;

export const aboutTechnologyCardStyles = `
rounded-2xl
border-pink-100
bg-white/72
p-5
shadow-[0_10px_24px_rgba(244,114,182,0.06)]
transition
duration-300
ease-out
hover:border-pink-200
hover:bg-white/86
hover:shadow-[0_16px_34px_rgba(244,114,182,0.12)]
focus-within:border-pink-300
focus-within:shadow-[0_0_0_3px_rgba(236,72,153,0.14),0_14px_28px_rgba(244,114,182,0.1)]
motion-reduce:transition-none
[html[data-theme='dark']_&]:border-blue-500/35
[html[data-theme='dark']_&]:bg-slate-950/28
[html[data-theme='dark']_&]:shadow-[0_10px_24px_rgba(0,0,0,0.1)]
[html[data-theme='dark']_&]:hover:border-blue-400/55
[html[data-theme='dark']_&]:hover:bg-slate-950/38
[html[data-theme='dark']_&]:hover:shadow-[0_16px_34px_rgba(37,99,235,0.12)]
[html[data-theme='dark']_&]:focus-within:border-blue-400
[html[data-theme='dark']_&]:focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.16),0_14px_28px_rgba(0,0,0,0.14)]
`;

export const aboutTechnologyTitleStyles = `
mb-4
text-base
font-bold
text-slate-950
[html[data-theme='dark']_&]:text-white
`;

export const aboutTechnologyListStyles = `
flex
flex-wrap
gap-3
`;

export const aboutTechnologyBadgeStyles = `
border
border-pink-200
bg-pink-50
px-3.5
py-2
text-sm
font-semibold
text-pink-700
shadow-[0_8px_18px_rgba(244,114,182,0.08)]
transition
duration-200
ease-out
hover:-translate-y-0.5
hover:border-pink-300
hover:bg-pink-100
hover:text-pink-700
hover:shadow-[0_12px_24px_rgba(244,114,182,0.14)]
focus-visible:outline
focus-visible:outline-2
focus-visible:outline-offset-2
focus-visible:outline-pink-700
motion-reduce:transition-none
motion-reduce:hover:translate-y-0
[html[data-theme='dark']_&]:border-blue-500/45
[html[data-theme='dark']_&]:bg-blue-500/12
[html[data-theme='dark']_&]:text-blue-300
[html[data-theme='dark']_&]:shadow-[0_8px_18px_rgba(37,99,235,0.08)]
[html[data-theme='dark']_&]:hover:border-blue-400/70
[html[data-theme='dark']_&]:hover:bg-blue-500/18
[html[data-theme='dark']_&]:hover:text-blue-200
[html[data-theme='dark']_&]:hover:shadow-[0_12px_24px_rgba(37,99,235,0.14)]
[html[data-theme='dark']_&]:focus-visible:outline-blue-400
`;
