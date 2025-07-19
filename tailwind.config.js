module.exports = {
    content: [
        './src/**/*.{html, js}', './src/*.html'
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    1: '#72A45C', '1-light' : '#DDE9D8', '1-dark' : '#24341D',
                    2: '#A45C89', '2-light' : '#E9D8E3', '2-dark' : '#341D2C',
                },

                status: {
                    success: {
                        DEFAULT: '#5DA857',
                        light: '#FAFEF7',
                        dark: '#588450',
                    },
                    alert: {
                        DEFAULT: '#FFCE73',
                        light: '#FFF9F6',
                        dark: '#BA9452',
                    },
                    error: {
                        DEFAULT: '#FF0909',
                        light: '#FEF5F7',
                        dark: '#A92B2E',
                    }
                },

                gray: {
                    1: '#FFFFFF',
                    2: '#F8F9FA',
                    3: '#E9ECEF',
                    4: '#DEE2E6',
                    5: '#CED4DA',
                    6: '#ADB5BD',
                    7: '#6C757D',
                    8: '#495057',
                    9: '#343A40',
                    10: '#212529',
                }
            }
        },
    },
}