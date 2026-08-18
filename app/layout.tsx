export const metadata = {
  title: 'Fashion AI Planner',
  description: 'Your daily clothing guide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
