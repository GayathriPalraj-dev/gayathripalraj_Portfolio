export const heroSectionStyles = `
relative
isolate
min-h-[calc(100vh-5rem)]
w-full
!w-full
!max-w-none
overflow-hidden
!flex
!items-center
!bg-transparent
!p-0
!py-10
sm:!py-12
lg:!py-14
!shadow-none
`;

export const heroShellStyles = `
relative
overflow-hidden
rounded-[2rem]
border
border-pink-300/70
bg-[radial-gradient(circle_at_78%_36%,rgba(244,114,182,0.22),transparent_25%),linear-gradient(135deg,#fff7fb_0%,#ffffff_45%,#fff0f7_100%)]
px-5
pb-6
pt-9
shadow-[0_30px_90px_rgba(244,114,182,0.16)]
transition-colors
duration-300
sm:px-8
sm:pb-8
lg:px-12
xl:px-14
lg:pb-8
lg:pt-16
[html[data-theme='dark']_&]:border-blue-500/80
[html[data-theme='dark']_&]:bg-[radial-gradient(circle_at_78%_36%,rgba(37,99,235,0.24),transparent_25%),linear-gradient(135deg,#020817_0%,#061227_48%,#020817_100%)]
[html[data-theme='dark']_&]:shadow-[0_30px_100px_rgba(37,99,235,0.18)]
`;

export const heroDecorLayerStyles = `
pointer-events-none
absolute
inset-0
overflow-hidden
`;

export const heroContainerStyles = `
relative
z-10
grid
min-h-[42rem]
grid-cols-1
items-center
gap-10
pt-6
lg:grid-cols-[0.93fr_1.07fr]
lg:gap-10
xl:gap-12
`;

export const heroContentStyles = `
relative
z-20
flex
max-w-[43rem]
flex-col
items-start
pt-4
text-left
sm:pt-8
lg:pt-0
`;

export const heroGreetingStyles = `
mb-6
flex
items-center
gap-5
text-2xl
font-semibold
leading-none
text-slate-950
sm:text-3xl
[html[data-theme='dark']_&]:text-white
`;

export const heroNameStyles = `
text-[clamp(3.45rem,5.6vw,5.45rem)]
font-black
leading-[0.95]
tracking-normal
text-slate-950
sm:whitespace-nowrap
[html[data-theme='dark']_&]:text-white
`;

export const heroNameAccentStyles = `
bg-gradient-to-r
from-pink-500
to-pink-600
bg-clip-text
text-transparent
[html[data-theme='dark']_&]:from-blue-400
[html[data-theme='dark']_&]:to-blue-600
`;

export const heroRoleStyles = `
mt-8
min-h-[3.15rem]
text-[clamp(1.85rem,3.1vw,2.75rem)]
font-bold
leading-tight
text-pink-500
[html[data-theme='dark']_&]:text-blue-500
`;

export const heroCursorStyles = `
ml-2
inline-block
animate-pulse
font-medium
`;

export const heroAccentRuleStyles = `
mt-5
h-[3px]
w-32
rounded-full
bg-gradient-to-r
from-pink-500
via-pink-300
to-transparent
[html[data-theme='dark']_&]:from-blue-500
[html[data-theme='dark']_&]:via-cyan-300
`;

export const heroTaglineStyles = `
mt-7
max-w-[37rem]
text-lg
font-normal
leading-9
text-slate-600
sm:text-xl
[html[data-theme='dark']_&]:text-slate-200
`;

export const heroButtonRowStyles = `
mt-10
flex
w-full
flex-col
gap-4
sm:w-auto
sm:flex-row
`;

export const heroPrimaryCtaStyles = `
group
inline-flex
min-h-14
items-center
justify-center
gap-4
rounded-lg
bg-gradient-to-r
from-pink-500
to-pink-500
px-8
text-base
font-semibold
text-white
shadow-[0_16px_35px_rgba(236,72,153,0.26)]
transition
duration-300
hover:-translate-y-0.5
hover:shadow-[0_20px_42px_rgba(236,72,153,0.34)]
focus-visible:outline
focus-visible:outline-2
focus-visible:outline-offset-4
focus-visible:outline-pink-500
[html[data-theme='dark']_&]:from-blue-500
[html[data-theme='dark']_&]:to-blue-600
[html[data-theme='dark']_&]:shadow-[0_16px_36px_rgba(37,99,235,0.34)]
`;

export const heroSecondaryCtaStyles = `
group
inline-flex
min-h-14
items-center
justify-center
gap-4
rounded-lg
border
border-pink-500
bg-white/60
px-8
text-base
font-semibold
text-pink-500
transition
duration-300
hover:-translate-y-0.5
hover:bg-pink-50
focus-visible:outline
focus-visible:outline-2
focus-visible:outline-offset-4
focus-visible:outline-pink-500
[html[data-theme='dark']_&]:border-blue-500
[html[data-theme='dark']_&]:bg-transparent
[html[data-theme='dark']_&]:text-blue-400
[html[data-theme='dark']_&]:hover:bg-blue-500/10
`;

export const heroSocialListStyles = `
mt-10
flex
items-center
gap-7
`;

export const heroSocialLinkStyles = `
flex
h-14
w-14
items-center
justify-center
rounded-xl
bg-pink-100/75
text-slate-950
shadow-[0_12px_28px_rgba(236,72,153,0.12)]
transition
duration-300
hover:-translate-y-1
hover:bg-pink-500
hover:text-white
focus-visible:outline
focus-visible:outline-2
focus-visible:outline-offset-4
focus-visible:outline-pink-500
[html[data-theme='dark']_&]:border
[html[data-theme='dark']_&]:border-blue-500/50
[html[data-theme='dark']_&]:bg-blue-950/45
[html[data-theme='dark']_&]:text-blue-500
[html[data-theme='dark']_&]:shadow-none
[html[data-theme='dark']_&]:hover:bg-blue-500
[html[data-theme='dark']_&]:hover:text-white
`;

export const heroImageWrapperStyles = `
relative
z-10
flex
min-h-[30rem]
items-end
justify-center
self-end
lg:min-h-[41rem]
`;

export const heroPortraitFrameStyles = `
relative
w-full
max-w-[39rem]
overflow-hidden
rounded-[2rem]
lg:max-w-[43rem]
`;

export const heroPortraitStyles = `
relative
z-10
h-auto
w-full
select-none
object-contain
object-bottom
drop-shadow-[0_26px_32px_rgba(15,23,42,0.15)]
[html[data-theme='dark']_&]:drop-shadow-[0_28px_38px_rgba(0,0,0,0.32)]
`;

export const heroStatsStyles = `
relative
z-20
mt-10
grid
grid-cols-1
overflow-hidden
rounded-[1.35rem]
border
border-pink-200
bg-white/82
shadow-[0_20px_50px_rgba(244,114,182,0.13)]
backdrop-blur-xl
sm:grid-cols-2
lg:mt-10
lg:grid-cols-4
[html[data-theme='dark']_&]:border-blue-500/80
[html[data-theme='dark']_&]:bg-blue-950/42
[html[data-theme='dark']_&]:shadow-[0_24px_60px_rgba(0,0,0,0.2)]
`;

export const heroStatItemStyles = `
flex
min-h-40
flex-col
items-center
justify-center
gap-3
border-pink-200
px-8
py-8
text-center
not-last:border-b
sm:odd:border-r
lg:border-b-0
lg:not-last:border-r
[html[data-theme='dark']_&]:border-blue-500/55
`;

export const heroStatIconStyles = `
text-pink-500
[html[data-theme='dark']_&]:text-blue-500
`;

export const heroStatTitleStyles = `
text-lg
font-bold
text-slate-950
[html[data-theme='dark']_&]:text-white
`;

export const heroStatDescriptionStyles = `
text-base
leading-6
text-slate-600
[html[data-theme='dark']_&]:text-slate-200
`;
