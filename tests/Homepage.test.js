import { it } from 'vitest'
import { render } from '@testing-library/svelte'
import Homepage from '$lib/components/Homepage.svelte'

it("It displays 'Homepage' text", () => {
const {getByText} = render(Homepage)

    getByText('Homepage')
}) 
