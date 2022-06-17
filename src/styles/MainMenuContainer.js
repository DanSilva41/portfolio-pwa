import styled from "styled-components";

export const MainMenuContainer = styled.nav`
    ul {
        list-style: none;
        padding: 0;

        li {
            display: inline-block;
            margin-right: 50px;
            font-size: 18px;

            a {
                color: white;
                text-decoration: none;

                :hover {
                    color: #ccc;
                }
            }
            }
    }
`