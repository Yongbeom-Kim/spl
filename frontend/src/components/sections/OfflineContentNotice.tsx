type OfflineContentNoticeProps = {
  pageName: string
}

export const OfflineContentNotice = ({ pageName }: OfflineContentNoticeProps) => (
  <div className="space-y-4">
    <p>
      The detailed body copy for the <strong>{pageName}</strong> page needs to be
      pulled from funmanfung.com, but the current environment cannot reach that
      domain. The section layout is ready—just replace this notice with the
      scraped text once it is available.
    </p>
    <p className="text-neutral-300">
      Keeping the sections in place preserves the requested full-screen flow while
      we wait for production content.
    </p>
  </div>
)
