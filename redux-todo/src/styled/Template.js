import styled from "styled-components";
export const Container =styled.div`
    width: 100vw;
    height: 200vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;


export const ContainerList=styled.div`
  width: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background: white;
  
  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0,0,0,0.34);
`;


export const ContainerItem=styled.div`
  margin: 10px 10px;
  padding: 10px 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-radius: 4px;
`;
export const Wrapper =styled.div`
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const InputBox =styled.input`
    width: 290px;
    height: 40px;
    margin: 10px 5px;
    border-radius: 10px;
    font-size: 1.2rem;
`;

export const Button =styled.button`
  font-size: 20px;
  width: 70px;
  height: 50px;
  background: white;
  border-radius: 10px;
  color: #20c997;
  
  box-shadow: 0 0 8px 0 rgba(0,0,0, 0.34);
  cursor: pointer;
  
`;

export const TextColumn = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Text=styled.span`
  color: red;
`

export const DeleteBtn=styled.button`
      color: #a892ee;
      border : none;
      background: white;
      cursor: pointer;
      float: right;
`;
