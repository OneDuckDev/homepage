import React, { HTMLProps } from 'react'
import NextLink from 'next/link'
import { Heading, Box, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface WorkTitleProps {
    children: React.ReactNode
}

export default function WorkTitle({ children }: WorkTitleProps) {
    return (
        <Box>
            <NextLink href="/works" passHref>
                <Link>Works</Link>
            </NextLink>
            <span>
                {' '}
                <ChevronRightIcon />{' '}
            </span>
            <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>
    )
}
