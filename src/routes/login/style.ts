import styled from 'styled-components'

export const LoginContainer = styled.section`
  padding: 0 156px;
`

export const Form = styled.form`
  min-width: 500px;
  width: 50%;
  display: flex;
  flex-direction: column;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`
export const InputCheck = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 25px;

  input[type=checkbox] {
         position: relative;
  }
  input[type=checkbox]:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color:#545488;
  }
  input[type=checkbox]:checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color:#1E80EF;
  }
  input[type=checkbox]:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
  }

  label {
    font-style: italic;
    
    @media (max-width: 838px) {
        min-width: 292px;
        width: 100%;
    }
  }

  @media (max-width: 838px) {
        min-width: 292px;
        width: 100%;
  }
`
export const Input = styled.input`
  width: 550px;
  outline: none;
  background-color: rgba(81, 65, 234, 1);
  border: none;
  height: 60px;
  border-radius: 50px;
  font-size: 20px;
  padding-left: 20px;

  @media (max-width: 838px) {
        min-width: 292px;
        width: 100%;
  }
`

export const Label = styled.label`
  margin-bottom: 10px;
  text-align: left;
  font-size: 20px;

  @media (max-width: 838px) {
        min-width: 292px;
        width: 100%;
  }
`
const background = `
                linear-gradient(102.31deg, 
                  rgb(58 227 195) 12.56%,
                  rgb(105 130 228 / 84%) 85.09%, 
                  #725efb 99.05%)
                `
export const Button = styled.button`
  background: ${background};
  display: flex;
  width: 256px;
  border-radius: 100px;
  border-color: #323348;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  height: 70px;
  color: white;
  cursor: pointer;
`

export const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 97px;
  > h2{
    text-align: left;
    font-size: 45px;
    margin: 0;
  }
  > span {
    text-align: left;
    font-size: 20px;
  }
`
