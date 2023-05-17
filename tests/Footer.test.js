import Footer from '$lib/components/Footer.svelte'
import { it } from 'vitest'
import { render } from '@testing-library/svelte'

it("displays 'Footer' text", () => {
const {getByText} = render(Footer)

    getByText('Footer')
}) 



