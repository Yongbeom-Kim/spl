import { Link as _Link } from "@tanstack/react-router"
import classNames from "classnames"

export const Link = ({ className, ...props }: React.ComponentProps<typeof _Link>) => {
	return (
		<_Link
			{...props}
			className={classNames(className, 'text-md text-accent-red-700 font-main hover:underline')}
		/>
	)
}
