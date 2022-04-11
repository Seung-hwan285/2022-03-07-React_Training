import styled from "styled-components";

export const Template = styled.div`
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  background-color: #fcfed1;
  padding-top: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h1`
    text-align : center;
    font-size : 3rem;
    margin : 0;
`;

export const TodoInputBox =styled.div`
  border-top: 1px solid #eddcd2;
  display: flex;
  margin: 0 1rem;
  padding: 1rem;
      
`;

export const Input = styled.input`
    flex: 1;
    outline: none;
    border : none;
    background: transparent;
    
`;

export const AddButton = styled.button`
  outline: none;
  border: none;
  border-radius: 20px 20px;
  background-color: #defe5c;
  padding: 1rem 2rem;
  color: black;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #e29578;
    color: #ffffff;
  }
  &:active {
    background-color: #e29578;
    color: #ffffff;
  }
`;