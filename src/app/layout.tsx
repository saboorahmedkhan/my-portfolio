import './globals.css'

export const metadata = {
  title: 'Saboor Ahmed Khan',
  description: "Hi I'm PIAIC WEB 3.0 Metaverse & A.I course student. Welcome to my portfolio website created with NextJs 13 and Tailwind CSS",
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
