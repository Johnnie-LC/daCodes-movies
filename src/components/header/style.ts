import styled from 'styled-components'

export const NavBar = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    list-style: none;
    min-width: 500px;
    padding: 0 100px;
    background-color: rgba(81, 65, 234, 1);
    height: 100px;
    margin-top: 0;
    margin-bottom: 98px;

    @media (max-width: 700px) {
        flex-direction: column;
        height: 150px;
        gap: 0;
        margin-bottom: 10px;
        li {
         width: 100%;
         padding: 5px 0;   
        }
    }
`
