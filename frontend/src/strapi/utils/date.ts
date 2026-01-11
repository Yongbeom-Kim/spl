export const yyyymmddToDate = (dateStr: string) => {
	if (typeof dateStr !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
		throw new Error('Invalid date string: expected format yyyy-mm-dd');
	}
	const [, mm, dd] = dateStr.split('-').map(Number);
	if (mm < 1 || mm > 12) {
		throw new Error('Invalid month in date string: must be between 01 and 12');
	}
	if (dd < 1 || dd > 31) {
		throw new Error('Invalid day in date string: must be between 01 and 31');
	}
	return new Date(dateStr + 'T00:00:00')
}

export const dateToHumanReadable = (date: Date) => date.toLocaleDateString('en-GB', {
	day: 'numeric',
	month: 'short',
	year: 'numeric',
})