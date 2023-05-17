import Navbar from '$lib/components/Navbar.svelte'
import { it } from 'vitest'
import { render } from '@testing-library/svelte'

it("It displays 'Homepage' text", () => {
const {getByText} = render(Navbar)

    getByText('Navbar')
}) 

