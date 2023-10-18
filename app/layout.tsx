import React from "react"
import "./global.css"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="p-8 bg-gray-50">{children}</body>
      </html>
    )
  }