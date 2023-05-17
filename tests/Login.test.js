import Login from '$lib/components/Login.svelte'
import { it } from 'vitest'
import { render } from '@testing-library/svelte'

it("displays 'Footer' text", () => {
const {getByText} = render(Login)

    getByText('Email')
    getByText('Password')
    getByText('Submit')
}) 

