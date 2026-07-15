export const logoContainerStyles = `
flex
items-center
gap-3
cursor-pointer
select-none
focus-visible:outline
focus-visible:outline-2
focus-visible:outline-offset-4
focus-visible:outline-pink-700
[html[data-theme='dark']_&]:focus-visible:outline-blue-400
`;

export const logoIconStyles = `
flex
items-center
justify-center
w-12
h-12
rounded-full
bg-primary
text-white
text-2xl
font-bold
shadow-md
`;

export const logoTextStyles = `
text-xl
font-bold
text-foreground
tracking-tight
sm:text-2xl
`;
