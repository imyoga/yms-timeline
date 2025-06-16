import { Box } from '@mui/material'

import { TypographyShowcase } from './TypographyShowcase'
import { ColorsShowcase } from './ColorsShowcase'
import { ShadowsShowcase } from './ShadowsShowcase'
import { ButtonsShowcase } from './ButtonsShowcase'
import { ComponentsShowcase } from './ComponentsShowcase'
import { AlertsShowcase } from './AlertsShowcase'

/**
 * UiKit component that showcases all MUI components with different theme configurations
 * @returns {JSX.Element} A component displaying various themed elements
 * @example
 * <UiKit />
 */
export const UiKit = () => {
	return (
		<Box>
			<TypographyShowcase />
			<ColorsShowcase />
			<ShadowsShowcase />
			<ButtonsShowcase />
			<ComponentsShowcase />
			<AlertsShowcase />
		</Box>
	)
}
