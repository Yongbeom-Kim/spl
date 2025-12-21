export type PropsOf<T extends HTMLElement> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>
export type PropsWithoutChildOf<T extends HTMLElement> = Omit<PropsOf<T>, 'children'>
export type DivPropsWithoutChild = PropsWithoutChildOf<HTMLDivElement>