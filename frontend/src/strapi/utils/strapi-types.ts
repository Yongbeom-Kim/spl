export type StrapiImageType = {
	id: number
	documentId: string
	name: string
	alternativeText: string | null
	caption: string | null
	width: number
	height: number
	formats: {
		thumbnail: {
			ext: string
			url: string
			hash: string
			mime: string
			name: string
			path: string | null
			size: number
			width: number
			height: number
			sizeInBytes: number
		}
	}
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: string | null
	provider: string
	provider_metadata: any | null
	createdAt: string
	updatedAt: string
	publishedAt: string
}

export type StrapiBaseObject = {
  id: number
  documentId: string
  createdAt: string // ISO datetime
  updatedAt: string // ISO datetime
  publishedAt: string // ISO datetime
}