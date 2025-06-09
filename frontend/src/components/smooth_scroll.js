"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function SmoothScrolling() {
    const pathName = usePathname()

    useEffect(() => {
        const smoothScrollToHash = () => {
            const hash = window.location.hash
            if (hash) {
                setTimeout(() => {
                    const el = document.getElementById(hash.substring(1))
                    if (el) {
                        el.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest'
                        })
                    }

                }, 300)
            }
        }
        smoothScrollToHash()

        const handleHashChange = () => {
            smoothScrollToHash()
        }

        window.addEventListener('hashchange', handleHashChange)
        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [pathName])
}