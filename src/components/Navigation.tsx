/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { useTheme } from 'next-themes'
import ThemeSwitch from './ThemeSwitch'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme() // Hook to get the current theme
  const isDarkMode = theme === 'dark'

  return (
    <nav className="relative mx-auto w-full max-w-screen-xl">
      <div className="flex items-center justify-between py-4">
        {/* Conditional Image Link for Light and Dark Mode */}
        <Link href="/" className="nav-link no-hover">
          <img
            src={
              isDarkMode ? '/images/dark-logo.png' : '/images/light-logo.png'
            }
            alt="Home"
            className="h-24 w-24"
          />
        </Link>

        {/* Spacer to push the hamburger icon to the right */}
        <div className="flex-grow"></div>

        {/* Hamburger Menu Button for Mobile */}
        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="absolute right-4 p-2 text-[2.5rem] focus:outline-none md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 mx-auto flex w-full max-w-screen-xl flex-col items-center gap-4 bg-white pt-14 dark:bg-gray-800 md:hidden">
          {/* Close Button Inside the Mobile Menu */}
          <button
            aria-label="Close menu"
            className="absolute right-4 top-4 p-2 text-xl text-slate-800 dark:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdClose />
          </button>
          <Link
            href="/"
            className="nav-link no-hover"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={
                isDarkMode ? '/images/dark-logo.png' : '/images/light-logo.png'
              }
              alt="Home"
              className="h-24 w-24"
            />
          </Link>
          <Link
            href="/experiences"
            className="nav-link text-lg font-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Experiences
          </Link>
          <Link
            href="/projects"
            className="nav-link text-lg font-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/music"
            className="nav-link text-lg font-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/blogs"
            className="nav-link text-lg font-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Thoughts
          </Link>
          <ThemeSwitch />
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:space-x-2">
        <Link href="/experiences" className="nav-link text-lg font-light">
          Experiences
        </Link>
        <Link href="/projects" className="nav-link text-lg font-light">
          Projects
        </Link>
        <Link href="/music" className="nav-link text-lg font-light">
          Portfolio
        </Link>
        <Link href="/blogs" className="nav-link text-lg font-light">
          Thoughts
        </Link>
        <ThemeSwitch />
      </div>

      {/* Tablet Menu */}
      <div className="hidden md:flex md:items-center md:-space-x-[2rem] lg:hidden">
        <Link
          href="/experiences"
          className="nav-link no-hover text-lg font-light hover:text-gray-700 active:text-gray-900 dark:hover:text-gray-300 dark:active:text-gray-100"
        >
          Experiences
        </Link>
        <Link
          href="/projects"
          className="nav-link no-hover text-lg font-light hover:text-gray-700 active:text-gray-900 dark:hover:text-gray-300 dark:active:text-gray-100"
        >
          Projects
        </Link>
        <Link
          href="/music"
          className="nav-link no-hover text-lg font-light hover:text-gray-700 active:text-gray-900 dark:hover:text-gray-300 dark:active:text-gray-100"
        >
          Portfolio
        </Link>
        <Link
          href="/blogs"
          className="nav-link no-hover flex items-center space-x-4 text-lg font-light hover:text-gray-700 active:text-gray-900 dark:hover:text-gray-300 dark:active:text-gray-100"
        >
          <span>Thoughts</span>
          {'    '}
          <ThemeSwitch />
        </Link>
      </div>
    </nav>
  )
}
