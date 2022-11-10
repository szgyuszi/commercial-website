import {render, screen, fireEvent} from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from 'react-router-dom';

describe('Testing Header component', () => {
    let loggedIn:boolean = true

    const componentUnderTest = <Header loggedIn={loggedIn}/>
    const wrapper = {wrapper: MemoryRouter}

    it("Testing if profile section is visible when logged in", ()=> {
        render(componentUnderTest, wrapper)
        const profile = screen.getByTestId("profile")
        expect(profile).toBeDefined()
    })

/*    it("Testing if profileIcon clicked menu is shown", () => {
        render(componentUnderTest, wrapper)
        const profileIcon = screen.getByTestId("profile-icon");
        fireEvent(profileIcon, new MouseEvent('click'));
        const profileMenu = screen.getByTestId("profile-menu");
        expect(profileMenu).toBeDefined();
    })*/

    it('Testing if profile section is not-visible when logged out', () => {
        let loggedIn:boolean = false

        const componentUnderTest = <Header loggedIn={loggedIn}/>

        render(componentUnderTest, wrapper)
        const getProfile = () => {
            try {
                return screen.getByTestId("profile")
            } catch (e) {
                return undefined
            }
        }
        expect(getProfile()).toBeUndefined()
    });
});