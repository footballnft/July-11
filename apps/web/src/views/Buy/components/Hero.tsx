import { Box, Flex, Heading } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import Container from 'components/Layout/Container'


const StyledHero = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  padding-bottom: 32px;
  padding-top: 32px;
`

const Hero = () => {
  const { t } = useTranslation()

  return (
    <StyledHero>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Box pr="32px">
            <Heading as="h1" scale="xxl" color="secondary" mb="16px">
              {t('WARNING')}
            </Heading>
            <Heading as="h3" scale="lg" mb="16px">
              {t(' NO KYC, ONLY APPLIES TO TRANSACTIONS OF $50 (OR ITS EQUIVALENTS) AND BELOW, kindly purchase BEP20 tokens.')}
            </Heading>
          </Box>
          
        </Flex>
      </Container>
    </StyledHero>
  )
}

export default Hero
