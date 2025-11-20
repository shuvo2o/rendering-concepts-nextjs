"use client"
import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid' 

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div>
            <button onClick= {toggleTheme} className="p-2 rounded bg-gray-200 dark:bg-gray-700">
                {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
            </button>
        </div>
    )
}

export default ThemeSwitcher
