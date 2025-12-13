type ButtonVariant = 'red' | 'translucent'

type ButtonProps = {
	variant: ButtonVariant
	children: React.ReactNode
	onClick?: () => void
	className?: string
}

export const Button = ({ variant, children, onClick, className = '' }: ButtonProps) => {
	const baseClasses = "text-neutral-0 font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center"
	
	const variantClasses = {
		red: "bg-accent-red-600 hover:bg-accent-red-700",
		translucent: "bg-gray-500/60 border border-gray-100/50 hover:bg-gray-500/70"
	}

	return (
		<button
			onClick={onClick}
			className={`${baseClasses} ${variantClasses[variant]} ${className}`}
		>
			{children}
		</button>
	)
}

