export const themes = {
    light: {
        logo: '#3498DB',
        background: '#F4F6F8',
        blue: '#3498D8',
        textTitle: '#000',
        textDescription: 'rgba(0, 0, 0, 0.7)',
        red: '#E74C3C',
        coloredBackground: '#3498D8',
        cardBackground: '#FFF',
        areaBackground: '#FFF',
        borders: 'transparent',
        footer: '#3498DB',
        footerButtons: '#FFF',
        shadow: '#3498DB',
        socialMediaButtons: '#3498D8',
        photo: '#ddd',
    },
    dark: {
        logo: '#FFF',
        background: '#121212',
        blue: '#3498D8',
        textTitle: '#FFF',
        textDescription: 'rgba(255, 255, 255, 0.7)',
        covidDanger: '#E74C3C',
        coloredBackground: '#272727',
        cardBackground: '#121212',
        areaBackground: '#272727',
        borders: '#272727',
        footer: '#121212',
        footerButtons: '#272727',
        shadow: '#1E1E1E',
        socialMediaButtons: '#1E1E1E',
        photo: '#333',
    }
}

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;