import { defineLayerStyles, defineTextStyles } from '@pandacss/dev'

/* -----------------------------------------------------------------------------
 * Text styles
 * -----------------------------------------------------------------------------*/

export const textStyles = defineTextStyles({
    h1: {
        description: 'The heading text style - used in h1 & sometimes h2',
        value: {
            fontFamily: 'helvetica_neue',
            fontWeight: 'light',
            fontSize: '8xl',
            lineHeight: 'tight  '
        }
    },
})

/* -----------------------------------------------------------------------------
 * Layer styles
 * -----------------------------------------------------------------------------*/

export const layerStyles = defineLayerStyles({
    container: {
        description: 'container styles',
        value: {
            paddingLeft: 20,
            paddingRight: 20,
        },
    }
})