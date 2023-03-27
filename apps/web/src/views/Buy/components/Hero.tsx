import { Box, Flex, Heading } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import Container from 'components/Layout/Container'


const StyledHero = styled(Box)`
  background: ${({ theme }) => theme.colors.gradientBubblegum};
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
              {t(' The exemption from KYC requirements is limited to transactions of $50 or less (or its equivalent), kindly purchase BEP20 tokens.')}
            </Heading>
          </Box>
          
        </Flex>
      </Container>
    </StyledHero>
  )
}

export default Hero
