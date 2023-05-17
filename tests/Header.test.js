import Header from '$lib/components/Header.svelte'
import { it } from 'vitest'
import { render } from '@testing-library/svelte'

it("displays 'Header' text", () => {
const {getByText} = render(Header)

    getByText('Header')
}) 


