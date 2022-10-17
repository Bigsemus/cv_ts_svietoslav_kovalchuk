type AvailableThemes = 'light' | 'dark'

interface Theme {
    [key: string]: string,
}

export const themes: Record<AvailableThemes, Theme> = {
    light: {
        'cursor': 'url(../assets/icon/hand-cursor-transparent-dark.svg), auto;',
        'headerFooterBGColor': '#474747',
        'bodyBGColor': '#FBFBFB',
        'colorText': '#474747',
        'linkColor': '#474747',
        "darkTheme": "false",
        "bgMessage": "#FFFFFF",
        "bgCatFact": "#FFFFFF",
        "bgContactInput": "#FFFFFF",
    },
    dark: {
        'cursor': 'pointer',
        'headerFooterBGColor': '#2b2b2b',
        'bodyBGColor': '#303841',
        'colorText': '#CEC7C7',
        'linkColor': '#FBFBFB',
        "darkTheme": "true",
        "bgMessage": "#353a4d",
        "bgCatFact": "#3d3a47",
        "bgContactInput": "#fdfdfe",
    }
}