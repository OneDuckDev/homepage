import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Charka from '@/setup/Charka'
import theme from '@/theme/theme'
import { AnimatePresence, motion } from 'framer-motion'
import Fonts from '@/components/Fonts'
import MainLayout from '@/layouts/MainLayout'
import '@/styles/globals.css'

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Charka cookies={pageProps.cookies}>
                <Fonts />

                <MainLayout router={router}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={router.route}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onAnimationComplete={() => {
                                if (typeof window !== 'undefined') {
                                    window.scrollTo({ top: 0 })
                                }
                            }}
                        >
                            <Component {...pageProps} key={router.route} />
                        </motion.div>
                    </AnimatePresence>
                </MainLayout>
            </Charka>
        </ChakraProvider>
    )
}

export default MyApp
