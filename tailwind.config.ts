import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Minecraft-themed colors
				minecraft: {
					grass: '#5CB85C',
					dirt: '#8B4513',
					stone: '#808080',
					wood: '#DEB887',
					diamond: '#00CED1',
					emerald: '#50C878',
					gold: '#FFD700',
					redstone: '#DC143C',
					lapis: '#4169E1',
					coal: '#36454F',
					iron: '#C0C0C0',
					creeper: '#00AA00',
					sky: '#87CEEB',
					night: '#191970'
				},
				// New palette colors from your image
				palette: {
					'cyan-bright': '#00CED1',
					'cyan-green': '#00BFA5',
					'yellow-bright': '#FFD700',
					'gray-dark': '#4A4A4A',
					'gray-medium': '#6B6B6B',
					'gray-light': '#8A8A8A',
					'gray-lighter': '#A8A8A8',
					'gray-lightest': '#C6C6C6'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'minecraft-bounce': {
					'0%, 100%': {
						transform: 'translateY(0px) scale(1)'
					},
					'50%': {
						transform: 'translateY(-8px) scale(1.05)'
					}
				},
				'block-break': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' }
				},
				'pixel-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 0 0px rgba(93, 184, 92, 0.8)'
					},
					'50%': {
						boxShadow: '0 0 0 8px rgba(93, 184, 92, 0.3)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'minecraft-bounce': 'minecraft-bounce 2s ease-in-out infinite',
				'block-break': 'block-break 0.3s ease-in-out',
				'pixel-pulse': 'pixel-pulse 2s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'minecraft-grass': 'linear-gradient(to bottom, #5CB85C 0%, #228B22 100%)',
				'minecraft-dirt': 'linear-gradient(to bottom, #8B4513 0%, #654321 100%)',
				'minecraft-stone': 'linear-gradient(to bottom, #808080 0%, #696969 100%)',
				'minecraft-sky': 'linear-gradient(to bottom, #87CEEB 0%, #4682B4 100%)'
			},
			fontFamily: {
				'minecraft': ['Courier New', 'monospace']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
