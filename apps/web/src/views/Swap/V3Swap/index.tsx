import { SmartRouter } from '@pancakeswap/smart-router/evm'
import { useMemo } from 'react'
import { shouldShowMMLiquidityError } from 'views/Swap/MMLinkPools/utils/exchange'
import { Box } from '@pancakeswap/uikit'
import { MMLiquidityWarning } from 'views/Swap/MMLinkPools/components/MMLiquidityWarning'
import { useDerivedBestTradeWithMM } from '../MMLinkPools/hooks/useDerivedSwapInfoWithMM'

import { FormHeader, FormMain, MMTradeDetail, PricingAndSlippage, SwapCommitButton, TradeDetails } from './containers'
import { MMCommitButton } from './containers/MMCommitButton'
import { useSwapBestTrade } from './hooks'

export function V3SwapForm() {
  const { isLoading, trade, refresh, syncing, isStale, error } = useSwapBestTrade()

  const mm = useDerivedBestTradeWithMM(trade)

  const finalTrade = mm.isMMBetter ? mm?.mmTradeInfo?.trade : trade

  const tradeLoaded = !isLoading
  const price = useMemo(() => trade && SmartRouter.getExecutionPrice(trade), [trade])

  return (
    <>
      <FormHeader onRefresh={refresh} refreshDisabled={!tradeLoaded || syncing || !isStale} />
      <FormMain
        tradeLoading={!tradeLoaded}
        pricingAndSlippage={<PricingAndSlippage priceLoading={isLoading} price={price} showSlippage={!mm.isMMBetter} />}
        inputAmount={finalTrade?.inputAmount}
        outputAmount={finalTrade?.outputAmount}
        swapCommitButton={
          mm?.isMMBetter ? (
            <MMCommitButton {...mm} />
          ) : (
            <SwapCommitButton trade={trade} tradeError={error} tradeLoading={!tradeLoaded} />
          )
        }
      />

      {mm.isMMBetter ? (
        <MMTradeDetail loaded={!mm.mmOrderBookTrade.isLoading} mmTrade={mm.mmTradeInfo} />
      ) : (
        <TradeDetails loaded={tradeLoaded} trade={trade} />
      )}
      {(shouldShowMMLiquidityError(mm?.mmOrderBookTrade?.inputError) || mm?.mmRFQTrade?.error) && !trade && (
        <Box mt="5px">
          <MMLiquidityWarning />
        </Box>
      )}
    </>
  )
}
