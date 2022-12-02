export interface Theme {
    breakpoint: string
    appMaxWidth: string,
    palette: {
        bg: {
            primary: string,
            secondary: string,
        },
        fg: {
            primary: string,
            secondary: string
        }
        tints: {
            blue: string
            yellow: string
            red: string,
            pink: string,
            green: string
        }
    },
    typographies: {
        h1: Typography,
        h2: Typography,
        body1: Typography,
        body2: Typography,
        caption: Typography
    }
}

export interface Typography {
    fontSize: string,
    fontWeight: number
    color: string
}

export const theme: Theme = {
    breakpoint: "1280px",
    appMaxWidth: "1440px",
    palette: {
        bg: {
            primary: "#052038",
            secondary: "#0D4475"
        },
        fg: {
            primary: "#F5F3FF",
            secondary: "#E1DBFF"
        },
        tints: {
            blue: "#55DDFB",
            red: "#FB8855",
            yellow: "#F4FB55",
            pink: "#F755FB",
            green: "#62FB55"
        }
    },
    typographies: {
        h1: {
            color: "#F5F3FF",
            fontSize: "28px",
            fontWeight: 700
        },
        h2: {
            color: "#E1DBFF",
            fontSize: "24px",
            fontWeight: 700
        },
        body1: {
            color: "#F5F3FF",
            fontSize: "16px",
            fontWeight: 500
        },
        body2: {
            color: "#E1DBFF",
            fontSize: "16px",
            fontWeight: 700
        },
        caption: {
            color: "#E1DBFF",
            fontSize: "14px",
            fontWeight: 400
        }
    }
}